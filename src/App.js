import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import s from './App.module.css';
import cn from 'classnames';
import MenuHeader from "./components/MenuHeader";
import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const match = useRouteMatch('/');

  return (
      <Switch>
        <Route path="/notfound" component={NotFoundPage}/>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage}/>
                <Route render={() => (
                  <Redirect to="/notfound"/>
                )}/>
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
  )
};

export default App;
