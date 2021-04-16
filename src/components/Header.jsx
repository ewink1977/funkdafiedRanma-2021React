import headerImage from '../assets/img/titlebanner.jpg'

const Header = () => {
    return (
        <header>
            {/* TITLE HEADER FOR DISPLAY ON LARGE SCREENS */}
            <img src={headerImage} alt="ewink's FUNKDAFIED Ranma ½ website!" className='header-img' />
            <div className='mobilehead'>
                {/* TITLE HEADER AND NAVIGATION FOR SMALL SCREENS / MOBILE */} 
                <div className='mobile-title'>
                    <h2 className='mob-title-upper'>ewink's</h2>
                    <h1 className='mob-head'>FUNKDAFIED</h1>
                    <h2 className='mob-title-lower'>Ranma ½ Website</h2>
                </div>
                <div className='mobile-nav'>
                    <a href='index.html' className='mob-nav-bar'>HOME</a>
                    <a href='characters.html' className='mob-nav-bar'>CHARACTERS</a>
                    <a href='engagementchart.html' className='mob-nav-bar'>ENGAGEMENTS</a>
                    <a href='information.html' className='mob-nav-bar'>INFORMATION</a>
                    <a href='music.html' className='mob-nav-bar'>MUSIC</a>
                    <a href='imagegallery.html' className='mob-nav-bar'>IMAGE GALLERY</a>
                    <a href='fanfics.html' className='mob-nav-bar'>FAN FICS</a>
                    <a href='ewink.html' className='mob-nav-bar'>EWINK</a>
                </div>
            </div>
        </header>
    )
}

export default Header
