import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import {Header} from '../src/stories/Header'
import { useState } from 'react';
import Login from './stories/Login';
import NewButton from './stories/NewButton';
function App() {
  const [user, setUser] = useState();
  return (
   <div>
  <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      /> 
<Button
  backgroundColor="hsla(0, 100%, 50%, 1)"
  label="asdf"
  onClick={() => {}}
  size="large"
/>
<NewButton variant='login'>Login</NewButton>
<Header />
<Button Primary />
<Button Secondary />
{/* <Button
  backgroundColor="blue"
  label="Button"
  size="large"
/> */}

   </div>
  );
}

export default App;
