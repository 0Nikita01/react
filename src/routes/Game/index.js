import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PockemonCard from '../../components/PockemonCard';

import database from '../../service/firebase';
import cards from '../../json/cards.json';

import s from './style.module.css';

const POCKEMONS = cards;
const GamePage = ({onChangePage}) => {
    const [Pockemons, setPockemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPockemons(snapshot.val());
        })
    }, []);

    const handleCardClick = (id) => {
        setPockemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };
        
                acc[item[0]] = pokemon;
        
                return acc;
            }, {});
        });

        /*
        setPockemons(prevState => prevState.map(item => {
            const newItem = {...item}
            if (newItem["id"] === id){
                newItem["active"] = !newItem["active"];
            }
            return newItem;
        }));*/
    };

    const history = useHistory();

    const handlerClick = () => {
        history.push('/home');
    }
    return (
        <>
            <div className={s.flex}>
				{
					Object.entries(Pockemons).map(([key, {name, img, id, type, values, active}]) => <PockemonCard key={id} name={name} img={img} id={id} type={type} values={values} isActive={active} cardClick={handleCardClick}/>)
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