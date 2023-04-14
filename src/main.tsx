import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import { App } from './App';
import { fetcher } from './api';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SWRConfig
			value={{
				fetcher,
				suspense: true,
			}}
		>
			<Suspense fallback={<div>Dashboard skeleton</div>}>
				<ErrorBoundary fallback={<div>Dashboard Broken</div>}>
					<App />
				</ErrorBoundary>
			</Suspense>
		</SWRConfig>
	</React.StrictMode>
);
