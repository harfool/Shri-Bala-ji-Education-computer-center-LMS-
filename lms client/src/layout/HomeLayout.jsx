import React from 'react'
import { FiMenu } from "react-icons/fi"
import { AiFillCloseCircle } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import FooterComponent from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'

const HomeLayout = ({children}) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()
  
    //for checking if user logged in
    const isLoggedIn = useSelector((state)=>{ state?.auth?.isLoggedIn})

    //for displaying the options according to role
    const role = useSelector((state)=>{ state?.auth?.role})
 
    const handleLogout = async(event)=>{
    event.preventDefault() 

    // const result = await dispatch(logout())
    // if (result?.payload?.success) {
    //     navigate("")
    // }

    }

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

          {isLoggedIn && role === "ADMIN" && (
             <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
          )}

            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li><br />
            
            {!isLoggedIn && (
                <li className="absolute bottom-1 w-[90%] ">
                    <div className="w-full flex items-center justify-center">
               <button className='bg-primary px-4 py-1 font-semibold rounded-md w-full ' ><Link to='/login' >Log In</Link></button>
               <button className='bg-secondary px-4 py-1 font-semibold rounded-md w-full' ><Link to='/signup' >SignUp</Link></button>
                </div>
                </li>
            )}

            {isLoggedIn && (
                <li className="absolute bottom-1 w-[90%] ">
                    <div className="w-full flex items-center justify-center">
               <button className='bg-primary px-4 py-1 font-semibold rounded-md w-full ' ><Link to='/user/profile' >Profile</Link></button>
               <button className='bg-secondary px-4 py-1 font-semibold rounded-md w-full' ><Link onClick={handleLogout} >Logout</Link></button>
                </div>
                </li>
            )}
          </ul>
        </div>
      </div>

      {children}

      <FooterComponent/>
    </div>
  )
}

export default HomeLayout
