import { NavLink } from "react-router-dom"
import { navbarData } from "../../routes/route-config"
import { useLocation } from "react-router-dom"

const NavigationBar = () => {
    const location = useLocation();
    const { pathname } = location;

    const nabarstyle = pathname === "/" 
    ? `bg-transparent text-white flex flex-wrap gap-4 fixed top-0 left-0 w-full p-2 items-center justify-center text-sm md:text-base md:justify-end font-semibold z-50`
    : `bg-pink-800 text-gray-200 flex flex-wrap gap-4 fixed top-0 left-0 w-full p-2 items-center justify-center text-sm md:text-base md:justify-end font-semibold z-50`


    return (

        <div className={nabarstyle}>
            {
                navbarData.map((route) => {
                    return (<div key={route.id} className="hover:scale-105">
                        <NavLink to={route.path} 
                            className={({isActive})=>
                                isActive ? "bg-pink-700 p-2 font-sans hover:text-blue-400 hover:cursor-pointer hover:scale-105"  
                            : "p-2 no-underline font-sans hover:text-blue-400 hover:cursor-pointer hover:scale-105"
                            }  
                        >
                       {route.label}{"  "}</NavLink>
                    </div>)
                })
            }
        </div>


    )
}

export default NavigationBar

// className="no-underline font-sans hover:text-blue-400 hover:cursor-pointer hover:scale-105"