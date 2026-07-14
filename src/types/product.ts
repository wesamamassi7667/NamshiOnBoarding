export type Product = {
    id: number
    images: string[]
    title: string
    price: number
    category: string
    rating: number
    thumbnail: string;
    stock: number
    discountPercentage: number
    brand: string
    description: string

}


export type ProductResponse = {
    products: Product[]
    total: number
    limit: number
    skip: number
}