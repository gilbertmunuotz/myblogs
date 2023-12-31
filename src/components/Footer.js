import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='Footer'>
            <footer className="page-footer bg-gray-900 pb-2">
                <div className="row mx-6">
                    <div className="col l6 s12">
                        <h5 className="white-text text-2xl font-semibold">ViseStone Blogs</h5>
                        <p className="grey-text text-lighten-4 mt-2 first-letter:font-bold first-letter:text-2xl">Subscribe to our blog for the latest news, tips, and insights.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Visit Us</h5>
                        <ul className='mt-2'>
                            <motion.li className='mt-1 text-2xl' whileHover={{ scale: 1.1, originX: 0 }} >
                                <a href="https://www.instagram.com/gilbertmunuotz/">
                                    <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
                                </a>
                            </motion.li>
                            <motion.li className='mt-1 text-2xl' whileHover={{ scale: 1.1, originX: 0 }} >
                                <a href="https://twitter.com/gilbertmunuotz">
                                    <FontAwesomeIcon icon={faXTwitter} ></FontAwesomeIcon>
                                </a>
                            </motion.li>
                            <motion.li className='mt-1 text-2xl' whileHover={{ scale: 1.1, originX: 0 }} >
                                <a href="https://github.com/gilbertmunuotz">
                                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                </a>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer