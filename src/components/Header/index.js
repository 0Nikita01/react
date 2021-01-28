import styleHeader from './style.module.css';

const Header = ({title, descr}) => {
    return (
        <header className={styleHeader.root}>
            <div className={styleHeader.forest}></div>
            <div className={styleHeader.container}>
                {title ? (<h1>{title}</h1>) : null}
                {descr ? (<p>{descr}</p>) : null}
                <p></p>
            </div>
        </header>
    )
}

export default Header;