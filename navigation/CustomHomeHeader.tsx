import React from "react";
import { Pressable, View, Text, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const CustomHomeHeader = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
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
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "tomato" }}>
        Pager
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color="tomato"
          style={{ marginRight: 20 }}
        />
        <Pressable onPress={() => navigation.navigate("Users")}>
          <Feather
            name="edit-2"
            size={24}
            color="tomato"
            style={{ marginRight: 20 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomHomeHeader;
