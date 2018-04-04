/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
React Navigation tutorials => multiple screeens with DrawerNavigator
*/

import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import App from './App';
//Components
import HomeComponent from './components/HomeComponent';
import CategoryComponent from './components/CategoryComponent';
import SettingComponent from './components/SettingComponent';
import AboutComponent from './components/AboutComponent';
import FavoriteComponent from './components/FavoriteComponent';

//Screen names
import {Home, Category, Setting, About, Favorite} from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Category: {
        path: '/info',
        screen: CategoryComponent,
    },
    Setting: {
        screen: SettingComponent,
    },
    About: {
        screen: AboutComponent,
    },
    Favorite: {
        screen: FavoriteComponent,
    }
};
let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    drawerBackgroundColor: '#1b914b',
    
    //drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
        
    },
    order: [Home, Category, Setting, About, Favorite]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('ChoukChey', () => App);
