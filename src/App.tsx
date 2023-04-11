import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import FilteredElements from './components/UI/Filter/FilteredElements';
import Home from './components/Pages/MainPage/Page';
import Layout from './components/UI/Layout';
import NotFoundPage from './components/UI/NotFoundPage';
import { fetchProducts } from './features/houses/housesSlice';
import SingleHousePage from './components/Pages/SingleHouse/SingleHousePage';
import SignIn from './components/UI/SignActions/SignIn';
import SignUp from './components/UI/SignActions/SignUp';
import RequireAuth from './features/auth/RequireAuth';
import AuthorizedUser from './features/auth/AuthorizedUser';

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
				<Route path='auth/signin' element={<SignIn />} />
				<Route path='auth/signup' element={<SignUp />} />
				<Route element={<RequireAuth />}>
					<Route path='welcome' element={<AuthorizedUser />} />
				</Route>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
