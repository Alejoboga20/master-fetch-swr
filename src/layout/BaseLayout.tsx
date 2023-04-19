import { PropsWithChildren } from 'react';
import { PokeBallIcon } from '../components';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className='p-8 bg-primary-dark text-primary-main'>
			<div className='flex mb-4'>
				<PokeBallIcon />
				<h1 className='ml-4 mb-2 text-2xl'>Pokemon Dashboard</h1>
			</div>
			<hr />

			{children}
		</main>
	);
};
