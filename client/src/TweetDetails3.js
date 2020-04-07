import React, { useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';
// import TweetDetailed from './components/TweetDetailed';
import styled from 'styled-components';
import LikeButton from '/components/LikeButton/LikeButton';
import SpacerGif from '/components/SpacerGif';
import { NavLink } from 'react-router-dom';
import Action from '/components/Action';
import Stat from '/components/Stat';
import TweetActionIcon from '/components/TweetActionIcon';
import { COLORS } from '/theme';
import PropTypes from 'prop-types';

const propTypes = {
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
    tweetContents: PropTypes.string.isRequired,
    // bannerSrc: PropTypes.object.isRequired,
    timestamp: PropTypes.object.isRequired,
    numLikes: PropTypes.number.isRequired,
    numRetweets: PropTypes.number.isRequired,
    isLikedByCurrentUser: PropTypes.bool.isRequired,
    isRetweetedByCurrentUser: PropTypes.bool.isRequired,
    handleToggleLike: PropTypes.func.isRequired,
    handleToggleRetweet: PropTypes.func.isRequired,
};

const TweetDetails = ({
    displayName,
    username,
    avatarSrc,
    tweetContents,
    bannerSrc,
    timestamp,
    numRetweets,
    numLikes,
    isLikedByCurrentUser,
    isRetweetedByCurrentUser,
    handleToggleLike,
    handleToggleRetweet,
}) => {


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
        <Wrapper>
            <Header>
                <Avatar src={avatarSrc} />
                <Name>
                    <DisplayName>{displayName}</DisplayName>
                    <Username>@{username}</Username>
                </Name>
            </Header>

            <TweetContents>{tweetContents}</TweetContents>
            <BigImage>{bannerSrc}</BigImage>
            <Timestamp>{timestamp}</Timestamp>

            <Divider />

            <Stats>
                <Stat num={numRetweets} suffix="Retweets" />
                <SpacerGif size={32} />
                <Stat num={numLikes} suffix="Likes" />
            </Stats>

            <Divider />

            <Actions>
                <Action
                    color="rgb(27, 149, 224)"
                    size={40}
                    onClick={() => {
                        /* noop */
                    }}
                >
                    <TweetActionIcon kind="reply" />
                </Action>

                <Action
                    color="rgb(23, 191, 99)"
                    size={40}
                    onClick={handleToggleRetweet}
                    isOn={isRetweetedByCurrentUser}
                >
                    <TweetActionIcon
                        kind="retweet"
                        color={isRetweetedByCurrentUser ? 'rgb(23, 191, 99)' : undefined}
                    />
                </Action>

                <Action color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike}>
                    <LikeButton isLiked={isLikedByCurrentUser} />
                </Action>

                <Action
                    color="rgb(27, 149, 224)"
                    size={40}
                    onClick={() => {
                        /* noop */
                    }}
                >
                    <TweetActionIcon kind="share" />
                </Action>
            </Actions>

            <Divider />
        </Wrapper>

        // <>
        //     {tweetDetail ?
        //         <>
        //             <div>DisplayName: {tweetDetail.author.displayName}</div>
        //             <br></br>
        //             <div>Handle: {tweetDetail.author.handle}</div>
        //             <br></br>
        //             <img src={tweetDetail.author.avatarSrc} alt='' />
        //             <br></br>
        //             <img src={tweetDetail.author.bannerSrc} alt='' />
        //             <br></br>
        //             <div>Location: {tweetDetail.author.location}</div>
        //             <br></br>
        //             <div>Joined: {tweetDetail.author.joined}</div>
        //             <br></br>
        //             <div>Bio: {tweetDetail.author.bio}</div>
        //             <br></br>
        //             <div>Num Following: {tweetDetail.author.numFollowing}</div>
        //             <br></br>
        //             <div>Number of Followers: {tweetDetail.author.numFollowers}</div>
        //             <br></br>
        //             <div>Number of Likes: {tweetDetail.author.numlikes}</div>
        //             <br></br>
        //             <div>Is Following You: {tweetDetail.author.isFollowingYou}</div>
        //             <br></br>
        //             <div>Is Being Followed By You: {tweetDetail.author.isBeingFollowedByYou}</div>


        //         </> : <>Loading</>
        //     }
        // </>
    )
};


// const SectionTitle = styled.h3`
//   text-align: center;
//   font-size: 32px;
//   color: yellow;
// `;

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  /* padding-bottom: 0; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
`;

const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const BigImage = styled.img`
  width: 300px;
  height: 200px;
  
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

TweetDetails.propTypes = propTypes;

export default TweetDetails;
