import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <Link to="/"><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/ranleft.png" 
            alt='Ranma ½' title="Ranma ½" className='nav-top' /></Link>
            <Link to="/characters/"><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/charbios.jpg" 
            alt='Character Bios' title="Character Bios" className='nav-img' /></Link>
            <Link to='/engagementchart/'><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/engagec.jpg" 
            alt='Engagement Chart' title="Engagement Chart" className='nav-img' /></Link>
            <Link to='/information/'><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/411.jpg" 
            alt='Information' title="Information" className='nav-img' /></Link>
            <Link to='/music/'><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/music.jpg" alt='Music' 
            title="Music" className='nav-img' /></Link> {/* eslint-disable-next-line */}
            <Link to='/imagegal/'><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/imagegal.jpg" 
            alt='Image Gallery' title="Image Gallery" className='nav-img' /></Link>
            <Link to='/fanfics/'><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/fanfics.jpg" 
            alt='Fan Fiction' title="Fan Fiction" className='nav-img' /></Link>
            <Link to="/ewink/"><img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/nav/ewinkr.jpg" 
            alt='ewink! That is me.' title="ewink! That is me." className='nav-img' /></Link>
        </nav>
    )
}

export default Navigation
