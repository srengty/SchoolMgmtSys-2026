import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../themes/use-theme";

export default function ImageButton({
  text = "",
  icon,
  backgroundColor,
  color,
  style,
  onPress=()=>{}
}) {
    const theme = useTheme()
    if(!backgroundColor){
        backgroundColor = theme.primary+'25'
    }
    if(!color){
        color = theme.color
    }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.container, style]}>
        <View style={[styles.button, { backgroundColor: backgroundColor }]}>
          <Image source={icon} style={{ width: 68, height: 68 }} />
        </View>
        <Text style={{ color: color }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    flex: 1,
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    aspectRatio: 1
  },
});
