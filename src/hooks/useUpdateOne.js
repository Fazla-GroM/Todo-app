import { useMutation, useQueryClient } from 'react-query'
import useStorageService from './useStorageService'

const useUpdateOne = ({ resource, params } = {}, mutationOptions) => {
    const storageService = useStorageService()
    const queryClient = useQueryClient()

    const { mutateAsync, ...restMutate } = useMutation(
        variables => storageService.updateOne(variables?.resource, variables?.params),
        {
            ...mutationOptions,
            onSettled() {
                queryClient.invalidateQueries(resource)
            }
        }
    )

    return {
        ...restMutate,
        async mutate({ resource: callTimeResource, params: callTimeParams } = {}, calltimeMutateOpts) {
            return mutateAsync(
                { resource: callTimeResource || resource, params: callTimeParams || params },
                calltimeMutateOpts
            )
        }
    }
}

export default useUpdateOne
