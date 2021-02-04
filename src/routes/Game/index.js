import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PockemonCard from '../../components/PockemonCard';
import cards from '../../json/cards.json';

import s from './style.module.css';

const POCKEMONS = cards;
const GamePage = ({onChangePage}) => {
    const [Pockemons, setPockemons] = useState(POCKEMONS);

    const handleCardClick = (id) => {
        setPockemons(prevState => prevState.map(item => {
            const newItem = {...item}
            if (newItem["id"] === id){
                newItem["active"] = !newItem["active"];
            }
            return newItem;
        }));
    };

    const history = useHistory();

    const handlerClick = () => {
        history.push('/home');
    }
    return (
        <>
            <div className={s.flex}>
				{
					Pockemons.map(item => <PockemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} isActive={item.active} cardClick={handleCardClick}/>)
				}
			</div>
            <div>
                <button onClick={handlerClick}>
                    Home
                </button>
            </div>
        </>
    );
};

export default GamePage;