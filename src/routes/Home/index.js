/* import HeaderBlock from "./components/headerBlocks"; */
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import Footer from '../../components/Footer';
import cards from '../../json/cards.json';
import PockemonCard from '../../components/PockemonCard';
import MenuHeader from '../../components/MenuHeader';
import AppStyle from './style.module.css';

const POCKEMONS = cards;
console.log(POCKEMONS);
const HomePage = ({onChangePage}) => {
    const handlerClickButton = (page) => {
        console.log('####: <HomePage />');
        onChangePage && onChangePage(page);
    }
	return (
		<>
			<MenuHeader />
            <Header 
                title="This is title" 
                descr="This is Description!" 
                onClickButton={handlerClickButton}
            />
			<Layout 
				id="first" 
				title="This is title" 
				urlBg={bg2} 
			/>
			<Layout 
				id="second" 
				title="This is title" 
				colorBg="#000000" 
			/>
			<Layout 
				id="third" 
				title="This is title" 
				urlBg={bg3} 
			>
				<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
				<p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
			</Layout>
			<Layout 
				id="third" 
				title="This is title" 
				colorBg="grey"  
			>
				<div className={AppStyle.flex}>
					{
						POCKEMONS.map(item => <PockemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
					}
				</div>
			</Layout>
			<Footer />
		</>
	)
}

export default HomePage;