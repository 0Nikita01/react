/* import HeaderBlock from "./components/headerBlocks"; */
import Header from './components/Header';
import Layout from './components/Layout';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import Footer from './components/Footer';


const App = () => {
	return (
		<>
			<Header title="This is title" descr="This is Description!" />
			<Layout 
				id="first" 
				title="This is title" 
				descr="This is Description!" 
				urlBg={bg2} 
			/>
			<Layout 
				id="second" 
				title="This is title" 
				descr="This is Description!" 
				colorBg="#000000" 
			/>
			<Layout 
				id="third" 
				title="This is title" 
				descr="This is Description!" 
				urlBg={bg3} 
			/>
			<Footer />
		</>
	)
}

export default App;