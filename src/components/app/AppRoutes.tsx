import React, { FC, memo, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
const Dashboard = React.lazy(() => import("../dashboard/Dashboard"));
const Layout = React.lazy(() => import("../layout/Layout"));

const RoutesWrapper = () => {
  let routes = useRoutes([{ path: "/", element: <Dashboard /> }]);
  return routes;
};

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<div>Lazy Loading...</div>}>
      <Layout>
        <Router>
          <RoutesWrapper />
        </Router>
      </Layout>
    </Suspense>
  );
};

export default memo(AppRoutes);
