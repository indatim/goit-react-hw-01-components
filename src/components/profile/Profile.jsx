import PropTypes from 'prop-types';
import { ProfileContainer, Description, Avatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileViews, ProfileFollowers, ProfileLikes, ProfileLabel, ProfileQuantity } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (<ProfileContainer>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <ProfileName>{username}</ProfileName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
    </Description>

    <ProfileStats>
      <ProfileFollowers>
        <ProfileLabel>Followers</ProfileLabel>
        <ProfileQuantity>{stats.followers}</ProfileQuantity>
      </ProfileFollowers>
      <ProfileViews>
        <ProfileLabel>Views</ProfileLabel>
        <ProfileQuantity>{stats.views}</ProfileQuantity>
      </ProfileViews>
      <ProfileLikes>
        <ProfileLabel>Likes</ProfileLabel>
        <ProfileQuantity>{stats.likes}</ProfileQuantity>
      </ProfileLikes>
    </ProfileStats>
  </ProfileContainer>);

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}