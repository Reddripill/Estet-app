import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import { fetchProducts } from './features/housesSlice';

function App() {
	const dispatch = useAppDispatch();
	dispatch(fetchProducts());
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
