import { FontAwesome5, Ionicons, Zocial } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function HomeScreen() {
  const goToTeacher=async()=>{
    let username = AsyncStorage.getItem('loginedUser')
    if(username){router.push('/teachers')}
    else router.push('/login')
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/home-bg.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          flex: 1, flexDirection: 'column', width: '100%'
        }}
      >
        <Text style={{fontSize:18, color: '#0C46C4', paddingTop: 180, paddingBottom: 30, textAlign: 'center'}}>Choose Your Option:</Text>
        <View style={{flex: 1, width: '100%', flexDirection: "row", flexWrap: "wrap"}}>
          <View style={{ minWidth: "25%", width:'50%', flex: 1, alignItems: "center", height: 150 }}>
            <RoleButton
              roleName="Student"
              onPress={() => router.push("/login")}
              icon={<Ionicons name="school" size={48} color="white" />}
            />
          </View>
          <View style={{ minWidth: "25%", flex: 1, alignItems: "center", height: 150 }}>
            <RoleButton
              roleName="Teacher"
              onPress={goToTeacher}
              icon={
                <FontAwesome5
                  name="chalkboard-teacher"
                  size={48}
                  color="white"
                />
              }
            />
          </View>
          <View style={{ minWidth: "100%", flex: 1, alignItems: "center", height: 150 }}>
            <RoleButton
              roleName="Guest"
              icon={<Zocial name="guest" size={48} color="white" />}
            />
          </View>
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

function RoleButton({ roleName, icon, onPress = () => {} }) {
  return (
    <View>
      <TouchableHighlight onPress={onPress} underlayColor="white">
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 18,
              backgroundColor: "#0C46C4",
              aspectRatio: 1,
              alignItems: "center",
              padding: 18,
            }}
          >
            {icon}
          </View>
          <Text>{roleName}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
