import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const RootPage = lazy(() => import(/* webpackChunkName: 'RootPage' */ '../pages/RootPage'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
	},
]);
