import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import FilteredElements from './components/UI/Filter/FilteredElements';
import Home from './components/Pages/MainPage/Page';
import Layout from './components/UI/Layout';
import NotFoundPage from './components/UI/NotFoundPage';
import { fetchProducts } from './features/Houses/housesSlice';
import SingleHousePage from './components/Pages/SingleHouse/SingleHousePage';
import SignIn from './components/UI/SignActions/SignIn';
import SignUp from './components/UI/SignActions/SignUp';
// import { useGetHousesQuery } from './api/apiSlice';

function App() {
	const dispatch = useAppDispatch();
	dispatch(fetchProducts());
	// const { data: house, isSuccess } = useGetHousesQuery();
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
			<Route path='/auth/'>
				<Route path='signin' element={<SignIn />} />
				<Route path='signup' element={<SignUp />} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
