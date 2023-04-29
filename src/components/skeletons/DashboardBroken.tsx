import { PokeBallIcon } from '../';

export const DashboardBroken = () => {
	return (
		<main className='p-8 bg-primary-dark text-primary-main h-screen'>
			<div className='flex mb-4 hover:cursor-pointer'>
				<PokeBallIcon />
				<h1 className='ml-4 mb-2 text-2xl'>Pokemon Dashboard</h1>
			</div>
			<hr />
			<div className='p-10'>
				An error has occurred while fetching the data. <a href='.'> Please Try Again Later</a>
			</div>
		</main>
	);
};
