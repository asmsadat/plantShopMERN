import logo from '../assets/logo.png'
import avatarImg from'../assets/avatar.png'
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from 'react';
import { useSelector } from "react-redux";

const navigation = [
  {name: "Dashboard", href:"/user-dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
]

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className='flex justify-between items-center'>
            {/* Left part */}
            <div className='flex items-center md:gap-16 gap-4'>
                {/* Logo */}
                <Link to='/'><img src={logo} alt="Logo" className='w-20'/></Link>
                <p>hello</p>

                {/*  */}
            </div>

            {/* Right part */}
            <div className='flex items-center md:gap-16 gap-4'>
                {/* Search bar */}
                <div className='relative sm:w-72 w-40 space-x-2'>
                  <IoMdSearch  className='absolute inline-block left-3 inset-y-2'/>
                  <input type="text" placeholder='Search here' 
                  className='bg-[#C5D3E8] w-full py-1 md:px-8 rounded-md focus:outline-none' />
                </div>
                <div className='relative flex items-center md:space-x-3 space-x-2'>
                  <div>
                    {
                      currentUser ? <>
                      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                      </button>
                      {/* show dropdown */}
                      {
                        isDropdownOpen && (
                          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                            <ul className="py-2">
                              {
                                navigation.map((item) => (
                                  <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))
                              }
                                            
                            </ul>
                          </div>
                        )
                      }
                      </> : <Link to='/login'><FaRegUser className='size-6'/></Link>
                    }
                  </div>
                  <button className='hidden sm:block'>
                    <FaRegHeart className='size-6'/>
                  </button>
                  <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                    <MdOutlineShoppingCart className='size-6'/>
                    {
                      cartItems.length > 0 ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :  <span className="text-sm font-semibold sm:ml-1">0</span>
                    }
                  </Link>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar