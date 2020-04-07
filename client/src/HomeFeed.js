import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
// import { currentUser } from './CurrentUserContext';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import Tweet from './components/Tweet';
import ErrorPage from './ErrorPage';
// import { COLORS } from './theme';
import Profile from './Profile';
import TweetDetails from './TweetDetails';
import ButtonMeow from './components/ButtonMeow'


const HomeFeed = () => {
    const [homeFeed, setHomeFeed] = React.useState([]);

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    useEffect(() => {
        fetch('/api/me/home-feed').then(res => {
            console.log("Feed Res In Fetch: ", res)
            return res.json()
        }).then(
            feedData => {
                console.log("Feed Data In Fetch: ", feedData)
                //Set home feed array
                setHomeFeed(Object.values(feedData.tweetsById));
            }
        )
        console.log("Feed Data after fetch and setHomeFeed hook", homeFeed);
    }, [])

    console.log("Feed Data in Component: ", homeFeed);

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">

                        <SectionTitle>Home</SectionTitle>
                        <ButtonMeow></ButtonMeow>
                        {homeFeed.map((tweet, index) => {
                            let media = false;
                            if (tweet.media && tweet.media.length > 0) {
                                media = true;
                            }

                            return (<Tweet key={tweet.id} tweetId={tweet.id} timestamp={tweet.timestamp} displayName={tweet.author.displayName}
                                tweetContents={tweet.status} avatarSrc={tweet.author.avatarSrc} numRetweets={tweet.numRetweets}
                                numLikes={tweet.author.numLikes} username={tweet.author.handle} isLikedByCurrentUser={tweet.author.isLiked}
                                isRetweetedByCurrentUser={tweet.author.isBeingRetweetedByYou} bigImage={media ? tweet.media : false}
                            >

                            </Tweet>)
                        })}
                    </Route>
                    <Route path="/notifications">
                    </Route>
                    <Route path="/bookmarks">
                    </Route>
                    <Route path="/tweet/:tweetId">
                        <TweetDetails></TweetDetails>
                    </Route>
                    <Route path="/:profileId">
                        <Profile />

                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
};


const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: black;
`;

// const Indicator = styled.div`
//   position: absolute;
//   width: 250px;
//   top: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   text-align: center;
// `;

// const User = styled.h3`
//   font-size: 28px;
//   color: lime;
// `;

// const HomeLink = styled(NavLink)`
//   position: absolute;
//   top: 15px;
//   left: 15px;
//   color: #666;
// `;

// const NavigationLink = styled(NavLink)`
//     position: relative;
//     text-decoration: none;

//     padding: 10px 16px 10px 5px;
//     font-size: 20px;

//     &.active {
//         color: ${COLORS.third};
//         border: 1px ${COLORS.third};
//         border-radius: 50%;
//         background-color: ${COLORS.primary};
//     }

//     &:after {
//         content: '';
//         position: absolute;
//         background-color: currentColor;
//         left: 0;
//         right: 0;
//         bottom: -5px;
//         width: 50%;
//         margin: auto;
//         height: 3px;
//         transform: scaleX(0);
//         transform-origin: center center;
//         border-radius: 2px;
//     }

//     &.active:after {
//         /* transition: transform 250ms, opacity 150ms; */
//         transform: scaleX(1);
//         opacity: 1;
//     }
// `;

export default HomeFeed;