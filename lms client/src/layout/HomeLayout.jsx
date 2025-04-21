import React from 'react'
import { FiMenu } from "react-icons/fi"
import { AiFillCloseCircle } from "react-icons/ai"
import { Link } from 'react-router-dom'
import FooterComponent from '../components/Footer'

const HomeLayout = ({children}) => {
    const changeWidth = ()=>{
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "auto"
    }
  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle")
    element[0].checked = false
    const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "0px    "
  }

  return (
    <div className='min-h-[90vh] '>
      <div className="drawer absolute left-0 z-50 w-fit">
        <input type="checkbox" id="my-drawer" className="drawer-toggle" />
        
        <div className="drawer-content">
          <label htmlFor="my-drawer" className='cursor-pointer'>
            <FiMenu size={"32px"} 
            onClick={changeWidth}
            className='font-bold text-white m-4' />
          </label>
        </div>
        
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
            <li className='absolute right-2 z-50'>
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={"32px"} />
              </button>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>

      {children}

      <FooterComponent/>
    </div>
  )
}

export default HomeLayout
