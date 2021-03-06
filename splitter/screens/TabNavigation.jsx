import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { HomeScreen, ProfileScreen, FriendListScreen } from './index'

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator 
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#0b8457', 
        adaptive: true,
        inactiveTintColor: 'gray',
      }}
      >
      <Tab.Screen 
        name="FriendListScreen" 
        component={FriendListScreen} 
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people" color={color} size={25} />
          )
        }}
      />
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={25} />
          )
          }}
        />
      <Tab.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={25} />
          )
          }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation