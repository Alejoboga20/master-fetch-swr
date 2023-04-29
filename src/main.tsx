import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import { fetcher } from './api';
import { router } from './router';
import './index.css';
import { PageSkeleton } from './components/skeletons/PageSkeleton';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ErrorBoundary fallback={<div>Dashboard Broken</div>}>
			<Suspense fallback={<PageSkeleton />}>
				<SWRConfig
					value={{
						fetcher,
						suspense: true,
					}}
				>
					<RouterProvider router={router} />
				</SWRConfig>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>
);
