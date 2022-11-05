import {Navigate, Route, Routes} from 'react-router-dom'
import { CabonortePage } from '../pages/CabonortePage'


export const CabonorteRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <CabonortePage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
