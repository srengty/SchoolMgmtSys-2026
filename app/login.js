import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

export default function LoginScreen() {
    const [secure,setSecure] = useState(true)
    const [eye,setEye] = useState('eye')
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image
        source={require("../assets/home-bg.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          flex: 1,
          flexDirection: "column",
          width: "100%",
          padding: 30
        }}
      >
        <Text>Username</Text>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Username" style={styles.input}/>
            <Entypo name="user" size={24} color={'blue'}/>
        </View>
        <Text>Password</Text>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Password" style={styles.input} textContentType="password" secureTextEntry={secure}/>
            <TouchableOpacity onPress={()=>{setSecure(!secure);setEye(eye=='eye'?'eye-with-line':'eye')}}>
                <Entypo name={eye} size={24} color={'blue'}/>
            </TouchableOpacity>
        </View>
        <View style={[styles.inputGroup,{borderBottomWidth: 0}]}>
            <MyButton text={'Login'} style={{width: '100%'}}/>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
            <Text style={{textAlign: 'center'}}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexGrow: 1
},
inputGroup:{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
}
});

function MyButton({ text, onPress = () => {}, ...others }) {
  return (
    <View {...others}>
      <TouchableHighlight onPress={onPress} underlayColor="white">
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: '100%'
          }}
        >
          <View
            style={{
              borderRadius: 18,
              backgroundColor: "#0C46C4",
              alignItems: "center",
              padding: 18,
              width: '100%'
            }}
          >
            <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}