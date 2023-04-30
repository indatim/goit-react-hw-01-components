import { Container } from './App.styled';

import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';

import { FriendList } from 'components/friend-list/FriendList';
import friends from 'components/friend-list/friends.json';

import { TransactionsHistory } from 'components/transaction-history/TransactionsHistory';
import transactions from 'components/transaction-history/transactions.json';

export const App = () => {
  return (
    <Container>
    <Profile
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </Container>
  );
};
