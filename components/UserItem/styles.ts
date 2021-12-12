import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    position: "relative",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    // backgroundColor: "#3777f0",
    backgroundColor: "tomato",
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
  },
  rowContainer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  greyText: {
    color: "grey",
  },
});

export default styles;
