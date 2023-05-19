import React from 'react'
import deliveryProduct from '../../assets/images/deliveryproduct.png';
import '../main/main-style.scss'; 
import StockBlock from '../../components/StockBlock';
import cardImage from '../../assets/images/card.png';
const Main = ()=> {
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
    </div>
    )
}

export default Main;
