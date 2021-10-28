import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";

interface User {
  imageUri: string;
  name: string;
  id: string;
}

interface ListData {
  users: User[];
  newMessages?: number;
  lastMessage: {
    content: string;
    createdAt: string;
  };
}

const ListItem = ({ data }: { data: ListData }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("ChatRoom", { chatRoomId: data.users[1].id })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.users[1].imageUri,
          }}
          style={styles.image}
        />
        {data.newMessages && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{data.newMessages}</Text>
          </View>
        )}
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{data.users[1].name}</Text>
          <Text style={styles.greyText}>{data.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.greyText} numberOfLines={1}>
          {data.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
