import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/LatihanReactContext/Navbar'
import Setting from './components/LatihanReactContext/Setting';
import DisplayTheme from './components/LatihanReactContext/DisplayTheme';
import ToogleTheme from './components/LatihanReactContext/ToogleTheme';
import { AppProvider } from './context/app-context';
import Reducer from './components/LatihanReactContext/Reducer';
import { ThemeProvider } from './context/theme-context';


function App() {

	return (
		<div className="App">
			<AppProvider>
				<ThemeProvider>
					<br />
					<Navbar />
					<hr />
					<br />
					<Setting />
					<br /><br />
					<DisplayTheme />
					<ToogleTheme />
					<br /><br />
					<Reducer />
					<hr />
					<Counter />
				</ThemeProvider>
			</AppProvider>
		</div>
	);
}

export default App;
