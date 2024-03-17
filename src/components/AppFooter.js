import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Land Registration
        </a>
        <span className="ms-1">&copy; 2022 Jatin Chawla.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
