import { Container } from "react-bootstrap"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (

    <Router>
     
      <Header />
  
      <main className='py-3'>
        <Container>
        <Routes>
          <Route path='/' element={<LoginScreen/>} exact />
          <Route path='/home' element={<HomeScreen/>}  />
        </Routes>
        </Container>
      </main>

      <Footer />

    </Router>

  )
}

export default App
