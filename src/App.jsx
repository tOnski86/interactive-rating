import { useState } from 'react';

import Survey from './Components/Survey';
import Success from './Components/Success';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState('');

  function handleRating(number) {
    setRating(number);
    setSubmit(true);
  }

  function handleBack() {
    setSubmit(false);
    setRating('');
  }

  return (
    // adjust height and width later!
    <div className='bg-gradient-to-b from-[#212932] to-[#171E27] rounded-2xl mx-6 px-6 pt-6 pb-8 flex flex-col items-center justify-center min-h-96 max-w-sm '>
      {submit ? (
        <Success rating={rating} onBack={handleBack} />
      ) : (
        <Survey onSetRating={handleRating} />
      )}
    </div>
  );
}

export default App;
