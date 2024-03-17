import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilCalculator,
  cilSpeedometer,
  cilStar,
  cilDollar,
  cilLightbulb,
  cilPlus,
  cilBell,
  cilPhone,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/user/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Features',
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/user/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Land Gallery',
    to: '/user/gallery',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contact Us',
    to: '/user/contact',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Help',
    to: '/help',
    icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />,
  },
]

export default _nav
