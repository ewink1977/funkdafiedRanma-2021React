import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            {/* TITLE HEADER FOR DISPLAY ON LARGE SCREENS */}
            <img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/titlebanner.jpg" alt="ewink's FUNKDAFIED Ranma ½ website!" 
            title="ewink's FUNKDAFIED Ranma ½ website!" className='header-img' />
            <div className='mobilehead'>
                {/* TITLE HEADER AND NAVIGATION FOR SMALL SCREENS / MOBILE */} 
                <div className='mobile-title'>
                    <h2 className='mob-title-upper'>ewink's</h2>
                    <h1 className='mob-head'>FUNKDAFIED</h1>
                    <h2 className='mob-title-lower'>Ranma ½ Website</h2>
                </div>
                <div className='mobile-nav'>
                    <Link to="/" className='mob-nav-bar'>HOME</Link>
                    <Link to="/characters/" className='mob-nav-bar'>CHARACTERS</Link>
                    <a href='engagementchart.html' className='mob-nav-bar'>ENGAGEMENTS</a>
                    <Link to="/information/" className='mob-nav-bar'>INFORMATION</Link>
                    <a href='music.html' className='mob-nav-bar'>MUSIC</a>
                    <Link to="/imagegal/" className='mob-nav-bar'>IMAGE GALLERY</Link>
                    <a href='fanfics.html' className='mob-nav-bar'>FAN FICS</a>
                    <Link to="/ewink/" className='mob-nav-bar'>EWINK</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
