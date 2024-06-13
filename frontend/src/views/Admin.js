import React, { useState, Suspense } from 'react';
import { SidebarAdmin } from '../components/sidebar';

const LazyArticles = React.lazy(() => import('../components/articles'));
const LazyClients = React.lazy(() => import('../components/clients'));

export const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const onClickHandle = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="d-flex">
      <SidebarAdmin onClickHandle={onClickHandle} />
      <div className="flex-grow-1">
        <Suspense fallback={<div>Loading...</div>}>
          {selectedComponent === 'Articles' && <LazyArticles />}
          {selectedComponent === 'Clients' && <LazyClients />}
        </Suspense>
      </div>
    </div>
  );
};
