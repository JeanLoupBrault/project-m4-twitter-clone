import React, { useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';
// import TweetDetailed from './components/TweetDetailed';
// import styled from 'styled-components';

const TweetDetails = () => {

    const [tweetDetail, setTweetDetail] = React.useState(null);

    const params = useParams();
    console.log('params Tweet', params.tweetId);

    useEffect(() => {
        fetch(`/api/tweet/${params.tweetId}`).then(res => {
            console.log("Feed Res handle tweetDetail In Fetch: ", res)
            return res.json()
        }).then(
            feedData => {
                console.log("Feed Data tweetDetail In Fetch: ", feedData)
                //Set profile feed array
                setTweetDetail(feedData.tweet);
            }
        )
        console.log("Tweet Feed Data after fetch and setTweetDetail hook", tweetDetail);
    }, [params])

    console.log("Tweet Feed Data profile in Component: ", tweetDetail);

    return (
        <>
            {tweetDetail ?
                <>
                    <div>DisplayName: {tweetDetail.author.displayName}</div>
                    <br></br>
                    <div>Handle: {tweetDetail.author.handle}</div>
                    <br></br>
                    <img src={tweetDetail.author.avatarSrc} alt='' />
                    <br></br>
                    <img src={tweetDetail.author.bannerSrc} alt='' />
                    <br></br>
                    <div>Location: {tweetDetail.author.location}</div>
                    <br></br>
                    <div>Joined: {tweetDetail.author.joined}</div>
                    <br></br>
                    <div>Bio: {tweetDetail.author.bio}</div>
                    <br></br>
                    <div>Num Following: {tweetDetail.author.numFollowing}</div>
                    <br></br>
                    <div>Number of Followers: {tweetDetail.author.numFollowers}</div>
                    <br></br>
                    <div>Number of Likes: {tweetDetail.author.numlikes}</div>
                    <br></br>
                    <div>Is Following You: {tweetDetail.author.isFollowingYou}</div>
                    <br></br>
                    <div>Is Being Followed By You: {tweetDetail.author.isBeingFollowedByYou}</div>


                </> : <>Loading</>
            }
        </>
    )
};


// const SectionTitle = styled.h3`
//   text-align: center;
//   font-size: 32px;
//   color: yellow;
// `;

export default TweetDetails;
