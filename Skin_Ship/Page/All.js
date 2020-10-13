import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import StarRating from '../components/StarRating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const All = ({navigation}) => {
  
  const  { colors } = useTheme();
  const theme = useTheme();

    return (
      <ScrollView style={styles.container}>
        <StatusBar  barStyle= { theme.dark ? "light-content" :  "dark-content" }/>

        <View style={styles.cardsWrapper}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>All Products</Text>
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
                color='#C0C0C0'
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
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
              
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>MoonA House -Essence Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Serum,Essence&Ampoules</Text>
              <StarRating ratings={1} reviews={11} />
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
                source={require('../assets/4.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>USTAR Vit C Pore Minimizing Botter Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Serum,Essence&Ampoules</Text>
              <StarRating ratings={1} reviews={29} />
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
                source={require('../assets/5.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Nivea Sun Protect&White</Text>
              <Text style={{color:'#c0c0c0'}}>Facial SunScreen</Text>
              <StarRating ratings={2} reviews={55} />
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
                source={require('../assets/6.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Rojukiss CC Serum Acne Poreless</Text>
              <Text style={{color:'#c0c0c0'}}>Facial SunScreen</Text>
              <StarRating ratings={1} reviews={35} />
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
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
            
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
              <Text style={styles.cardTitle}>Clean & Clear Foaming Face Wash</Text>
              <Text style={{color:'#c0c0c0'}}>Cleansers</Text>
              <StarRating ratings={3} reviews={53} />
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
                source={require('../assets/9.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Clean & Clear Fairness Toner</Text>
              <Text style={{color:'#c0c0c0'}}>Toners</Text>
              <StarRating ratings={2} reviews={63} />
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
                source={require('../assets/10.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Clean & Clear Essentials Oil-Control Toner</Text>
              <Text style={{color:'#c0c0c0'}}>Toners</Text>
              <StarRating ratings={3} reviews={55} />
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
                color='#C0C0C0'
                style={{paddingLeft:200}}
              />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/12.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Smooto Tomato Collagen White Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Serum,Essence&Ampoules</Text>
              <StarRating ratings={2} reviews={19} />
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
                source={require('../assets/13.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Garnier Sakura White</Text>
              <Text style={{color:'#c0c0c0'}}>Serum,Essence&Ampoules</Text>
              <StarRating ratings={3} reviews={35} />
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
              <Text style={styles.cardTitle}>Garnier Light Complete</Text>
              <Text style={{color:'#c0c0c0'}}>Cleansers</Text>
              <StarRating ratings={3} reviews={39} />
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
                source={require('../assets/15.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Ganier Men Oil Face Wash</Text>
              <Text style={{color:'#c0c0c0'}}>Cleansers</Text>
              <StarRating ratings={3} reviews={35} />
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
                source={require('../assets/16.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>KA UV Whitening</Text>
              <Text style={{color:'#c0c0c0'}}>Facial SunScreen</Text>
              <StarRating ratings={1} reviews={20} />
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
                source={require('../assets/17.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>KA UV SuperBloc Fluid Protector</Text>
              <Text style={{color:'#c0c0c0'}}>Facial SunScreen</Text>
              <StarRating ratings={1} reviews={3} />
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
                source={require('../assets/18.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Namu Life Snail White Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Serum,Essence&Ampoules</Text>
              <StarRating ratings={3} reviews={35} />
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
                source={require('../assets/19.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hada Labo Premium Whitening Lotion</Text>
              <Text style={{color:'#c0c0c0'}}>Moisturizer</Text>
              <StarRating ratings={3} reviews={35} />
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
                source={require('../assets/20.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hada Labo Hydrating Lotion</Text>
              <Text style={{color:'#c0c0c0'}}>Moisturizer</Text>
              <StarRating ratings={3} reviews={35} />
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





        </View>
      </ScrollView>
    );
};

export default All;

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
    height: 110,
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