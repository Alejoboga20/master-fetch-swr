import useSWR from 'swr';
import { PokemonResponse } from './types/pokemon';
import { PokemonGrid } from './components/PokemonGrid';

export const App = () => {
	const { data } = useSWR<PokemonResponse>('pokemon?limit=100');

	if (!data) throw new Error();

	return (
		<main className='p-8 bg-primary-dark text-primary-main'>
			<h1 className='mb-2 text-2xl'>Pokemon Dashboard</h1>
			<hr />

			<PokemonGrid pokemons={data?.results} />
		</main>
	);
};
