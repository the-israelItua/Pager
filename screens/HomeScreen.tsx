import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Auth from "@aws-amplify/auth";
import { DataStore } from "@aws-amplify/datastore";
import { ChatRoom, ChatRoomUser } from "../src/models";
import ListItem from "../components/ListItem";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";

export default function HomePage() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const chatRooms = (await DataStore.query(ChatRoomUser))
        .filter(
          (chatRoomUser) => chatRoomUser.user.id === userData.attributes.sub
        )
        .map((chatRoomUser) => chatRoomUser.chatroom);

      setChatRooms(chatRooms);
    };

    fetchChatRooms();
  }, []);

  return (
    <FlatList
      data={ChatRoomsData}
      renderItem={({ item }) => <ListItem data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.page}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
