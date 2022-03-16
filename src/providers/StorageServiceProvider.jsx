import { createContext } from 'react'

const StorageServiceContext = createContext(undefined)

const StorageServiceProvider = ({ children, storageService }) => {
    return <StorageServiceContext.Provider value={storageService}>{children}</StorageServiceContext.Provider>
}

export { StorageServiceContext, StorageServiceProvider }
