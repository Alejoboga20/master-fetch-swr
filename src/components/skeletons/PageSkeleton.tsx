import { PokeBallIcon } from '../';

const data = new Array(20).fill({});

export const PageSkeleton = () => {
	return (
		<main className='p-8 bg-primary-dark text-primary-main h-screen'>
			<div className='flex mb-4 hover:cursor-pointer'>
				<PokeBallIcon />
				<h1 className='ml-4 mb-2 text-2xl'>Pokemon Dashboard</h1>
			</div>
			<hr />
			<p>Loading...</p>
			<div className='p-10'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8'>
					{data.map((_, index) => (
						<div
							key={index}
							className='bg-slate-600 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-950 h-40'
						/>
					))}
				</div>
			</div>
		</main>
	);
};
