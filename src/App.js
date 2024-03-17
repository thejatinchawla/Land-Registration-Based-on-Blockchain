import React, {Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/Login'))
const LandingPage = React.lazy(() => import('./views/pages/LandingPage'))
const Register = React.lazy(() => import('./views/pages/Register'))
const Page404 = React.lazy(() => import('./views/pages/Page404'))
const Page500 = React.lazy(() => import('./views/pages/Page500'))

const App = () => {
  
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Home" element={<LandingPage />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route path="*" name="Default Layout" element={<DefaultLayout/>} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
export default App
