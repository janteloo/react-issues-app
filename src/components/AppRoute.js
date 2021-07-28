import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route } from "react-router-dom";
import ErrorFallback from "./ErrorFallback";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Component {...props} />
          </ErrorBoundary>
        </Layout>
      )}
    />
  );
};

export default AppRoute;
