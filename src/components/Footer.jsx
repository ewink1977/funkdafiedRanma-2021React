import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p className="copyright">©1997-2021 Erin Michael Winking | <Link to='/privacy/' className="redbg">Click here</Link> for privacy policy</p>
            <p className="copyright">Ranma ½ belongs to its respective owners.</p>
        </footer>
    )
}

export default Footer
