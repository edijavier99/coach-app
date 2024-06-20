import React, { useState, Suspense, useMemo } from 'react';
import { SidebarAdmin } from '../components/sidebar';

const LazyArticles = React.lazy(() => import('../components/articles'));
const LazyClients = React.lazy(() => import('../components/clients'));

export const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const onClickHandle = (componentName) => {
    setSelectedComponent(componentName);
  };

  // Utilizamos useMemo para memoizar el componente seleccionado
  const MemoizedComponent = useMemo(() => {
    switch (selectedComponent) {
      case 'Articles':
        return <LazyArticles />;
      case 'Clients':
        return <LazyClients />;
      default:
        return null;
    }
  }, [selectedComponent]);
  
  return (
    <div className="d-flex">
      <SidebarAdmin onClickHandle={onClickHandle} />
      <div className="flex-grow-1">
        <Suspense fallback={<div>Loading...</div>}>
          {MemoizedComponent}
        </Suspense>
      </div>
    </div>
  );
};
