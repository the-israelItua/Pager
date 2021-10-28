import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface Message {
  message: string;
  id: string;
}

const myId = "u1";

const MessageItem = ({ message, id }: Message) => {
  const isUserMsg = id === myId ? true : false;
  return (
    <View style={isUserMsg ? styles.userContainer : styles.container}>
      <Text style={{ color: isUserMsg ? "black" : "white" }}>{message}</Text>
    </View>
  );
};

export default MessageItem;
