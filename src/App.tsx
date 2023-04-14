import useSWR from 'swr';
import { PokemonResponse } from './types/pokemon';

export const App = () => {
	const { data } = useSWR<PokemonResponse>('pokemon?limit=100');

	if (!data) throw new Error();

	return (
		<main className='p-8'>
			<h1 className='mb-2 text-2xl'>Pokemon Dashboard</h1>
			<hr />

			<div className='grid grid-cols-4 gap-4'>
				{data.results.map(({ name }, index) => (
					<div key={name}>
						<div>{name}</div>
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
								index + 1
							}.png`}
							alt={name}
						/>
					</div>
				))}
			</div>
		</main>
	);
};
