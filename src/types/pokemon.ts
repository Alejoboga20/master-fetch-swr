export interface PokemonResponse {
	count: number;
	next: string;
	previous: null;
	results: BasePokemon[];
}

export interface BasePokemon {
	name: string;
	url: string;
}
