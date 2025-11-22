import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const imgArray = [
  '/src/assets/banner-0.webp',
  '/src/assets/banner-1.webp',
  '/src/assets/banner-2.webp',
  '/src/assets/banner-3.webp',
  '/src/assets/banner-4.webp',
  '/src/assets/banner-5.webp',
]

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = "Home | OceanSpa"
      imgArray.forEach(ele=>{
        const img = new Image();
        img.src = ele;
      })   

    const timer = setInterval(()=>{
      setCurrent((prev)=>(prev+1)%6);
    },4000)
    return ()=> clearInterval(timer);
  })

  const navigate = useNavigate();

  return (
    <div
    className={`relative h-svh w-full bg-cover bg-center bg-no-repeat`}
    >     
    <div 
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-bg`}
      style={{
        backgroundImage: `url(${imgArray[current]})`,
      }}
    >
    </div>
      <button onClick={()=>navigate("/members")}
        className={`absolute top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2
                    px-4 py-2 text-4xl text-gray-100 font-semibold font-mono 
                    italic border-4 border-gray-100 rounded-none
                    hover:border-white hover:text-white hover:border-6 
                    hover:shadow-md hover:shadow-amber-100
                    hover:perspective-dramatic hover:z-10 hover:cursor-pointer
                    `}
      >Discover</button>
     
    </div>
  )
}



export default HomePage