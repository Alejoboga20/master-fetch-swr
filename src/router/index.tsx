import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { PokemonDetails, PokemonGrid } from '../components';

const RootPage = lazy(() => import(/* webpackChunkName: 'RootPage' */ '../pages/RootPage'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{
				path: '',
				element: <PokemonGrid />,
			},
			{
				path: ':id',
				element: <PokemonDetails />,
			},
		],
	},
]);
