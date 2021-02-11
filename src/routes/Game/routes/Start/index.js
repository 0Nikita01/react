import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PockemonCard from '../../../../components/PockemonCard';
import s from './style.module.css';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = ({onChangePage}) => {
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const [Pockemons, setPockemons] = useState({});
    useEffect(() => {
        firebase.getPokemonSoket((Pockemons) => {
            setPockemons(Pockemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);

    const handleCardClick = (key) => {
        const pokemon = {...Pockemons[key]}
        pokemonContext.onSelectedPokemons(key, pokemon);
        setPockemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
        /*
        setPockemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    firebase.postPokemon(item[0], pokemon);
                };
        
                acc[item[0]] = pokemon;
        
                return acc;
            }, {});
        
        });
        

        setPockemons(prevState => prevState.map(item => {
            const newItem = {...item}
            if (newItem["id"] === id){
                newItem["active"] = !newItem["active"];
            }
            return newItem;
        }));*/
    };

    /*
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
        const id = randomID(1, 100, true);
        const index = randomID(0, 4);
        const newPokemon = POCKEMONS[index];
        newPokemon.id = id;
        firebase.addPokemon(newPokemon);
        /*
        database.ref('pokemons/' + newKey)
            .set(newPokemon)
            .then(() => getPockemons());
    }*/

    const handlerStartGameClick = () => {
        history.push('/game/board');
    }

    return (
        <>
            <div className={s.button}>
                <button 
                onClick={handlerStartGameClick}
                disabled={Object.keys(pokemonContext.pokemon).length < 5}
                >
                    START GAME
                </button>
            </div>
            <div className={s.flex}>
				{
					Object.entries(Pockemons).map(([key, {name, img, id, type, values, selected}]) => 
                        <PockemonCard 
                            className={s.card} 
                            key={key} 
                            name={name} 
                            img={img} 
                            id={id} 
                            type={type} 
                            values={values} 
                            isActive={true} 
                            isSelected={selected} 
                            cardClick={() => {
                                if (Object.keys(pokemonContext.pokemon).length < 5 || selected){
                                    handleCardClick(key)
                                }
                            }}
                        />
                    )
				}
			</div>
        </>
    );
};

export default StartPage;