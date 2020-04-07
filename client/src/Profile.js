import React, { useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';

const Profile = () => {

    const [profile, setProfile] = React.useState(null);

    const params = useParams();
    console.log('params', params);

    useEffect(() => {
        fetch(`/api/${params.profileId}/profile`).then(res => {
            console.log("Feed Res handle profile In Fetch: ", res)
            return res.json()
        }).then(
            feedData => {
                console.log("Feed Data profile In Fetch: ", feedData)
                //Set profile feed array
                setProfile(feedData.profile);
            }
        )
        console.log("Feed Data after fetch and setHomeFeed hook", profile);
    }, [])

    console.log("Feed Data profile in Component: ", profile);

    return (
        <>
            {profile ?
                <>
                    <div>DisplayName: {profile.displayName}</div>
                    <br></br>
                    <div>Handle: {profile.handle}</div>
                    <br></br>
                    <img src={profile.avatarSrc} alt='' />
                    <br></br>
                    <img src={profile.bannerSrc} alt='' />
                    <br></br>
                    <div>Location: {profile.location}</div>
                    <br></br>
                    <div>Joined: {profile.joined}</div>
                    <br></br>
                    <div>Bio: {profile.bio}</div>
                    <br></br>
                    <div>Num Following: {profile.numFollowing}</div>
                    <br></br>
                    <div>Number of Followers: {profile.numFollowers}</div>
                    <br></br>
                    <div>Number of Likes: {profile.numlikes}</div>
                    <br></br>
                    <div>Is Following You: {profile.isFollowingYou}</div>
                    <br></br>
                    <div>Is Being Followed By You: {profile.isBeingFollowedByYou}</div>


                </> : <>Loading</>
            }
        </>
    )
};


export default Profile;
