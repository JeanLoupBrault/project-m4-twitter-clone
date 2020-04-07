import React, { useEffect } from 'react';
// import CurrentUserContext from './CurrentUserContext';

// import usePersistedState from '../hooks/use-persisted-state.hook';
// import useInterval from '../hooks/use-interval.hook';
const CurrentUserContext = React.createContext(null);
// const [currentUser, setCurrentUser] = usePersistedState("curUser");


export const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState({});
    const [status, setStatus] = React.useState('loading');

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    useEffect(() => {
        fetch('/api/me/profile')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('currentUser', data);
                setCurrentUser(data);
                setStatus('idle');
            })
    }, [])

    // async componentDidMount() {
    //     const url = 'http://api/me/profile';
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setStatus({ currentUser: data.results[0], loading: false })
    //     // console.log(data.results[0]);
    // }



    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
}


export default CurrentUserContext;
