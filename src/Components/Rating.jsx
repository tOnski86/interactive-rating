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
        {Array.from({ length: 5 }, (_, i) => (
          <RatingNumber
            key={i}
            number={i + 1}
            userRating={userRating}
            onSetRating={() => setUserRating(i + 1)}
          />
        ))}
      </div>
      <Button variant='filled' onClick={handleUserRating}>
        {userRating ? 'Submit' : 'Enter rating'}
      </Button>
    </>
  );
}

function RatingNumber({ number, userRating, onSetRating }) {
  const isSelected = userRating === number;

  function handleSelected() {
    onSetRating();
  }

  return (
    <span
      className={`my-6 ${
        isSelected ? 'text-blue bg-white' : 'bg-grey/10 text-white'
      } font-medium rounded-full aspect-square flex justify-center items-center hover:text-blue hover:bg-orange transition-all hover:cursor-pointer`}
      onClick={handleSelected}
    >
      {number}
    </span>
  );
}

export default Rating;
