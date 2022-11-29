import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <div className='app__social'>
            <a href='https://github.com/edenma5' target='_blank'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/eden-maimon' target='_blank'>
                <FaLinkedinIn />
            </a>
            <a href='https://www.instagram.com/edenma5/' target='_blank'>
                <BsInstagram />
            </a>
        </div>
    )
}
