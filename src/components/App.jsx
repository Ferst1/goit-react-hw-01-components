import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';

import user from 'JSON/user.json';
import data from 'JSON/data.json';

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
      
    
    </div>
 
  );
};
