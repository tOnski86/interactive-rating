import Survey from './Components/Survey';
import Success from './Components/Success';
import { useState } from 'react';

function App() {
  const [submit, setSubmit] = useState(true);

  return (
    // adjust height and width later!
    <div className='bg-gradient-to-b from-[#212932] to-[#171E27] rounded-2xl mx-6 px-6 pt-6 pb-8 flex flex-col items-center justify-center min-h-80 min-w-80 '>
      {submit ? <Success /> : <Survey />}
    </div>
  );
}

export default App;
