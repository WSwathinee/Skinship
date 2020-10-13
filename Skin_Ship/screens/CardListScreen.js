import * as React from 'react'
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { MultipleSelectPicker } from 'react-native-multi-select-picker';
import { Picker } from '@react-native-community/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


class  CardListScreen extends React.Component<any, {}> {
  
    state = {
        selectectedItems: [],
        isShownPicker: false,
        price: 'ไม่เกิน 100 บาท',
    }
    multiSelect

    
 
    render() {
        const items = [
            { label: 'Cleansers', value: '1' },
            { label: 'Toners', value: '2' },
            { label: 'Acne&Blemish Treatment', value: '3' },
            { label: 'Eye Cream & Treatment', value: '4' },
            { label: 'Serum, Essence & Ampoules', value: '5' },
            { label: 'Moisturizers', value: '6' },
            { label: 'Sheet Masks', value: '7' },
            { label: 'Wash-Off Masks', value: '8' },
            { label: 'Leave-On & Sleeping Mask', value: '9' },
            { label: 'Facial SunScreen', value: '10' }
        ]
        return (
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ isShownPicker: !this.state.isShownPicker })
                    }}
                    style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dadde3' }}
                >
                    <Text>The type of product you would like us to recommend.</Text>
                </TouchableOpacity>
                {this.state.isShownPicker ? <MultipleSelectPicker
                    items={items}
                    onSelectionsChange={(ele) => { this.setState({ selectectedItems: ele }) }}
                    selectedItems={this.state.selectectedItems}
                    buttonStyle={{ height: 100, justifyContent: 'center', alignItems: 'center' }}
                    buttonText='hello'
                    checkboxStyle={{ height: 20, width: 20 }}
                />
                    : null
                }
 
                {(this.state.selectectedItems || []).map((item: any, index) => {
                    return <Text key={index}>
                        {item.label}
                    </Text>
                })}

            
        

              <Text style={styles.text}>Toners</Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop:3,

              }}>
                <Text style={{color:'#000' ,fontSize: 18, marginLeft:10}}>Price</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 200,marginLeft: 20}}
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({price: itemValue})
                }>
                  <Picker.Item label="ไม่เกิน 100 บาท" value="ไม่เกิน 100 บาท" />
                  <Picker.Item label="ไม่เกิน 200 บาท" value="ไม่เกิน 200 บาท" />
                  <Picker.Item label="ไม่เกิน 300 บาท" value="ไม่เกิน 300 บาท" />
                </Picker>



              </View>
              <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/10.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Clean & Clear Essentials Oil-Control 100ml. 99.-</Text>
              <Text style={{color:'#c0c0c0'}}>Toners</Text>
              <Text style={{color:'#c0c0c0'}}>ปราศจากน้ำมัน ช่วยป้องกันสิวและสิวเสี้ยน</Text>
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text}>cleansers</Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop:3,

              }}>
                <Text style={{color:'#000' ,fontSize: 18, marginLeft:10}}>Price</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 200,marginLeft: 20}}
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({price: itemValue})
                }>
                  <Picker.Item label="ไม่เกิน 100 บาท" value="ไม่เกิน 100 บาท" />
                  <Picker.Item label="ไม่เกิน 200 บาท" value="ไม่เกิน 200 บาท" />
                  <Picker.Item label="ไม่เกิน 300 บาท" value="ไม่เกิน 300 บาท" />
                </Picker>



              </View>
              <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/8.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Clean & Clear Foaming Face Wash 100ml. 99.-</Text>
              <Text style={{color:'#c0c0c0'}}>Cleansers</Text>
              <Text style={{color:'#c0c0c0'}}>เคลียร์ผิวใสไวไร้สิว</Text>
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
            
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/14.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Garnier Light Complete 10g. 50.- </Text>
              <Text style={{color:'#c0c0c0'}}>ควบคุมความมัน ป้องกันสิว หน้าใสอย่างเป็นธรรมชาติ</Text>
              <Text style={{color:'#c0c0c0'}}></Text>
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
            
          </View>
          
          

          

 
            </ScrollView >
        )
    }
}

export default CardListScreen;

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    //textAlign: 'center',
    padding: 10,
    width: '100%',
    height: 50,
    paddingTop: 10,
    paddingBottom: 2,
    backgroundColor: '#B03060',
    borderRadius: 3,
    marginTop: 20
  },
  button: {

    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#B03060',
    borderRadius: 3,
    marginTop: 20
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },


});