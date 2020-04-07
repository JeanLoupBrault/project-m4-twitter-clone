import React, { useEffect, createContext } from 'react';


const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {

    const [currentTweet, setCurrentTweet] = React.useState({});
    const [status, setStatus] = React.useState('loading');

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    useEffect(() => {
        fetch('/api/tweet/1209791721099411456r1')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('currentTweet', data);
                setCurrentTweet(data);
                setStatus('idle');
            })
    }, [])


    return (
        <TweetContext.Provider value={{ currentTweet, status }}>
            {children}
        </TweetContext.Provider>
    );
}

export default TweetContext;
