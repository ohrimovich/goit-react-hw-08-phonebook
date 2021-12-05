import { Route, Redirect } from "react-router";
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {" "}
      {shoudRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
