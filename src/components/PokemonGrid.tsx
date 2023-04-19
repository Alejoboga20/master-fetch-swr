import useSWR from 'swr';

import { PokemonResponse } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';

export const PokemonGrid = () => {
	const { data } = useSWR<PokemonResponse>('pokemon?limit=20');

	const onLoadMore = () => {};

	if (!data) throw new Error();

	return (
		<div className='p-10'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8'>
				{data.results.map(({ name }, index) => (
					<PokemonCard key={name} name={name} index={index + 1} />
				))}
			</div>

			<div className='text-center'>
				<button className='w-[500px] bg-slate-400 rounded p-2' onClick={onLoadMore}>
					Load More
				</button>
			</div>
		</div>
	);
};
