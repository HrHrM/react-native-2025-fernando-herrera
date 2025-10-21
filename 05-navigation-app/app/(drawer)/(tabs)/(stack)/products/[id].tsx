import { products } from '@/store/products.store';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {


  const navigation = useNavigation();
    // const params = useLocalSearchParams();
    const { id } = useLocalSearchParams();
    console.log(id);

    const product = products.find((product) => product.id === id);
    console.log(product);

    useEffect(() => {
      navigation.setOptions({
        title: product?.title ?? 'Producto',
      });
    }, [product]);

  return (
    <View className="flex-1 p-4">
      <Text className="text-3xl font-work-black mb-4">{product?.title}</Text>
      <Text className="text-gray-600 text-base mb-6">{product?.description}</Text>
      <Text className="text-2xl font-work-black text-primary">${product?.price}</Text>
    </View>
  )
}

export default ProductScreen