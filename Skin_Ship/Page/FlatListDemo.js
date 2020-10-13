import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { ListItem, SearchBar} from 'react-native-elements';

class FlatListDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data:[],
            temp: [],
            error: null,
            search: null,

        };
    }

        componentDidMount() {
            this.getData();
        }

        getData = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            this.setState({ loading: true});
            try{
                const response = await fetch(url);
                const json = await response.json();
                this.setResult(json);

            } catch(e) {
                this.setState({loading: false, error: 'Error Loading'});
            }


        };

        setResult= (res) => {
            thist.setState({
                data: [...this.state.data, ...res],
                temp: [...this.state.temp, ...res],
                eeror: res.error || null,
                loading: false,
            });
        };

        renderHeader = () => {
            return <SearchBar placeholder="Search Here..." />;

        };

    render() {
        return this.state.error != null ? (
            <View style={{
                flex: 1, 
                flexDirection:'column', 
                justifyContent:'center', 
                alignItems:'center',
        }}  />
        ) : (
            <FlatList
                ListHeaderComponent={this.renderHeader}
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ListItem title={item.name} subtitle={item.email} />
                )}
            
            
            />
        );
    }
}
export default FlatListDemo;