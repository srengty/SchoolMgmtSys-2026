import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../themes/use-theme";
import MyButton from "../../components/my-button";
import ImageButton from "../../components/image-button";

export default function TeacherHomeScreen() {
  const theme = useTheme();
  let bg = require("../../assets/app-bg.png");
  if (theme.current == "dark") {
    bg = require("../../assets/app-bg-dark.png");
  }
  return (
    <View style={styles.container}>
      <Image source={bg} style={{ width: "100%", height: "100%" }} />
      <View
        style={{
          position: "absolute",
          flex: 1,
          flexDirection: "column",
          width: "100%",
          top: 80,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/spl-icon.png")}
            style={{ width: 160, height: 170, objectFit: "contain" }}
          />
        </View>
        <View style={{ marginTop: 60 }}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ImageButton
            text="Attendance"
            icon={require("../../assets/home/Attendance.png")}
          />
          <ImageButton
            text="Homework"
            icon={require("../../assets/home/Homework.png")}
          />
          <ImageButton
            text="Result"
            icon={require("../../assets/home/Exam.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 28
          }}
        >
          <ImageButton
            text="Exam Routine"
            icon={require("../../assets/home/Exam.png")}
          />
          <ImageButton
            text="Solution"
            icon={require("../../assets/home/Idea Sharing.png")}
          />
          <ImageButton
            text="Notice & Event"
            icon={require("../../assets/home/Questions.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: 28,
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            marginLeft: 18
          }}
        >
          <ImageButton
            text="Add User"
            icon={require("../../assets/home/Add User Male.png")}
          />
        </View>
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
