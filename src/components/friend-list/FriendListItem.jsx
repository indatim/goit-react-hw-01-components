
import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled'; 

export const FriendListItem = ({avatar, name, isOnline}) => (
    <FriendItem>
        <FriendStatus isOnline></FriendStatus>
        <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
    </FriendItem>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};