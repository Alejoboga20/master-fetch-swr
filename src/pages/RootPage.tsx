import { Outlet, ScrollRestoration } from 'react-router-dom';

import { BaseLayout } from '../layout/BaseLayout';

const RootPage = () => {
	return (
		<BaseLayout>
			<Outlet />
			<ScrollRestoration />
		</BaseLayout>
	);
};

export default RootPage;
