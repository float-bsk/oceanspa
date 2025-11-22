import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import FacilitiesPage from '../pages/facilities'
import BookingsPage from '../pages/bookings'
import MembersPage from '../pages/members'
import AboutPage from '../pages/about'

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/facilities' element={<FacilitiesPage />} />
        <Route path='/members' element={<MembersPage/>}/>
        <Route path='/bookings' element ={<BookingsPage />}/>
      </Routes>
    
    </div>
  )
}

export default RoutesComponent