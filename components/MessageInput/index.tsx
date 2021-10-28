import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import styles from "./styles";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message) {
      console.warn("submitted");
      setMessage("");
    } else {
      console.warn("plused");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
        />
        <Entypo
          name="attachment"
          size={24}
          color="grey"
          style={{ marginRight: 25 }}
        />
        <Feather
          name="camera"
          size={24}
          color="grey"
          style={{ marginRight: 15 }}
        />
      </View>
      <Pressable onPress={handleSend} style={styles.buttonContainer}>
        {!message ? (
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="white"
          />
        ) : (
          <Ionicons name="send" size={18} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
