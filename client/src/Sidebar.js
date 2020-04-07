import React, { useContext } from 'react';
import styled from 'styled-components';
// import Link from 'react-router';
import { NavLink } from 'react-router-dom';
import { COLORS } from './theme';
import { ReactComponent as Catlogo } from './assets/logo.svg';
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/feather/user'
import { bell } from 'react-icons-kit/feather/bell'
import { home } from 'react-icons-kit/icomoon/home'
import { bookmark } from 'react-icons-kit/feather/bookmark'
import CurrentUserContext from './CurrentUserContext';
// import TweetContext from './TweetContext';


const Sidebar = () => {
    const { currentUser } = useContext(CurrentUserContext);

    console.log('CurrentUser', currentUser);
    let handle = '';

    if (currentUser.profile) {
        handle = currentUser.profile.handle;
    }
    console.log('profileHandle', handle);

    return (
        <Wrapper>
            <Catlogo></Catlogo>
            <Title>Critter</Title>
            <div>
                <NavigationList>
                    <p>
                        <Icon icon={home}></Icon>
                        <NavigationLink exact activeClassName="active" to="/">
                            Home
                        </NavigationLink>
                    </p>
                    <li>
                        <Icon icon={bell}></Icon>
                        <NavigationLink activeClassName="active" to="/notifications">
                            Notifications
                        </NavigationLink>
                    </li>
                    <li>
                        <Icon icon={bookmark}></Icon>
                        <NavigationLink activeClassName="active" to="/bookmarks">
                            Bookmarks
                        </NavigationLink>
                    </li>
                    <li>
                        <Icon icon={user}></Icon>
                        <NavigationLink activeClassName="active" to={`/${handle}/profile`}>
                            Profile
                        </NavigationLink>
                    </li>
                </NavigationList>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.header`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 180px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #fff; /* white */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
`;

const NavigationList = styled.ul`
    padding: 100px 10px 100px 10px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
`;

const NavigationLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    
    padding: 10px 16px 10px 5px;
    font-size: 20px;

    &.active {
        color: ${COLORS.third};
        border: 1px ${COLORS.third};
        border-radius: 50%;
        background-color: ${COLORS.primary};
    }

    &:after {
        content: '';
        position: absolute;
        background-color: currentColor;
        left: 0;
        right: 0;
        bottom: -5px;
        width: 50%;
        margin: auto;
        height: 3px;
        transform: scaleX(0);
        transform-origin: center center;
        border-radius: 2px;
    }

    &.active:after {
        /* transition: transform 250ms, opacity 150ms; */
        transform: scaleX(1);
        opacity: 1;
    }
`;


export default Sidebar;
