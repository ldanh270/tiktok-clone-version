// Import libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

// Import files
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/component/layouts';
import './styles.module.scss';

// Function component
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // Handle set layouts
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
