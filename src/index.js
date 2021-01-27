import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBlock from "./components/headerBlocks";

const AppList = () => {
	const items = ['Item1', 'Item2'];
	return (
		<>
			<ul>
				{
					items.map(item => <li>{item}</li>)
				}
				<li>{ items[0]}</li>
				<li>{ items[1]}</li>
			</ul>
		</>
	)
}

const AppHeader = () => {
	return <h1 className="header">Hello World!</h1>

}

const App = () => {
	return (
		<>
			<HeaderBlock/>
			<AppHeader/>
			<AppList/>
		</>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));