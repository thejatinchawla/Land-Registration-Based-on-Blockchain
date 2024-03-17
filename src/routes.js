import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profile = React.lazy(() => import('./views/dashboard/Profile'))
const Gallery = React.lazy(() => import('./views/dashboard/Gallery'))
const Contact = React.lazy(() => import('./views/dashboard/Contact'))
const Help = React.lazy(() => import('./views/pages/Help'))
const LandingPage = React.lazy(() => import('./views/pages/LandingPage'))




const routes = [
  { path: '/', exact: true, name: 'Home', element: LandingPage },
  { path: '/user/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/user/profile', name: 'Buyers Profile', element: Profile },
  { path: '/user/gallery', name: 'Land Gallery', element: Gallery },
  { path: '/user/contact', name: 'Contact Us', element: Contact },
  { path: '/help', name: 'Help', element: Help }
]

export default routes
