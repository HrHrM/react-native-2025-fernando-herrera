import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const LayoutTabs = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'blue',
     }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="bookmarks-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default LayoutTabs;