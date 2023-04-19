import { preload } from 'swr';
import { fetcher } from '../api';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
	name: string;
	index: number;
}

export const PokemonCard = ({ name, index }: PokemonCardProps) => {
	const indexToShow =
		index < 10 ? `00${index}` : index === 10 ? `0${index}` : index < 100 ? `0${index}` : index;

	const onHover = () => {
		preload(`pokemon/${index}`, fetcher);
	};

	return (
		<Link to={`${index}`}>
			<div
				className='bg-slate-600 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-950'
				onMouseEnter={onHover}
			>
				<img
					className='w-full'
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${indexToShow}.png`}
					alt={name}
				/>
				<div className='capitalize text-lg'>{name}</div>
			</div>
		</Link>
	);
};
