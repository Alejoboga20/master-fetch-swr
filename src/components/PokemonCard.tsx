interface PokemonCardProps {
	name: string;
	index: number;
}

export const PokemonCard = ({ name, index }: PokemonCardProps) => {
	const indexToShow =
		index < 10 ? `00${index}` : index === 10 ? `0${index}` : index < 100 ? `0${index}` : index;

	return (
		<>
			<div className='bg-slate-600 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-950'>
				<img
					className='w-full'
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${indexToShow}.png`}
					alt={name}
				/>
				<div className='capitalize text-lg'>{name}</div>
			</div>
		</>
	);
};
