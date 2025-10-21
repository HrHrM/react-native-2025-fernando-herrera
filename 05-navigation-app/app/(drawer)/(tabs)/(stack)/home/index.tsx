import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const navigation = useNavigation();

    const toggleOpenMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View className='px-10 mt-5'>
                <Link href="/products" asChild>
                    <CustomButton 
                        color="primary"
                        textColor="white" 
                        variant="contained"
                        className='mb-4'
                        onPress={() => router.push('/products')}
                    >
                        Products
                    </CustomButton>
                </Link>
                <CustomButton 
                    color="secondary100"
                    textColor="white"
                    variant="contained"
                    className='mb-4'
                    onPress={() => router.push('/profile')}
                >
                    Profile
                </CustomButton>
                <CustomButton 
                    color="secondary200"
                    textColor="white"
                    variant="contained"
                    className='mb-4'
                    onPress={() => router.push('/settings')}
                >
                    Settings
                </CustomButton>
                <CustomButton 
                    color="transparent"
                    textColor="black"
                    variant="text-only"
                    className='mb-4'
                    onPress={() => router.push('/products')}
                >
                    Products
                </CustomButton>
                <CustomButton
                    color="primary"
                    textColor="white"
                    variant="contained"
                    onPress={toggleOpenMenu}
                >
                    Open Menu
                </CustomButton>
                {/* <Link className='mb-5' href="/products">Products {' '}</Link>
                <Link className='mb-5' href="/profile">Profile {' '}</Link>
                <Link className='mb-5' href="/settings">Settings {' '}</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen