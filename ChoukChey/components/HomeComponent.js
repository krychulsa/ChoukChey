/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HomeComponent 
*/
import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, AppRegistry, FlatList, StyleSheet} from 'react-native';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';
import flatListData from '../data/flatListData';

const backgroundColor = 'white';
class FlatListItem extends Component {
    render() {          
        return (
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        // backgroundColor: his.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: '#eaecef'
                }}>            
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            {/* <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text> */}
                            <View style={{flex:1, flexDirection:'row'}}> 
                                <Image style={{marginTop:40, height:20, width: 20}} source={require('../icons/icons8-time-24.png')}></Image> 
                                <Text style={{marginLeft:8, marginTop:40, color: '#000'}}>{this.props.item.time}</Text>
                            </View>
                    </View>              
                </View>
                <View style={{
                    height: 3,
                    backgroundColor:'#fff'
                            
                }}>
            
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: '#000',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16,  
    }
});

export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = () => (
            <Text style={{color:'white', fontWeight:'bold', padding:15}}>Home</Text>
        );
        let drawerIcon = () => (
            <Image
                source={require('../icons/home-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return {drawerLabel, drawerIcon};
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>      
            <HeaderComponent {...this.props} />      
            <View style={{flex: 1}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
        </View>);
    }
}