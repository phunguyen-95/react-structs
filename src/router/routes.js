import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const PostComponent = lazy(() => import("src/pages/apps/post/list"));
const UserComponent = lazy(() => import("src/pages/apps/user/list"));

const ROUTES = [
  {
    path: "/post",
    component: () => <PostComponent />,
    roles: [],
    public: false,
  },
  {
    path: "/user",
    component: () => <UserComponent />,
    roles: [],
    public: false,
  },
];

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {ROUTES.map((route) => (
            <Route path={route.path} render={route.component} />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};
export default Routes;
