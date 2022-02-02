import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import ROUTES from '~/routes'

const AppLayout = lazy(() => import('~/layouts/AppLayout'))
const HomePage = lazy(() => import('~/pages/Home'))
const NotFoundPage = lazy(() => import('~/pages/errors/NotFound'))

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<AppLayout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default AppRoutes
