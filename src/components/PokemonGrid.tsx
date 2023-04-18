import { BasePokemon } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';

interface PokemonGridProps {
	pokemons: BasePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
	return (
		<div className='p-10'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
				{pokemons.map(({ name }, index) => (
					<PokemonCard key={name} name={name} index={index + 1} />
				))}
			</div>
		</div>
	);
};
