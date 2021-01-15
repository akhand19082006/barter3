import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookRequestScreen from '../screens/ItemRequestScreen'
import BookDonateScreen from '../screens/ItemDonateScreen'

export const AppTabNavigator= createBottomTabNavigator({
    DonateBooks:{
        screen :BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20,height:20}} />,
            tabBarLabel:"Donate Items"
        }
    },
    RequestBook:{
        screen :BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,height:20}} />,
            tabBarLabel:"Request Items"
        }
    }
})