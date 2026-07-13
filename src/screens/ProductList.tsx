import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { Loader } from "../components/Loader";
import { ErrorView } from "../components/ErrorView";
import EmptyState from "../components/EmptyState";
import { Product } from "../types/product";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../api/product";
import { useProducts } from "../hooks/useProducts";
import { Navigation } from "react-native-navigation";
import { getErrorMessage } from "../utils/getErrorMessage";


export default function ProductList(prop: { componentId: string }) {



    const { data, error, isLoading, isFetchingNextPage, hasNextPage,
        fetchNextPage, refetch, isRefetching } =
        useProducts();

    const products: Product[] = data?.pages.flatMap(page => page.products) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage)
            fetchNextPage()
    }


    if (isLoading)
        return <Loader />


    if (error)
        return <ErrorView
            message={getErrorMessage(error)}
            onRetry={refetch}
        />



    if (products.length == 0)
        return <EmptyState />


    return <View style={{ flex: 1, padding: 16 }}>

        <FlatList
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({ item }) => {
                    return <ProductCard
                        product={item}

                        onPress={() => {
                            Navigation.push(prop.componentId,
                                {
                                    component: {
                                        name: 'ProductDetails',
                                        passProps: {
                                            product: item
                                        },
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Product Details'
                                                }
                                            }
                                        }
                                    }
                                })

                        }}
                    />;
                }
            }

            data={products}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.3}
            onRefresh={refetch}
            refreshing={isRefetching}
            ListFooterComponent={
                isFetchingNextPage ? (
                    <ActivityIndicator size="small" color="blue" />
                ) : null
            }

        />


    </View>


}