import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import { ErrorBoundary } from 'react-error-boundary';

import { App } from './App';
import { fetcher } from './api';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ErrorBoundary fallback={<div>Dashboard Broken</div>}>
			<Suspense fallback={<div>Dashboard skeleton</div>}>
				<SWRConfig
					value={{
						fetcher,
						suspense: true,
					}}
				>
					<App />
				</SWRConfig>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>
);
