const delay = async (timeout: number) => {
    await new Promise((resolve) => {
     setTimeout(resolve,  timeout)
    })
}

export const query = ({ queryKey, queryFn } : { queryKey: string, queryFn: () => Promise<any> }) => {
    if (!query.cache.has(queryKey)) {
        query.cache.set(queryKey, queryFn())
    }

    return query.cache.get(queryKey)
}
query.cache = new Map()

export const api = async () => {
    await delay(1000)

    return '귀중한 데이터!';
}
