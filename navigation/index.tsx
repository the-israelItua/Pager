import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Text, View, Image } from "react-native";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const CustomHomeHeader = () => {
  const { width, height } = useWindowDimensions();
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

const CustomChatHeader = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: -20,
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

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: CustomHomeHeader,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: CustomChatHeader,
          headerShown: true,
          headerTintColor: "tomato",
          title: "UserName",
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
