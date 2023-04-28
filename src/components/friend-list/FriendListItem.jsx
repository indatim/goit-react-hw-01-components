import PropTypes from 'prop-types';
// import css from 'Friend.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => (
    <li className="item">
        <span className="{isOnline ? css.online : css.offline}"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};