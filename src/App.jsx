import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

export default function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}
