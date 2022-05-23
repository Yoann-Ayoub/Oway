import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';



export default function TabOneScreen() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oway</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('LogIn')}>
          <Text style={styles.text}>Se Connecter</Text>
        </TouchableOpacity>
        <View style={{flex:1, backgroundColor:"white"}}/>
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:"black",
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 150,
    height: 1,
    width: '80%',
  },
  buttonView:{
    flexDirection:"row",
    marginHorizontal:20,
    backgroundColor:"white", 
     alignItems:"center",
  },
  
  button:{
  height:30,
    flex:3,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:90,
    backgroundColor:"black"
  },
  text:{
    textAlign:"center",
    marginHorizontal:10,
  }
});
