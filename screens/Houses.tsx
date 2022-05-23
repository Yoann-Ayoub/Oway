import { useNavigation } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';



export default function Houses() {
  const navigation =useNavigation<StackNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logement</Text>
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
});
