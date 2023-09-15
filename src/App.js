import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, About, Products, SingleProduct,Cart, Checkout,Error,Private} from './pages'
import SharedLayout from './components/SharedLayout'
import {AuthWrapper} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='/BulockStore' element={<Home />} />      //myDefault GithubURL  */}
            <Route
              path="/checkout"
              element={
                <Private>
                  <Checkout />
                </Private>
              }
            />
            {/* <Route path='/checkout' element={<Checkout/>} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  ); 
}

export default App
