import './App.css'
import Banner from './components/home/banner/Banner'
import Navbar from './components/home/navbar/Navbar'
import Rating from './components/home/rating/Rating'

function App() {

  return (
    <>
      <header >
        <Navbar></Navbar>
        <Banner></Banner>
        <Rating></Rating>
      </header>
    </>
  )
}

export default App
