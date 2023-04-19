import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { PokeBallIcon } from '../components';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className='p-8 bg-primary-dark text-primary-main h-full'>
			<Link to='/'>
				<div className='flex mb-4 hover:cursor-pointer'>
					<PokeBallIcon />
					<h1 className='ml-4 mb-2 text-2xl'>Pokemon Dashboard</h1>
				</div>
			</Link>
			<hr />

			{children}
		</main>
	);
};
