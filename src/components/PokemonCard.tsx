interface PokemonCardProps {
	name: string;
	index: number;
}

export const PokemonCard = ({ name, index }: PokemonCardProps) => {
	return (
		<div>
			<div>{name}</div>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`}
				alt={name}
			/>
		</div>
	);
};
