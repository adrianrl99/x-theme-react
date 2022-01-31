import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '~/layouts'
import { HomePage, NotFoundPage } from '~/pages'
import ROUTES from '~/routes'

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<AppLayout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default AppRoutes
