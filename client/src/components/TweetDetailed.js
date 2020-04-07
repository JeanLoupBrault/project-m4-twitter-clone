import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { format } from 'date-fns';

import LikeButton from '../LikeButton/LikeButton';
import SpacerGif from '../SpacerGif';

import Action from './Action';
import Stat from './Stat';
import TweetActionIcon from './TweetActionIcon';
// import HomeFeed from './HomeFeed';

//<div>
//     <div>{user.handle}</div>
//     <div>{user.displayName}</div>
//     <div>{user.avatarSrc}</div>
//     <div>{user.bannerSrc}</div>
//     <div>{user.location} </div>
//     <div>{user.joined}</div>
//     <div>{user.bio}</div>
//     <div>{user.location}</div>
//     <div>{user.numFollowing}</div>
//     <div>{user.numFollowers}</div>
//     <div>{user.numLikes}</div>
//     <div>{user.isFollowingYou}</div>
//     <div>{user.isBeingFollowedByYou}</div>
// </div>)

const propTypes = {
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  tweetContents: PropTypes.string.isRequired,
  bannerSrc: PropTypes.object.isRequired,
  timestamp: PropTypes.object.isRequired,
  numLikes: PropTypes.number.isRequired,
  numRetweets: PropTypes.number.isRequired,
  isLikedByCurrentUser: PropTypes.bool.isRequired,
  isRetweetedByCurrentUser: PropTypes.bool.isRequired,
  handleToggleLike: PropTypes.func.isRequired,
  handleToggleRetweet: PropTypes.func.isRequired,
};

const TweetDetailed = ({
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
  // console.log('timestamp', timestamp, new Date());
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
  );
};

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

TweetDetailed.propTypes = propTypes;

export default TweetDetailed;