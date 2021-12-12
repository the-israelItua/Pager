import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../src/models";
import { FlatList, StyleSheet } from "react-native";
import UserItem from "../components/UserItem";
import users from "../assets/dummy-data/Users";

export default function UsersScreen() {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const fetchedUsers = await DataStore.query(User);

  //       setUsers(fetchedUsers);
  //     } catch (err) {
  //       console.log(err, "error");
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserItem user={item} />}
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
