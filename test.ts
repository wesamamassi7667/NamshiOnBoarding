import React from 'react'
import { Navigation } from 'react-native-navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ProductList from './src/screens/ProductList'
import { ProductDetails } from './src/screens/ProductDetails'

const queryClient = new QueryClient()

const withProviders = <P extends object>(
    Component: ComponentType<P>
) => {
    return function WrappedComponent(props: P) {
        return (
            <QueryClientProvider client= { queryClient } >
            <Component { ...props } />
            </QueryClientProvider>
    )
  }
}

Navigation.registerComponent('ProductList', () => withProviders(ProductList))
Navigation.registerComponent('ProductDetails', () => withProviders(ProductDetails))

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'ProductList',
                            options: {
                                topBar: {
                                    title: {
                                        text: 'Products',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
    })
})