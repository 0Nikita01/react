import s from './style.module.css';

const HeaderBlock = () => {
    return (
        <div>
            <div>
                <h1 className={s.header}>This is Pockemon Card Game</h1>
                <p>Simple Triple Trial Card Game</p>
            </div>
        </div>
    )
}

export default HeaderBlock;