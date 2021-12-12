import React from "react";
import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/core";
import MessageItem from "../components/MessageItem";
import MessageInput from "../components/MessageInput";
import Chats from "../assets/dummy-data/Chats";

const ChatRoom = () => {
  const { params } = useRoute();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => (
          <MessageItem message={item.content} id={item.user.id} />
        )}
      />
      <MessageInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default ChatRoom;
