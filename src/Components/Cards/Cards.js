import './Cards.css';

const Card = (props) =>
{
    return(
        <div className="pricing">
        <h4 className='title'> {props.content.Sub} </h4>
        <h1 > {props.content.price} </h1>
        <span className='line'>------------------------------------</span>
        <ul className='lis'>
        <li> &#10004; {props.content.A}</li>
        <li> &#10004; {props.content.B}</li>
        <li> &#10004; {props.content.C}</li>
        <li> &#10004; {props.content.D}</li>
        <li> &#10004;{props.content.E}  </li>
        <li> &#10004; {props.content.F}</li>
        <li> &#10004; {props.content.G}</li>
        <li> &#10004; {props.content.H}</li>
        </ul>
        <button className='btn-1' >Subscribe</button>
    </div>
    )
}

export default Card;