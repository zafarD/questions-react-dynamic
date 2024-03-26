import { useState } from 'react';
import data from './data'
import Questions from './Questions';

const App = () => {

  const [questions, setQuestion] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleId = (id) => {
    if(id === activeId) {
      setActiveId(null)
      return
    }
    setActiveId(id)
  }

  return <main>
    <Questions questions={questions} activeId={activeId} toggleId={toggleId}/>
  </main>
};


export default App;
