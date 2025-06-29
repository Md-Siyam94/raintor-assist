

import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'

function MainLayout() {


  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='min-h-calc[(100vh-30vh)]'>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default MainLayout
