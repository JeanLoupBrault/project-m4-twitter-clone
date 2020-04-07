import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import TweetDetails from './TweetDetails';
import Profile from './Profile';
// import { CurrentUserProvider } from './CurrentUserContext';


// function App(props) {
//   const { currentUser, setCurrentUser, status, setStatus } = React.useContext(
//     CurrentUserProvider
//   );

const App = () => {

  return (
    <BrowserRouter>
      <Wrapper>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Main>
      </Wrapper>

      <GlobalStyles />
    </BrowserRouter>
  )
};

const Wrapper = styled.div`
max-width: 800px;
margin: auto;
`;

const Main = styled.main`
padding-top: 32px;
padding-bottom: 32px;
`;

export default App;
