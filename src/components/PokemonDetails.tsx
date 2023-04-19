import useSWR from 'swr';
import { PokemonDetails as IPokemonDetails } from '../types/pokemon';

export const PokemonDetails = () => {
	const { data } = useSWR<IPokemonDetails>(`pokemon/${1}`);

	return (
		<div className='flex flex-col justify-center items-center p-2'>
			<h1 className='text-2xl capitalize'>{data?.name}</h1>

			<img src={data?.sprites.front_default} className='w-[200px]' />
			<img src={data?.sprites.back_default} className='w-[200px]' />
		</div>
	);
};
