import React from 'react'
import './Header-style.scss'
import logoSvg from '../../assets/images/logo.svg';
import heardSvg from '../../assets/images/heart.svg';
import orderSvg  from '../../assets/images/order.svg';
import backedSvg from '../../assets/images/shopping-cart.svg';
import avatarImage from '../../assets/images/avatar.png';
import downSvg from '../../assets/images/chevron-down.svg';

const Header  = () => {
    return (
        <header>
            <div className="container"> 
               <div className="flex-container rowflex">
                 <div className="logoblock"> 
                    <a href="" className="logo">
                        <img src={logoSvg} alt="" />
                    </a>
                 </div>
                 <div className="search">
                    <button className="button catalogbutton">Каталог</button>
                    <input type="text" name="" id="" className='searchinput' placeholder='Найти товар' />
                 </div>
                 <div className='header__buttons'>
                     <div className="header__buttonlist">
                     <a href="" className='favorite header__button'>
                        <img src={heardSvg} alt="" />
                        Избранное
                      </a>
                      <a href="" className='orders header__button'>
                        <img src={orderSvg} alt="" />
                        Заказы
                      </a>
                      <a href="" className='backet header__button'>
                        <img src={backedSvg} alt="" />
                        Корзина
                      </a>
                  </div>
        
                 </div>
                 <div className="header__profile">
                    <a href="" className='header__info'>
                    <img src={avatarImage} alt="" className="profile__image" />
                    <span className="profile__name">Алексей</span>

                    </a>
                    <a href="" className='profile__more'>
                      <img src={downSvg} alt="" />
                    </a>
                  </div>

               </div>
            </div>
        </header>
    )
}


export default Header; 