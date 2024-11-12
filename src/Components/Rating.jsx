/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

function Rating({ onSetRating }) {
  const [userRating, setUserRating] = useState(0);

  function handleUserRating() {
    userRating && onSetRating(userRating);
  }

  return (
    <>
      <div className='grid grid-cols-5 text-center gap-4'>
        {/* Generate numbers 1-5 from array */}
        {Array.from({ length: 5 }, (_, i) => (
          <RatingNumber
            key={i}
            number={i + 1}
            onSetRating={() => setUserRating(i + 1)}
          />
        ))}
      </div>
      <Button variant='filled' onClick={handleUserRating}>
        Submit
      </Button>
    </>
  );
}

function RatingNumber({ number, onSetRating }) {
  return (
    <span
      className='my-6 bg-grey/10 text-white font-medium rounded-full aspect-square flex justify-center items-center hover:text-blue hover:bg-white transition-all hover:cursor-pointer'
      onClick={onSetRating}
    >
      {number}
    </span>
  );
}

export default Rating;
