import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import NotFoundPage from "./routes/NotFound";
import ContactsPage from "./routes/Contacts";
import Footer from "./Components/Footer";
import MenuNavbar from "./Components/MenuNavbar";
import styles from "./style.module.css";

const App = () => {
  const match = useRouteMatch("/");
  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route>
        <>
          <MenuNavbar bgActive={!match.isExact} />
          <div
            className={cn(styles.wrap, { [styles.isHomePage]: match.isExact })}
          >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactsPage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
