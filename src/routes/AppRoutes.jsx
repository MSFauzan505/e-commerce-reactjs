import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )

}

export default AppRoutes