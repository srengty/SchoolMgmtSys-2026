import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";

export function useTheme() {
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
  }, []);
  const current = colorScheme == "light" ? lightTheme : darkTheme;
  current.toggleTheme = () => {
    Appearance.setColorScheme(colorScheme == "light" ? "dark" : "light");
  };
  return current;
}
const lightTheme = {
  current: "light",
  background: "#FFFFFF",
  color: "#000000",
  amitBlue: "#0C46C4",
  primary: "#28C2A0",
};
const darkTheme = {
  current: "dark",
  background: "#222222",
  color: "#ffffff",
  amitBlue: "#9bb9f9",
  primary: "#5fe4c8",
};
