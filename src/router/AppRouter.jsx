import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CabonorteRoutes } from '../cabonorte/routes/CabonorteRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> }/>

        {/* CabonorteApp */}
        <Route path='/*' element={ <CabonorteRoutes /> } />

    </Routes>
  )
}
