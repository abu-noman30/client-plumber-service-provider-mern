import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import AddServices from '../Pages/AddServices/AddServices';
import AllServices from '../Pages/AllServices/AllServices';
import Blank from '../Pages/Blank/Blank';
import Blogs from '../Pages/Blogs/Blogs';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyAllReviews from '../Pages/MyReviews/MyAllReviews';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import PrivateRouter from './Private/PrivateRouter';

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
				element: <AllServices />
			},
			{
				path: 'services/:id',
				element: <ServiceDetails />,
				loader: async ({ params }) => {
					return await fetch(`https://server-plumboy-service.vercel.app/services/${params.id}`);
				}
			},
			{
				path: 'add-services',
				element: (
					<PrivateRouter>
						<AddServices />
					</PrivateRouter>
				)
			},
			{
				path: 'my-reviews',
				element: (
					<PrivateRouter>
						<MyAllReviews />
					</PrivateRouter>
				)
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			},
			{
				path: 'blogs',
				element: <Blogs />
			}
		]
	},
	{
		path: 'blank',
		element: <Blank />
	}
]);

export default router;
