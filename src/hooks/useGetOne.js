import { useQuery } from 'react-query'
import useStorageService from './useStorageService'

const useGetOne = ({ resource, params } = {}, queryOptions) => {
    const storageService = useStorageService()

    const getOneQuery = useQuery([resource, 'getOne', params], () => storageService.getOne(resource, params), {
        ...queryOptions,
        enabled: !!params?.id
    })

    return getOneQuery
}

export default useGetOne
