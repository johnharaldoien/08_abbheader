import './Card.css'
import star from './star.png'

export default function Card (props) {
    return (
        <div className='card'>
            <img className='card--photo' src={`./images/${props.photo}`} alt='Katie' />
            <div className='card--stats'>
                <img className='card--star' src={star} alt='Star' />
                <span>{props.score}</span>
                <span className='grey'>({props.votes}) &#x2022; </span>
                <span className='grey'>{props.country}</span>

            </div>
            <p>{props.name}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}