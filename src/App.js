import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import cn from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import NotFoundPage from "./routes/NotFound";
import ContactsPage from "./routes/Contacts";
import Footer from "./Components/Footer";
import MenuNavbar from "./Components/MenuNavbar";

import styles from "./style.module.css";
import "react-notifications/lib/notifications.css";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  const location = useLocation();
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  return (
    <>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuNavbar bgActive={!isPadding} />
            <div
              className={cn(styles.wrap, {
                [styles.isHomePage]: isPadding,
              })}
            >
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/contact" component={ContactsPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </>
  );
};

export default App;
