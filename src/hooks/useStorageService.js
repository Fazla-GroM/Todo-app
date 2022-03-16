import { StorageServiceContext } from 'providers'
import { useContext } from 'react'

const useStorageService = () => {
    const context = useContext(StorageServiceContext)

    if (!context) {
        if (!context) {
            throw new Error('useStorageService must be used within StorageServiceProvider')
        }
    }

    return context
}

export default useStorageService
