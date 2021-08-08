/* eslint-disable consistent-return */
import React, { Suspense } from 'react';
import DataProvider, { createStore } from '@/redux';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Auth from './auth';

const Loading = <div>loading...</div>;
const store = createStore(process.env.BUILD_ENV);

const Router = () => {
  const routing = useRoutes(routes());
  return <>{routing}</>;
};

const App = () => (
  <DataProvider store={store}>
    <Suspense fallback={Loading}>
      <Auth />
      <Router />
    </Suspense>
  </DataProvider>
);

export default App;
