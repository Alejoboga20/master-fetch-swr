import useSWR, { preload } from 'swr';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { BaseLayout } from '../layout/BaseLayout';
import { fetcher } from '../api';

preload('pokemon?limit=100', fetcher);

const RootPage = () => {
	return (
		<BaseLayout>
			<Outlet />
			<ScrollRestoration />
		</BaseLayout>
	);
};

export default RootPage;
