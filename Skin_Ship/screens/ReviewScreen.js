import React, {Component} from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class ReviewScreen extends Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.20.10.5:3003/review'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const review = await response.json();
    this.setState({data: review});
  }
  componentDidMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#ffdbe9',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>
            <Text style={{color:'#000'}}>Username: {item.user_name}</Text>{'\n'}{item.comment}</Text>
          
          <Text style={{color:'#000'}}>Date: {item.time}</Text>
        </View>

        } 
      />
      
      
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});


