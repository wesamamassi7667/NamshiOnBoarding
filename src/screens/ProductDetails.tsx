import React from 'react'
import {
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
} from 'react-native'
import { Product } from '../types/product'

type Props = {
    product: Product
}

export function ProductDetails({ product }: Props) {
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: product.thumbnail }}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.content}>
                <Text style={styles.title}>{product.title}</Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        Price: ${product.price}
                    </Text>

                    <Text style={styles.infoText}>
                        Rating: {product.rating}
                    </Text>

                    <Text style={styles.infoText}>
                        Category: {product.category}
                    </Text>

                    <Text style={styles.infoText}>
                        Stock: {product.stock}
                    </Text>

                    <Text style={styles.infoText}>
                        Discount: {product.discountPercentage}%
                    </Text>

                    <Text style={styles.infoText}>
                        Brand: {product.brand ?? 'Not available'}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 280,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 8,
        color: '#111',
    },
    description: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        marginBottom: 16,
    },
    infoBox: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#f7f7f7',
    },
    infoText: {
        fontSize: 15,
        color: '#333',
        marginBottom: 8,
    },
})