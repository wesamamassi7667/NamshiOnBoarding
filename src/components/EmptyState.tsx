import { Text, View } from 'react-native';

export default function EmptyState() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 24,
            }}
        >
            <Text style={{ fontSize: 40 }}>📦</Text>
            <Text style={{ fontSize: 18, marginTop: 8 }}>No products found.</Text>
        </View>
    );
}