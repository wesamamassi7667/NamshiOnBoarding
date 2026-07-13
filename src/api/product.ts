import { ProductResponse } from "../types/product"
import { apiClient } from "./client"

export const getProducts = async (limit: number, skip: number = 0): Promise<ProductResponse> => {
    console.log('soma')
    const response = await apiClient.get<ProductResponse>('/products', { params: { 'limit': limit, 'skip': skip, } })
    console.log(response.data)
    return response.data
}