import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {GoLocation} from 'react-icons/go'


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>

                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>

                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>

                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                    <GoLocation className={css.icon}/>

                        <span>111 nort avenue Orlando, FL 32801</span>
                    </span>
                </div>
            </div>

            

        </div>
    </div>
  )
}

export default Footer