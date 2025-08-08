import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
    <header>ini header</header>
        <main>
            <Outlet/>
        </main>
        <footer>ini footer</footer>
    </>
  )
}

export default MainLayout