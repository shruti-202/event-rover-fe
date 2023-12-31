import Header from '../components/main/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/main/Footer'

function MainLayout() {
  return (
      <main>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
  )
}

export default MainLayout
