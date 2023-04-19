import { Suspense, lazy } from 'react';
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
				element: (
					<Suspense fallback={<div>Dashboard Skeleton</div>}>
						<PokemonGrid />
					</Suspense>
				),
			},
			{
				path: ':id',
				element: (
					<Suspense fallback={<div>Details Skeleton</div>}>
						<PokemonDetails />
					</Suspense>
				),
			},
		],
	},
]);
