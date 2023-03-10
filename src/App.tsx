import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import FilteredElements from './components/Filter/FilteredElements';
import Home from './components/MainPage/Page';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import { fetchProducts } from './features/housesSlice';

function App() {
	const dispatch = useAppDispatch();
	dispatch(fetchProducts());
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path='filteredHouses'
					element={<FilteredElements />}
				/>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
