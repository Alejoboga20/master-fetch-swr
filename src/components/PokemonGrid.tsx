import { BasePokemon, PokemonResponse } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';
import useSWR from 'swr';

export const PokemonGrid = () => {
	const { data } = useSWR<PokemonResponse>('pokemon?limit=20');

	if (!data) throw new Error();

	return (
		<div className='p-10'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
				{data.results.map(({ name }, index) => (
					<PokemonCard key={name} name={name} index={index + 1} />
				))}
			</div>
		</div>
	);
};
