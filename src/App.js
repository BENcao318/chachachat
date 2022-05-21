import PromptInputForm from './components/PromptInputForm';
import { useApplicationData } from './hooks/useApplicationData';
import Home from './pages/Home';



function App() {
  const { prompt, setPrompt, answers, setAnswers, handleSubmit } = useApplicationData();

  return (
    <div className='overflow-hidden'>
      <Home />
      {/* <div> */}
        {/* {
          answers.map((answer, index) => {
            return (
              <div key={index}>
                {answer}
              </div>
            )
          })
        } */}

      {/* </div> */}
    </ div>
  );
}

export default App;
