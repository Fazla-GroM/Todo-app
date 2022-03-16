import { BaseLayout } from 'layouts'
import { Routes, Route } from 'react-router-dom'
import { CreateScreen, EditScreen, ListScreen, NoMatch } from 'screens'

const AppRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<ListScreen />} />
                <Route path="edit/:id" element={<EditScreen />} />
                <Route path="create" element={<CreateScreen />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}

export default AppRoot
