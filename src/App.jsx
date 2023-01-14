import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'

function App() {
 

  return (
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }} >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/"  element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/updateProfile' element={<UpdateProfile />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div> 
      </Container>
  )
}

export default App
