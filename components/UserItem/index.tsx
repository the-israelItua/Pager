import React from "react";
import { useNavigation } from "@react-navigation/core";
import { DataStore } from "@aws-amplify/datastore";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import Auth from "@aws-amplify/auth";
import { User, ChatRoom, ChatRoomUser } from "../../src/models";

interface UserType {
  imageUri: string;
  name: string;
  id: string;
}

const UserItem = ({ user }: { user: UserType }) => {
  const navigation = useNavigation();

  const onPress = async () => {
    const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

    const authUser = await Auth.currentAuthenticatedUser();
    const dbUser = await DataStore.query(User, authUser.attributes.sub);

    await DataStore.save(
      new ChatRoomUser({
        user: dbUser,
        chatroom: newChatRoom,
      })
    );

    await DataStore.save(
      new ChatRoomUser({
        user,
        chatroom: newChatRoom,
      })
    );

    navigation.navigate("ChatRoom", { id: newChatRoom });
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: user.imageUri ? user.imageUri : "",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UserItem;
