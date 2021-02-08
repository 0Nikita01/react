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
                    
                    database.ref('pokemons/' + item[0]).set(pokemon);
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

    const randomID = (min, max, district = false) => {
        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));

        if (district)
        {
            Object.entries(Pockemons).forEach(item => {
                if (rand === item[1].id)
                {
                    rand = randomID(min, max, district);
                }
            });
        }
        
        return rand;
    }

    const AddNewPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const id = randomID(1, 100, true);
        const index = randomID(0, 4);
        const newPokemon = POCKEMONS[index];
        newPokemon.id = id;
        database.ref('pokemons/' + newKey).set(newPokemon);
        database.ref('pokemons').once('value', (snapshot) => {
            setPockemons(snapshot.val());
        })
        
    }

    const history = useHistory();

    const handlerClick = () => {
        history.push('/home');
    }
    return (
        <>
            <div className={s.button}>
                <button onClick={AddNewPokemon}>ADD NEW POKEMON</button>
            </div>
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