import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "./components/AppBar/AppBar";
import { ContactsView } from "./views/contactsView";
import LoginView from "./views/loginView";
import RegisterView from "./views/registerView";
import HomeView from "views/homeView";
import { authOperations, authSelectors } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// const ContactsView = lazy(() => import("./views/contactsView"));
// const LoginView = lazy(() => import("./views/loginView"));
// const RegisterView = lazy(() => import("./views/registerView"))

function App() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}

export default App;
