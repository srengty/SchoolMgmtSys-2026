import { useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const router = useRouter()
    useEffect(()=>{
        const timer = setTimeout(async ()=>{
            await SplashScreen.hideAsync();
            router.replace('/home')
        },5000)
        
        return () => clearTimeout(timer);
    }, [])
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/splash-bg.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
