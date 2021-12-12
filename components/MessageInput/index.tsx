import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./styles";
import EmojiSelector from "react-native-emoji-selector";
import * as ImagePicker from "expo-image-picker";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const libraryResponse =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        const photoResponse = await ImagePicker.requestCameraPermissionsAsync();
        if (
          libraryResponse.status !== "granted" ||
          photoResponse.status !== "granted"
        ) {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
      style={[styles.container, emojiOpen && { height: "50%" }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      {image !== "" && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
          <Pressable onPress={() => setImage("")}>
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={{ margin: 5 }}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Pressable onPress={() => setEmojiOpen(!emojiOpen)}>
            <SimpleLineIcons name="emotsmile" size={24} color="grey" />
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
          />
          <Pressable onPress={pickImage}>
            <Entypo
              name="attachment"
              size={24}
              color="grey"
              style={{ marginRight: 25 }}
            />
          </Pressable>
          <Pressable onPress={takePhoto}>
            <Feather
              name="camera"
              size={24}
              color="grey"
              style={{ marginRight: 15 }}
            />
          </Pressable>
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
      </View>
      {emojiOpen && (
        <EmojiSelector
          onEmojiSelected={(emoji) => setMessage(message + emoji)}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
