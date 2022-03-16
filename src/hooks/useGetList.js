import { useQuery } from 'react-query'
import useStorageService from './useStorageService'

const useGetList = ({ resource, params = {} }, queryOptions) => {
    const storageService = useStorageService()

    const getListQuery = useQuery([resource, 'getList'], () => storageService.getList(resource), queryOptions)

    return getListQuery
}

export default useGetList
