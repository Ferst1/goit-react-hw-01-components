import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './HistoryTransactions/HistoryTransactions';


import user from 'JSON/user.json';
import data from 'JSON/data.json';
import friends from 'JSON/friends.json';
import transactions from 'JSON/transactions.json';


export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />

    
    </div>
 
  );
};
