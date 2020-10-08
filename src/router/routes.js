import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const PostComponent = lazy(() => import("src/pages/apps/post/list"));
const UserComponent = lazy(() => import("src/pages/apps/user/list"));
const LoginComponent = lazy(() => import("src/pages/login"));

const fakeRole = "user";

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

const ROUTES = [
  {
    path: "/post",
    component: () => <PostComponent />,
    roles: [ROLES.ADMIN, ROLES.USER],
    hidden: false,
  },
  {
    path: "/user",
    component: () => <UserComponent />,
    roles: [ROLES.ADMIN],
    hidden: true,
  },
];

const checkValid = (route) => {
  const { hidden, roles } = route;
  return hidden ? false : roles.includes(fakeRole);
};

const renderRoutes = (routes) => {
  return routes.map((route) =>
    checkValid(route) ? (
      <Route path={route.path} render={route.component} />
    ) : null
  );
};

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {renderRoutes(ROUTES)}
          <Route path="/login" render={() => <LoginComponent />} />
        </Switch>
      </Router>
    </Suspense>
  );
};
export default Routes;
