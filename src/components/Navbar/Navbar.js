import './Navbar.css'
import airbnb from './airbnb.png'

export default function Navbar () {
    return (
        <nav>
            <img src={airbnb} alt='Airbnb logo' />
        </nav>
    )
}