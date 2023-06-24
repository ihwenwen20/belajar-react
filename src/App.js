import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/LatihanReactContext/Navbar'
import Setting from './components/LatihanReactContext/Setting';
import DisplayTheme from './components/LatihanReactContext/DisplayTheme';
import ToogleTheme from './components/LatihanReactContext/ToogleTheme';
import { AppProvider } from './context/app-context';
import Reducer from './components/LatihanReactContext/Reducer';
import { ThemeProvider } from './context/theme-context';

import SoalDea from './components/SoalDea/SoalDea';
import Jawaban from './components/SoalDea/Jawaban';


function App() {

	return (
		<div className="App">
			{/* <AppProvider>
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
			</AppProvider> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SoalDea />} />
					<Route path="/jawaban" element={<Jawaban />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
