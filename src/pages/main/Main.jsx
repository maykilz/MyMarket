import React, { useEffect, useState } from 'react'
import deliveryProduct from '../../assets/images/deliveryproduct.png';
import '../main/main-style.scss'; 
import StockBlock from '../../components/StockBlock';
import cardImage from '../../assets/images/card.png';
import mapLink from '../../assets/images/map.png';
import axios from 'axios';
import doctorImage  from '../../assets/images/doktor.png';
import springImage from '../../assets/images/spring.png';
import foodImage from '../../assets/images/food.png';


const Main = ()=> { 

  const [responseServer,  changeResponseServer] = useState([]);
  useEffect(()=> {
     axios.get('https://run.mocky.io/v3/35914069-bce3-4b4e-9f17-73c0fa40e484').then((rsp)=>{
      changeResponseServer(rsp.data); 
     });
  }, ['']);



  const ElementsHTML   = responseServer.map((element) => {
    return (
      <StockBlock imageUrl={element.imageUrlProduct} discountProduct={element.discountProduct} cardPrice={element.cardPrice} price={element.price} productTittle={element.productTittle}/>
    )
  })

    return ( 
      <div>
      <section className="deliveryblock">
        <div className="container">
          <div className="flex-container flex-row">
            <img src={deliveryProduct} alt="" className="deliveryblockimage" />
            <span className="delivery__tittle">Доставка бесплатно от 1000 ₽</span>
          </div>
        </div>
      </section> 
      <section className="stock">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Акции</h2>
          <span className="alltittle">Все акции</span>
         </div>
         <div className="stocklist flex-container flex-row">   
          {ElementsHTML}
  
          </div> 
        </div>
      </section>
      <section className="novelties">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Новинки</h2>
          <span className="alltittle">Все новинки</span>
         </div>
         <div className="stocklist flex-container flex-row">   
          <StockBlock/>
          <StockBlock/>
          <StockBlock/>
          <StockBlock/> 
          </div> 
        </div>
      </section>
      <section className="novelties">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Покупали раньше</h2>
          <span className="alltittle">Все покупки</span>
         </div>
         <div className="stocklist flex-container flex-row">   
          <StockBlock/>
          <StockBlock/>
          <StockBlock/>
          <StockBlock/> 
          </div> 
        </div>
      </section>
      <section className="novelties">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Специальные предложения</h2>
         </div>

         <div className="flex-container flex-row">
          <div className="novelties__item novelties__carditem">
            <div className="flex-container flex-row">
              <div>
              <span className="novelties__tittle">Оформите карту  <br /> «Северяночка»</span> <br />
            <span className="novelties__subtittle">И получайте бонусы при покупке <br /> в магазинах и на сайте</span>       
              </div>
              <div>
                <img src={cardImage} alt="" />
              </div>
            </div>
          </div>
          <div className="novelties__item novelties__bonusitem">
          <div className="flex-container flex-row">
              <div>
              <span className="novelties__tittle">Покупайте <br /> акционные товары</span> <br />
            <span className="novelties__subtittle">И получайте вдвое больше <br /> бонусов</span>       
              </div> 
            </div>
          </div>

         </div>
  
        </div>
      </section>
      <section className="novelties">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Наши магазины</h2>
         </div>

          <div className="flex-container flex-row novelties__citylist">
            <button className="citybutton activecitybutton">п.Щельяюр</button>
            <button className="citybutton">д.Вертеп</button>
            <button className="citybutton">с.Краснобор</button> 
            <button className="citybutton">д.Диюр</button>
          </div>
          <img src={mapLink} alt="" className='novelties__map' />
        </div>
      </section>
      <section className="article">
        <div className="container">
         <div className="flex-container flex-row stock__top"> 
          <h2 className='sectionhead'>Статьи</h2>
          <span className="alltittle">Все статьи</span>
         </div>
         <div className="flex-container flex-row">
          <div className='article__item'>
            <img src={doctorImage} alt="" /> <br />
           <div className="article__content">
           <span className='article__date'>05.03.2021</span> <br />
            <h2 className="article__tittle">Режим использования масок и <br /> перчаток на территории магазинов</h2>
            <p className='article__description'>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
            <a href="" className="button article__button article">Подробнее</a>
           </div>
          </div>
          <div className='article__item'>
            <img src={springImage} alt="" /> <br />
            <div className="article__content">
            <span className='article__date'>05.03.2021</span> <br />
            <h2 className="article__tittle">Весеннее настроение для каждой</h2>
            <p className='article__description'>8 Марта – это не просто Международный <br /> женский день, это ещё день тюльпанов,  <br /> приятных сюрпризов и праздничных тёплых <br /> пожеланий.</p>
            <a href="" className="button article__button article">Подробнее</a>
            </div>
            
          </div>
          <div className='article__item'>
            <img src={foodImage} alt="" /> <br />
            <div className="article__content">
            <span className='article__date'>22.02.2020</span> <br />
            <h2 className="article__tittle">ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h2>
            <p className='article__description'>Голосуйте за любимые категории, выбирайте <br /> категорию-победителя в мобильном <br /> приложении и получайте кешбэк 10% <br /> баллами в апреле!</p>
            <a href="" className="button article__button article">Подробнее</a>
            </div>
             
          </div>

         </div>
        </div>
      </section>
    </div>
    )
}

export default Main;
