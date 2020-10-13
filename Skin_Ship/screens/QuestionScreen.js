import React, { Component } from 'react';


import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SignUpScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      skin: '',
      allergies: '',
      example: '',
    }
  }

  update_Function = () => {

    fetch('http://172.20.10.5/skinship/UpdateQuestion.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        user_name: this.state.name,

        skin: this.state.skin,

        allergies: this.state.allergies,

        example: this.state.example

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });


  }
  delete_Function = () => {

    fetch('http://172.20.10.5/skinship/DeleteQuestion.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        user_name: this.state.name
        
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });


  }



  render() {
    return (
      

      <View style={styles.MainContainer}>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="account"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={data => this.setState({ name: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text_footer}>Skin:</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="face-woman"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Your Skin"
              onChangeText={data => this.setState({ skin: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
           


          </View>
          <Text style={styles.text_footer}>allergies</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="skull-crossbones"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Allergies"
              onChangeText={data => this.setState({ allergies: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
           


          </View>
          <Text style={styles.text_footer}>Example Skincare</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="note"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Example"
              onChangeText={data => this.setState({ example: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
           


          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button} onPress={this.update_Function} >

              <Text style={styles.text}>Update</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.delete_Function} >

              <Text style={styles.text}>Delete</Text>

            </TouchableOpacity>


          </View>
          



        

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  txt: {
    fontFamily: 'SecularOne-Regular',
    fontSize: 28,
    marginBottom: 10,
    color: '#B03060',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},

  button: {

    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#B03060',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#B03060',
  },



});