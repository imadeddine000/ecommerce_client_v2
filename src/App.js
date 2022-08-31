import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <>
        <ChakraProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/signup' exact element={<Signup/>} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
    </>
  );
}

export default App;
