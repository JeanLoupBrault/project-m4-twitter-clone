import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

const Notifications = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/">
                        {/* <HomeFeed /> */}
                    </Route>
                    <Route path="/notifications">
                    </Route>
                    <Route path="/bookmarks">
                    </Route>
                    <Route path="/tweet/:tweetId">
                    </Route>
                    <Route path="/:profileId">
                    </Route>
                    <Route>
                        {/* <ErrorPage /> */}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
};


export default Notifications;