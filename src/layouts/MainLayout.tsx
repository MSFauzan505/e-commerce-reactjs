import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { CiPhone } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const navProfLinks = [
  {to:'/profile', icon: <MdOutlinePersonOutline/>},
  {to: '/contact', icon: <CiPhone/>},
  {to: '/cart', icon: <AiOutlineShoppingCart/>}
]

const navPageLinks =[
  {label: 'Home', to: '/'},
  {label: "Categories", to: '/categories'},
  {label: "Products", to: '/products'},
  {label: "About", to: '/about'},
  {label: "Contact us", to: '/contact'},
]

const MainLayout = () => {
  const navigate = useNavigate()

 
  const handleSearch = (keyword: string) => {
    navigate(`/products?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="w-full min-h-screen md:max-w-11/12 lg:max-w-10/12 mx-auto px-1 py-2 md:p-3 m-0  ">
        <Navbar
        title="Mivora"
        profileLinks={navProfLinks}
        onSearch={handleSearch}
        pageLinks={navPageLinks}
        />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout