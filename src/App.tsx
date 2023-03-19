import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import FilteredElements from './components/Filter/FilteredElements';
import Home from './components/Pages/MainPage/Page';
import Layout from './components/UI/Layout';
import NotFoundPage from './components/UI/NotFoundPage';
import { fetchProducts } from './features/housesSlice';
import SingleHousePage from './components/Pages/SingleHouse/SingleHousePage';

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
				<Route
					path=':houseId'
					element={<SingleHousePage />}
				/>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
