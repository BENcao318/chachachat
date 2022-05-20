import { useState } from 'react';
import PromptInputForm from './components/PromptInputForm';

function App() {
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState([]);

  return (
    <>
      <div className=''>
        <PromptInputForm prompt={prompt} setPrompt={setPrompt} results={results} setResults={setResults}/>
      </div>
      <div>
        {
          results.map((result, index) => {
            return (
              <div key={index}>
                {result}
              </div>
            )
          })
        }

      </div>
    </>
  );
}

export default App;
