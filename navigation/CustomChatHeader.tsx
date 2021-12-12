import React, { useEffect, useState } from "react";
import { Image, View, Text, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ChatRoomUser } from "../src/models";
import { DataStore } from "@aws-amplify/datastore";
import Auth from "@aws-amplify/auth";

const CustomChatHeader = (props) => {
  const { width } = useWindowDimensions();

  // const [user, setUser] =
  // useEffect(() => {
  //   const fetchChatRooms = async () => {
  //     const userData = await Auth.currentAuthenticatedUser();
  //     const chatRooms = (await DataStore.query(ChatRoomUser))
  //       .filter(
  //         (chatRoomUser) => chatRoomUser.user.id === userData.attributes.sub
  //       )
  //       .map((chatRoomUser) => chatRoomUser.chatroom);

  //   };

  //   fetchChatRooms();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width,
        margin: -10,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
          }}
          style={{ height: 30, width: 30, borderRadius: 15 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "tomato",
            marginLeft: 10,
          }}
        >
          {props.children}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color="tomato"
          style={{ marginRight: 20 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="tomato"
          style={{ marginRight: 20 }}
        />
      </View>
    </View>
  );
};

export default CustomChatHeader;
