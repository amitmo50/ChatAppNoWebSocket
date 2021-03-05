import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ChatPage from './components/chatPage/ChatPage';
import JoinPage from './components/joinPage/JoinPage';
function App() {
  return (
      <Router>
        <Route path="/" exact component={JoinPage}/>
        <Route path="/chat" component={ChatPage}/>
      </Router>
  );
}

export default App;
