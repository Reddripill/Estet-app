import React, { Suspense } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import NotFoundPage from './components/UI/NotFoundPage';
import { fetchProducts } from './features/houses/housesSlice';
import SingleHousePage from './components/Pages/SingleHouse/SingleHousePage';
import ScrollToTop from './utils/ScrollToTop';
// import PageRestoration from './utils/PageRestoration';
// import PersistAuth from './features/auth/PersistAuth';
const Layout = React.lazy(() => import('./components/UI/Layout'))
const Home = React.lazy(() => import('./components/Pages/MainPage/Page'))
const FilteredElements = React.lazy(() => import('./components/UI/Filter/FilteredElements'))
const SignIn = React.lazy(() => import('./features/auth/SignIn'))
const SignUp = React.lazy(() => import('./features/auth/SignUp'))
const RequireAuth = React.lazy(() => import('./features/auth/RequireAuth'))
const RootAccountPage = React.lazy(() => import('./components/Pages/AccountPages/RootAccountPage'))
const Profile = React.lazy(() => import('./components/Pages/AccountPages/Profile'))
const MainAccountPage = React.lazy(() => import('./components/Pages/AccountPages/MainAccountPage'))
const ProjectsTable = React.lazy(() => import('./components/Pages/AccountPages/Projects/ProjectsTable'))
const NewProject = React.lazy(() => import('./components/Pages/AccountPages/Projects/NewProject'))
const RequestsTable = React.lazy(() => import('./components/Pages/AccountPages/Requests/RequestsTable'))


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<ScrollToTop />}>
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
			</Route>
			<Route element={<RequireAuth />}>
				<Route path='welcome' element={<RootAccountPage />}>
					<Route index element={<MainAccountPage />} />
					<Route element={<MainAccountPage />}>
						<Route path='projects' element={<ProjectsTable />} />
						<Route path='requests' element={<RequestsTable />}></Route>
					</Route>
					<Route path='newProject' element={<NewProject />} />
					<Route path='profile' element={<Profile />} />
				</Route>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Route>
	)
)

function App() {
	const dispatch = useAppDispatch();
	dispatch(fetchProducts());
	return (
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
