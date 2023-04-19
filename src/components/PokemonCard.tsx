import { preload } from 'swr';
import { fetcher } from '../api';
import { PokemonDetails } from './PokemonDetails';
import { Suspense, useState } from 'react';

interface PokemonCardProps {
	name: string;
	index: number;
}

export const PokemonCard = ({ name, index }: PokemonCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const indexToShow =
		index < 10 ? `00${index}` : index === 10 ? `0${index}` : index < 100 ? `0${index}` : index;

	const onClick = () => setIsOpen(true);

	const onHover = () => {
		preload(`pokemon/${index}`, fetcher);
	};

	return (
		<>
			<div
				className='bg-slate-600 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-950'
				onMouseEnter={onHover}
				onClick={onClick}
			>
				<img
					className='w-full'
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${indexToShow}.png`}
					alt={name}
				/>
				<div className='capitalize text-lg'>{name}</div>
			</div>

			{isOpen && (
				<Suspense fallback={<div>Details skeleton</div>}>
					<PokemonDetails isOpen={isOpen} onClose={() => setIsOpen(false)} index={index} />
				</Suspense>
			)}
		</>
	);
};
