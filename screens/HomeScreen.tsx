import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";

export default function HomePage() {
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
