import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { withAuthenticator } from "aws-amplify-react-native";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { Pressable, Text } from "react-native";

Amplify.configure(awsconfig);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const logout = () => {
    Auth.signOut();
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Pressable onPress={logout}>
          <Text>ZLogout</Text>
        </Pressable>
      </SafeAreaProvider>
    );
  }
};

export default withAuthenticator(App);
