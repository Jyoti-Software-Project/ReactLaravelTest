import logo from './logo.svg';
import './App.css';
import UsersC from './UsersC';
import UsersF from './UsersF';

function App() {
  return (
    <div className="App">
      React App
      <h2>Users</h2>
      {/* Class component is used in UserC and Function component is used in UserF */}
      <UsersC />
      {/* <UsersF /> */}
    </div>
  );
}

export default App;
