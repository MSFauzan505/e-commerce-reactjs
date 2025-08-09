import Authlayout from "@/layouts/Authlayout";
import MainLayout from "@/layouts/MainLayout";
import { ROUTES } from "@/lib/routes";
import { lazy, Suspense } from "react"
import {  Routes, Route } from "react-router-dom";


// lazy loading
const Home = lazy(()=> import("@/pages/Home"))
const About = lazy(()=> import("@/pages/About"))
const Contact = lazy(()=> import("@/pages/Contact"))
const Cart = lazy(()=> import("@/pages/Cart"))
const Categories = lazy(()=> import("@/pages/Categories"))
const Checkout = lazy(()=> import("@/pages/Checkout"))
const Login = lazy(()=> import("@/pages/Login"))
const Register = lazy(()=> import("@/pages/Register"))
const Products = lazy(()=> import("@/pages/Products"))
const Product_Detail = lazy(()=> import("@/pages/ProductsDetail"))
const Profile = lazy(()=> import("@/pages/Profile"))
const NotFound = lazy(()=> import("@/pages/NotFound"))

const AppRoute: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      
            <Routes>
                {/* routes main layout */}
                <Route element={<MainLayout/>}>
                    <Route path={ROUTES.HOME} element={<Home/>}/>
                    <Route path={ROUTES.ABOUT} element={<About/>}/>
                    <Route path={ROUTES.CONTACT} element={<Contact/>}/>
                    <Route path={ROUTES.CART} element={<Cart/>}/>
                    <Route path={ROUTES.CATEGORIES} element={<Categories/>}/>
                    <Route path={ROUTES.CHECKOUT} element={<Checkout/>}/>
                    <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
                    <Route path={ROUTES.PRODUCT_DETAIL} element={<Product_Detail/>}/>
                    <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                </Route>
                    
                    {/* form auth */}
                    <Route element={<Authlayout/>}>
                        <Route path={ROUTES.LOGIN} element={<Login/>}/>
                        <Route path={ROUTES.REGISTER} element={<Register/>}/>
                    </Route>
                    

                    {/* page not found 404 */}
                    <Route path={ROUTES.NOTFOUND} element={<NotFound/>}/>
                    
            </Routes>
    </Suspense>
  
  )
}

export default AppRoute