import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import FriendsList from './friendList/FriendList';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data}/>
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};