import { Navigation } from "react-native-navigation";
import ProductList from "../screens/ProductList";


import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";
import { ProductDetails } from "../screens/ProductDetails";

const ProductListWithProvider = (prop: { componentId: string }) => {
    return <QueryClientProvider client={queryClient}>
        <ProductList componentId={prop.componentId} />

    </QueryClientProvider>
}



export function startApp() {
    Navigation.registerComponent('ProductList', () => ProductListWithProvider)
    Navigation.registerComponent('ProductDetails', () => ProductDetails)


    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'ProductList', options: {
                                    topBar: { title: { text: 'Products' } }
                                }
                            },
                        }
                    ]
                }
            }
        })
    })


}