import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});

export default styles;
