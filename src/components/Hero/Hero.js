import './Hero.css'
import heroLogo from './heros.png'

export default function Hero () {
    return (
        <section className='hero'>
            <img className='hero--img' src={heroLogo} alt='Heros logo' />
            <h1 className='hero--h1'>Online Experiences</h1>
            <p className='hero--p'>
                Join unique interactive activities led by one-of-a-kind 
                hosts-all without leaving home.
            </p>
        </section>
    )
}