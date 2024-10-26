import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/cart' element={<CartPage/>} />
         <Route path='/contact' element={<ContactPage/>} />
       </Routes>
    </div>
  );
}

export default App;