import React from 'react'
import { motion } from 'framer-motion'


import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const programLan = [images.javascript, images.react, images.node];

function Header() {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋🏼</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Eden</h1>
                        </div>
                    </div>

                    <div className='tag-cmd app__flex'>
                        <p className='p-text'>Full-Stack</p>
                        <p className='p-text'>Web Developer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img className='profilePic' src={images.profile} alt='profile_bg' />
                <img src={images.circle} className='small_circle' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='overlay_circle'
                    src={images.circle}
                    alt='profile_circl'
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {programLan.map((img, i) => (
                    <div className='circle-cmp app__flex' key={`circle-${i}`}>
                        <img src={img} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')
