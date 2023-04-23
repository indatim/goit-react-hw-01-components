import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';

import { FriendList } from 'components/friend-list/FriendList';
import friends from 'components/friend-list/friends.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
