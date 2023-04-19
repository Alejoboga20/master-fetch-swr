import useSWR, { preload } from 'swr';

import { PokemonGrid, PokeBallIcon } from './components';
import { PokemonResponse } from './types/pokemon';
import { fetcher } from './api';

preload('pokemon?limit=650', fetcher);

export const App = () => {
	const { data } = useSWR<PokemonResponse>('pokemon?limit=650');

	if (!data) throw new Error();

	return (
		<main className='p-8 bg-primary-dark text-primary-main'>
			<div className='flex mb-4'>
				<PokeBallIcon />
				<h1 className='ml-4 mb-2 text-2xl'>Pokemon Dashboard</h1>
			</div>
			<hr />

			<PokemonGrid pokemons={data?.results} />
		</main>
	);
};
