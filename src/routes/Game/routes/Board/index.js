import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PockemonCard from '../../../../components/PockemonCard';
import s from './style.module.css';
import PlayerBoard from './component/PlayerBoard';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++;
        }

        if (item.card.possession === 'blue') {
            player1Count++;
        }
    });

    return [player1Count, player2Count];
}

const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);
    const { pokemon } = pokemonContext;
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemon).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [arrowPlayer1, setArrowPlayer1] = useState(true);
    const history = useHistory();

    useEffect(async () => {
        const boardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponce.json();

        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        console.log(player2Request);
        player2Request.data.map((item, key) => {
            pokemonContext.onSelectedPokemons(key, item);
        })
        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red',
            }))
        });
    }, []);

    if (Object.keys(pokemon).length === 0){
        history.replace('/game');
    }

    const handlerClickBoardPlate = async (position) => {
        console.log(position);
        console.log(choiceCard);
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }
            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }
            setBoard(request.data);
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                alert('WIN');
            }
            else if (count1 < count2) {
                alert('LOSE');
            }
            else {
                alert('DRAW');
            }
            history.replace('/game/finish');
            
        }
    }, [steps, board])

    useEffect(() => {
        if (steps <= 9)
        {
            setArrowPlayer1(prevState => !prevState);
        }
    }, [board]);

    return (
        <div className={s.root}>
			<div className={s.playerOne}>
                {
                    <PlayerBoard 
                        player={1}
                        cards={player1} 
                        onClickCard={(card) => setChoiceCard(card)}
                        hidden={arrowPlayer1}
                    />
                }
			</div>
            <div className={s.board}>
                {
                    board.map(item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handlerClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PockemonCard {...item.card} isActive minimize/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard 
                    player={2}
                    cards={player2} 
                    onClickCard={(card) => setChoiceCard(card)}
                    hidden={!arrowPlayer1}
                />
            </div>
        </div>
    );
};

export default BoardPage;