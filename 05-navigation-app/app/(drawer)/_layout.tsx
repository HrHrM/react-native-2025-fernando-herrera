import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
    return (
        // <Drawer />
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(100, 246, 240, 0.4)',
                drawerActiveBackgroundColor: 'rgba(100, 246, 240, 0.4)',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                },

            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    drawerIcon: ({ color }) => <Ionicons name="grid-outline" color={color} size={24} />,

                }}
            />
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'Home',
                    title: 'User',
                    drawerIcon: ({ color }) => <Ionicons name="person-circle-outline" color={color} size={24} />,
                }}
            />
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Schedule',
                    drawerIcon: ({ color }) => <Ionicons name="calendar-outline" color={color} size={24} />,
                }}
            />

        </Drawer>
        // <View>
        //     <Text>DrawerLayout</Text>
        // </View>
    )
}

export default DrawerLayout