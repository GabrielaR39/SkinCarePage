import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'



const Hero = () => {
  return (
    <div className={css.container}>
        
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin protection cream</span>

            <div className={css.text2}>
                <span className={css.h3}>Trendy Collection</span>
                <span>
                    <br />
                    Seedily say Has suitable disposal and boy. exercise joymantain atomic Heart buy now</span>
            </div>
        </div>

        {/* middle side */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>

            <img src={HeroImg} alt="" width={600} />

            <div className={css.card2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>

        {/* right sidee */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <h3>1.5m</h3>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.customers}>
                <h3>100k</h3>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero