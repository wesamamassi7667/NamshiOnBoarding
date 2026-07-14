import { Image, Pressable, View, Text } from "react-native";
import { Product } from "../types/product";


type ProductCardProps = {
    product: Product,
    onPress: () => void

}


export function ProductCard({ product, onPress }: ProductCardProps) {
    return <Pressable
        onPress={onPress}
        style={{
            flexDirection: 'row',
            marginBottom: 12,
            marginHorizontal: 16,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 12,
            padding: 12

        }}
    >

        <Image source={{ uri: product.thumbnail, width: 90, height: 90, }} />

        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {product.title}</Text>
            <Text> {product.category}</Text>
            <Text> {product.price}</Text>
            <Text> {product.rating}</Text>
        </View>

    </Pressable>
}