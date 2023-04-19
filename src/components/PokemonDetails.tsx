import useSWR from 'swr';
import { PokemonDetails as IPokemonDetails } from '../types/pokemon';
import { useParams } from 'react-router-dom';

export const PokemonDetails = () => {
	const { id } = useParams();

	const { data } = useSWR<IPokemonDetails>(`pokemon/${id}`);

	return (
		<div className='flex flex-col items-center p-2 h-screen'>
			<h1 className='text-2xl capitalize'>{data?.name}</h1>

			<img src={data?.sprites.front_default} className='w-[200px]' />
			<img src={data?.sprites.back_default} className='w-[200px]' />
		</div>
	);
};
