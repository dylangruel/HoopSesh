import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// for running project on Expo Go
// command prompt -> "cd FirstProject" -> "npm start"

//git add *
//git commit -m "Changed app file"
//git push origin master


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HoopSesh</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 30 , 
    color: "black" ,
    fontWeight: "bold" ,
  },
  buttonContainer: {
    marginTop: 20, // Add margin top to move the button down
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
