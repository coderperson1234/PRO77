import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator}
export default function App() {
  return (
    
    <View style={styles.container}>
     <ImageBackground source={require('../assets/photo.png')}> </ImageBackground>
     <TouchableOpacity onPress=()={'>'}
     <Text> 
     Button1
     </Text>
     </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
