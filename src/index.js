import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Latihan2ListRendering from './components/Latihan2ListRendering';
// import Latihan3Form from './components/Latihan3Form';
// import Latihan4FetchingData from './components/Latihan4Fetchingdata';
// import Latihan5TodoList from './components/Latihan5TodoList';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			{/* <Latihan2ListRendering /> */}
			{/* <Latihan3Form /> */}
			{/* <Latihan4FetchingData /> */}
			{/* <Latihan5TodoList/> */}
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
