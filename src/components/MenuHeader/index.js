import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = () => {
    const [bClass, setbClass] = useState(false);
    const handlerClickHamb = () => {
        setbClass(!bClass);
    }
    return (
        <>
           <Menu bClass={bClass}/>
           <Navbar onClickHaburger={handlerClickHamb} bClass={bClass}/>
        </>
    );
};

export default MenuHeader;