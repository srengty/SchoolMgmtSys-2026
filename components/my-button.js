import { Text, TouchableHighlight, View } from "react-native";

export default function MyButton({ text, onPress = () => {}, color='#0C46C4', ...others }) {
  return (
    <View {...others}>
      <TouchableHighlight onPress={onPress} underlayColor="white">
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              borderRadius: 18,
              backgroundColor: color,
              alignItems: "center",
              padding: 18,
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>{text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}