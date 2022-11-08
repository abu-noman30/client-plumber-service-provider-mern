import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import AllServices from '../Pages/AllServices/AllServices';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'services',
				element: <AllServices />,
				loader: async () => {
					return await fetch('http://localhost:5000/services');
				}
			},
			{
				path: 'services/:id',
				element: <ServiceDetails />,
				loader: async ({ params }) => {
					return await fetch(`http://localhost:5000/services/${params.id}`);
				}
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	}
]);

export default router;
