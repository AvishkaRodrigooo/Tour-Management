import React, {useRef, useEffect} from 'react'
import { Container, Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './header.css'
const nav_link=[
  {
    path:'/home',
    display:'Home'
  },
   
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

]
const Header = () => {

const headerRef = useRef(null)
//meek dmme header ek vithrak page ek scroll krddi header ek change wenne ne
const stickyHeaderFunc =()=>{
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky__header')//me
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}

useEffect(()=>{
  stickyHeaderFunc()
  return window.removeEventListener('scroll', stickyHeaderFunc)//me
})
  return (                             //methn ref={headerRef}
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/*===========logo=========*/}
                   <div className="logo">
                    <img src= {logo} alt=''/>
                    </div> 
            {/*==============logo end===========*/}



{/*===========menu start=========*/}
          <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                nav_link.map((item, index)=>(
                  <li className="nav_item" key={index}>
                       <NavLink to={item.path} className={navClass =>navClass.isActive ? "active_link" : ""}> {/*methan click krddi color ek wens kre*/}
                        {item.display}</NavLink>
                  </li>
                ))}

              </ul>

          </div>
{/*===========menu end=========*/}

   <div className="nav_right d-flex align-items-center gap-4">
    <div className="nav_btns d-flex align-items-center gap-4">

     
    <Button
  tag={Link}
  to="/login"
  style={{ backgroundColor: 'white', color: 'black', border: 'none' ,fontWeight: 'bold'}}
>
  Login
</Button>
<Button
  tag={Link}
  to="/register"
  style={{ backgroundColor: '#ff8c00', color: 'white', border: 'none' ,borderRadius: '18px', }}
>
  Register
</Button>



    </div>
<span className="mobile_menu">
<i class="ri-menu-line"></i>
</span>
   </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
