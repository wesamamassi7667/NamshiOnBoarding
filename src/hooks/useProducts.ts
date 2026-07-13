import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
const PAGE_SIZE = 10


export const useProducts = () => {
    return useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam = 0 }) => {
            console.log('soma')

            return getProducts(PAGE_SIZE, pageParam)
        },

        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.limit + lastPage.skip

            if (nextPage >= lastPage.total)
                return undefined

            return nextPage;
        }
    });

}
