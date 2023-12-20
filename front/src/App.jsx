import './styles/App.css'
import './styles/reset.css'

import { makeRequest } from './api/api'
import { useState } from 'react'

import { SideMenu } from './components/SideMenu/SideMenu'
import { ChatMessage } from './components/ChatMessage/ChatMessage'

function App() {

  const [ input, setInput ] = useState('');
  const [ chatlog, setChatlog ] = useState([{
    user: 'gpt',
    message: <p>Como posso te ajudar hoje?</p>
  }]);

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await makeRequest(input);
    response = response.data.split('\n')
      .filter(line => line.trim() !== '')
      .map(line => <p>{line}</p>);

    setChatlog([...chatlog, {
      user: 'me',
      message: <p>{input}</p>
    }, {
      user: 'gpt',
      message: response
    }]);

    setInput('');
  }

  return (
    <div className='app'>
      <SideMenu />
      <section className='chatbox'>
        <div className='chat-log'>
          {chatlog.map((message, index) => (
            <ChatMessage key={index} user={message.user} message={message.message} />
          ))}
        </div>
        <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input 
                rows='1'
                className='chat-input-textarea' 
                value={input} 
                onChange={event => setInput(event.target.value)} />
            </form>
        </div>
      </section>
    </div>
  )
}

export default App
