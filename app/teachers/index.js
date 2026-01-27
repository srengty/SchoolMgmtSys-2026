import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TeacherHomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/home-bg.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          flex: 1,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text>TeacherHomeScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
