import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductsScreen = () => {


    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1'>
                <FlatList
                    className='flex-1'
                    data={products}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ padding: 16 }}
                    renderItem={({ item }) => (
                        <View className='mt-10'>
                            <Text className='text-2xl font-work-black'>{item.title}</Text>
                            <Text className=''>{item.description}</Text>
                            <View className='flex flex-row justify-between'>
                                <Text className='font-work-black' >{item.price}</Text>
                                <Link href={`/products/${item.id}`} className='text-primary'>
                                    Ver Detalles
                                </Link>
                            </View>
                        </View>
                    )} />
            </View>
        </SafeAreaView>
    )
}

export default ProductsScreen