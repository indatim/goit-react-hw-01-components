import PropTypes from 'prop-types';
import { FriendListContainer, FriendItemList } from './FriendList.styled';
import { FriendListItem } from 'components/friend-list/FriendListItem'


export const FriendList = ({ friends }) => (
  <FriendListContainer>
    <FriendItemList>{
    friends.map(friend => (<FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}></FriendListItem>))
  }
    </FriendItemList>
  </FriendListContainer>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })),
};