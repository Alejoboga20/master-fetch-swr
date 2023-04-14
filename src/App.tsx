import useSWR from 'swr';

export const App = () => {
	const { data, error } = useSWR('pokemon');

	if (error) throw new Error();
	if (data) return <div>{JSON.stringify(data)}</div>;

	return <div>App</div>;
};
