import { useState } from "react";
import { Input } from "./ui/input";

import { Link } from "react-router-dom";


type NavbarProps = {
    title: string;
    pageLinks: { label: string; to: string }[]
    onSearch: (query: string)=> void
    profileLinks: { to: string, icon: React.ReactNode}[]
}

const Navbar: React.FC<NavbarProps> = ({title, pageLinks, onSearch, profileLinks}) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSearch = ()=> {
       if(onSearch && searchValue.trim()){
        onSearch(searchValue.trim())
       } 
    }

  return (
    <div className="flex flex-col justify-center gap-3">
        {/* search bar */}
        <div className="flex justify-between items-center">
            <Link to={'/'}>
            <h1 className="font-bold text-3xl px-2 md:px-4 text-blue-600">{title}</h1>
            </Link>
            <Input
            placeholder="Search products..."
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)} 
            onKeyDown={(e)=>{
                if(e.key === 'Enter') handleSearch()
            }}
            className="w-4xl"/>
            <span className="flex gap-3 text-3xl">
                {profileLinks.map((link, i)=>(
                    <Link key={i} to={link.to}>
                        {link.icon}
                    </Link>
                ))}
            </span>
        </div>
        {/* pages link */}
        <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-10 text-lg font-semibold ">
            {pageLinks.map((link, i)=>(
                <Link key={i}  to={link.to}>
                    <h1 className="text-black hover:text-blue-600">{link.label}</h1>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar