import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { injectGlobalStyles } from '../stitches.config'
import { StorageServiceProvider } from 'providers'
import { ReactQueryDevtools } from 'react-query/devtools'

import AppRoot from './AppRoot'
import { StorageService } from 'services'

const queryClient = new QueryClient()
const storageService = new StorageService({ dbName: 'todoApp', storageType: 'localStorage' })

const App = () => {
    injectGlobalStyles()

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <StorageServiceProvider storageService={storageService}>
                    <AppRoot />
                </StorageServiceProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
