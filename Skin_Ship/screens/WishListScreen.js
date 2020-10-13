import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import StarRating from '../components/StarRating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const WistListScreen = ({navigation}) => {
  
  const  { colors } = useTheme();
  const theme = useTheme();

    return (
      <ScrollView style={styles.container}>
        <StatusBar  barStyle= { theme.dark ? "light-content" :  "dark-content" }/>

        <View style={styles.cardsWrapper}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/1.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Skinsistar V Acne Clear Booter & Cream</Text>
              <Text style={{color:'#c0c0c0'}}>Acne&Blemish Treatments</Text>
              <StarRating ratings={3} reviews={35} />
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#FF0000'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Skinsista Vit C Extra Bright Booter & Cream</Text>
              <Text style={{color:'#c0c0c0'}}>Acne&Blemish Treatments</Text>
              <StarRating ratings={3} reviews={30} />
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#FF0000'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
              
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/7.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Acne-Aid Gentle Cleanser</Text>
              <Text style={{color:'#c0c0c0'}}>Cleansers</Text>
              <StarRating ratings={4} reviews={84} />
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#FF0000'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
            
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/11.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Smooto Aloe-E Snail Bright Gel</Text>
              <Text style={{color:'#c0c0c0'}}>Moisturizers</Text>
              <StarRating ratings={4} reviews={28} />
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                color='#FF0000'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </ScrollView>
    );
};

export default WistListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ffdbe9',
    borderRadius: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 150,
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