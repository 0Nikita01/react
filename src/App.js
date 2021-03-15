import {useLocation, Route, Switch, Redirect} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import NotFound from './routes/NotFound';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import PrivateRoute from './components/PrivateRoute';
import cn from 'classnames';
import s from './App.module.css';
import 'react-notifications/lib/notifications.css';
import { FireBaseContext } from './context/firebaseContext';
import FirebaseClass from './service/firebase';

const App = () => {
	const location = useLocation();
	const isPadding = location.pathname === '/' || location.pathname === '/game/board';
	return (
		<FireBaseContext.Provider value={FirebaseClass}>
			<Switch>
				<Route path="/404" component={NotFound}/>
				<Route>
					<>
						<MenuHeader bgActive={!isPadding}/>
						<div className={cn(s.wrap, {[s.isHomePage]: isPadding})}>
							<Switch>
								<Route path="/" exact component={HomePage} />
								<Route path="/home" render={() => (<Redirect to="/" />)} />
								<PrivateRoute path="/game" component={GamePage} />
								<PrivateRoute path="/about" component={AboutPage} />
								<PrivateRoute path="/contact" component={ContactPage} />
								<Route render={() => (
									<Redirect to="/404" />
								)} />
							</Switch>
						</div>
						<Footer />
					</>
				</Route>
				
			</Switch>
			<NotificationContainer />
		</FireBaseContext.Provider>
	)
};

export default App;