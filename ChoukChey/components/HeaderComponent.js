/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HeaderComponent => used for both Home, Info, Cloud, Settings
*/
import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{
                height: 50,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor:'#d12c34'
            }}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableHighlight style={{ marginLeft: 10, margin: 10 }}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('DrawerOpen');
                        }}>
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../icons/menu-icon.png')}
                        />
                    </TouchableHighlight>

                    <View style={{justifyContent:'center',alignItems:'center', marginLeft: 120}}>
                         <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Home</Text>    
                    </View>
                </View>
                

                <View style={{right:0, flexDirection:'row'}}> 

                    <TouchableHighlight style={{ marginLeft: 10, margin: 10, right:0}}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('DrawerOpen');
                        }}>
                    
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../icons/search-icon.png')}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight style={{ marginLeft: 10, margin: 10}}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('DrawerOpen');
                        }}>
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../icons/lang-icon.png')}
                        />
                    </TouchableHighlight>
                    
                </View>
            </View>);
    }
}
