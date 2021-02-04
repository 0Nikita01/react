import { useHistory } from 'react-router-dom';
import styleHeader from './style.module.css';

const Header = ({title, descr, onClickButton}) => {
    const history = useHistory();

    const handlerClick = () => {
        history.push('/game');
    }
    return (
        <header className={styleHeader.root}>
            <div className={styleHeader.forest}></div>
            <div className={styleHeader.container}>
                {title ? (<h1>{title}</h1>) : null}
                {descr ? (<p>{descr}</p>) : null}
                <button onClick={handlerClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;