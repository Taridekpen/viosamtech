import { useState } from 'react'
import NavMenu from './NavMenu'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 w-full shadow-sm px-4 py-2 bg-white z-10' >
        <div className="max-w-screen-2xl w-full mx-auto  flex justify-between items-center  md:px-6 md:py-4">
            <div className='flex items-center gap-1'>
                {/*Logo should be change later */}
                <img src="./images/favicon.svg" alt="Logo" width={40} height={40} />
                <h2 className="text-zinc-900 font-bold text-2xl">VIOSAM</h2>
            </div>
            <div className="items-center gap-5 lg:gap-10 hidden md:flex">
                <a href="#home" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>Home</a>
                <a href="#about" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>About</a>
                <a href="#services" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>Services</a>
                <a href="#products" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>Products</a>
                <a href="#gallery" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>Gallery</a>
                <a href="#contact" className='text-sm font-medium text-zinc-600 hover:text-blue-700 active:text-blue-500'>Contact</a>
            </div>
            <div className="hidden md:block">
                {/* <button className='md:bg-blue-700 md:text-white md:px-3 md:py-2 lg:px-5 rounded hover:bg-blue-500 transition-colors'>Client Portal</button> */}
            </div>
            <div className='block md:hidden'>
                <span className='material-symbols-rounded block md:hidden px-1 bg-gray-50 py-1 rounded font-medium' onClick={()=>setNavOpen(!navOpen)}>
                    {navOpen ? 'close' : 'menu'}
                </span>
            </div>
        </div>
        <NavMenu navOpen={navOpen} setNavOpen={setNavOpen}/>
    </nav>
  )
}

export default Navbar