import Profile from './componets/Profile';
import UserList from './componets/UserList';

// Context
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <div className="container mx-auto flex justify-between">
        <UserList />
        <Profile />
      </div>
    </UserState>
  );
}

export default App;
