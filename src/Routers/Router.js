import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import AllServices from '../Pages/AllServices/AllServices';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

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
				path: 'login',
				element: <Login />
			}
		]
	}
]);

export default router;
