import { Link } from 'react-router-dom'

import topImage from '../assets/img/nav/ranleft.png'
import characterBios from '../assets/img/nav/charbios.jpg'
import engagementChart from '../assets/img/nav/engagec.jpg'
import information from '../assets/img/nav/411.jpg'
import music from '../assets/img/nav/music.jpg'
import imageGallery from '../assets/img/nav/imagegal.jpg'
import fanFics from '../assets/img/nav/fanfics.jpg'
import eWink from '../assets/img/nav/ewinkr.jpg'

const Navigation = () => {
    return (
        <nav>
            <Link to="/"><img src={topImage} alt='Ranma ½' className='nav-top' /></Link>
            <Link to="/characters/"><img src={characterBios} alt='Character Bios' className='nav-img' /></Link>
            <a href='engagementchart.html'><img src={engagementChart} alt='Engagement Chart' className='nav-img' /></a>
            <a href='information.html'><img src={information} alt='Information' className='nav-img' /></a>
            <a href='music.html'><img src={music} alt='Music' className='nav-img' /></a> {/* eslint-disable-next-line */}
            <a href='imagegallery.html'><img src={imageGallery} alt='Image Gallery' className='nav-img' /></a>
            <a href='fanfics.html'><img src={fanFics} alt='Fan Fiction' className='nav-img' /></a>
            <Link to="/ewink/"><img src={eWink} alt='ewink! That is me.' className='nav-img' /></Link>
        </nav>
    )
}

export default Navigation
