import {useState} from 'react';
import CardStyle from './style.module.css';
import Back from './assets/card-back-side.jpg';

const PockemonCard = ({name, img, id, type, values}) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        isActive ? setActive(false) : setActive(true);
    }

    return (
        <div className={CardStyle.root} onClick={handleClick}>
            <div className={`${CardStyle.pokemonCard} ${isActive ? CardStyle.active : ''}`}>
                <div className={CardStyle.cardFront}>
                    <div className={CardStyle.wrap + ' ' + CardStyle.front}>
                        <div className={`${CardStyle.pokemon} ${CardStyle[type]}`}>
                            <div className={CardStyle.values}>
                                <div className={`${CardStyle.count} ${CardStyle.top}`}>{values.top}</div>
                                <div className={`${CardStyle.count} ${CardStyle.right}`}>{values.right}</div>
                                <div className={`${CardStyle.count} ${CardStyle.bottom}`}>{values.bottom}</div>
                                <div className={`${CardStyle.count} ${CardStyle.left}`}>{values.left}</div>
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
                    <div className={`${CardStyle.wrap} ${CardStyle.back}`}>
                        <img src={Back} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PockemonCard;