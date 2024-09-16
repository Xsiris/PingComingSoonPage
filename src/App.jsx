import { useState } from 'react'
import ComingSoonPage from './pages/ComingSoonPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="h-screen flex flex-col items-center justify-center md:w-5/12">
      <ToastContainer />
      <ComingSoonPage />
    </div>
    </div>
  )
}

export default App
