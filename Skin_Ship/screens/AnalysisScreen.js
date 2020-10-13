import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';

const AnalysisScreen = () => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="วางส่วนผสมที่ต้องการวิเคราะห์"
          style={styles.TextInputStyleClass}

        />
         <View style={{alignItems:'center'}}>
         <TouchableOpacity style={styles.button} onPress={() =>{}}>

            <Text style={styles.text}>Analys</Text>

        </TouchableOpacity>
         </View>
       
      </View>
    );
};

export default AnalysisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,
  },
  TextInputStyleClass:{
    textAlign: 'center',
    height: 200,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20 ,
    backgroundColor : "#FFFFFF"
     
    },
    button: {
      width: '50%',
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: '#B03060',
      borderRadius: 5,
      marginTop: 20,
    },
  
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 5
    },
     
});