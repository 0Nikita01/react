import styleLayout from './style2.module.css';


const Layout = ({id, title, descr, urlBg = false, colorBg = false}) => {
    
    const   bgStyle = urlBg ? {background : "url(" + urlBg + ")"} : colorBg ? {backgroundColor: colorBg} : {};
    return (
        <section className={styleLayout.root} style={bgStyle} id={id ? id : null}>
            <div className={styleLayout.wrapper}>
                <article>
                    <div className={styleLayout.title}>
                        {title ? (<h1>{title}</h1>) : null}
                        <span className={styleLayout.separator}></span>
                    </div>
                    <div className={styleLayout.desc + ' ' + styleLayout.full}>
                        {descr ? (<p>{descr}</p>) : null}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;