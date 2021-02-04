import CardStyle from './style.module.css';
import Back from './assets/card-back-side.jpg';
import cn from 'classnames';

const PockemonCard = ({name, img, id, type, values, isActive, cardClick}) => {

    /*
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }*/
    const handleClick = () => {
        cardClick && cardClick(id);
    }

    return (
        <div className={CardStyle.root} onClick={handleClick}>
            <div className={cn(CardStyle.pokemonCard, {[CardStyle.active]: isActive})}>
                <div className={CardStyle.cardFront}>
                    <div className={cn(CardStyle.wrap , CardStyle.front)}>
                        <div className={`${CardStyle.pokemon} ${CardStyle[type]}`}>
                            <div className={CardStyle.values}>
                                <div className={cn(CardStyle.count ,CardStyle.top)}>{values.top}</div>
                                <div className={cn(CardStyle.count ,CardStyle.right)}>{values.right}</div>
                                <div className={cn(CardStyle.count ,CardStyle.bottom)}>{values.bottom}</div>
                                <div className={cn(CardStyle.count ,CardStyle.left)}>{values.left}</div>
                            </div>
                            <div className={CardStyle.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={CardStyle.info}>
                                <span className={CardStyle.number}>#{id}</span>
                                <h3 className={CardStyle.name}>{name}</h3>
                                <small className={CardStyle.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={CardStyle.cardBack}>
                    <div className={cn(CardStyle.wrap, CardStyle.back)}>
                        <img src={Back} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PockemonCard;