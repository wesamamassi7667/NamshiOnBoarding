import { View, Text, Button } from "react-native"

type ErrorViewProps = {
    message?: string
    onRetry: () => void
}


export function ErrorView({ message, onRetry }: ErrorViewProps) {
    return <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center' }}>
            {message || 'Something went wrong. Please try again.'}

        </Text>

        <Button
            title="Retry"
            onPress={onRetry}
        />
    </View>
}