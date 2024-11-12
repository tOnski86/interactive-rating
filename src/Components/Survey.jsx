import Rating from './Rating';
import Button from './Button';

import StarIcon from '/icon-star.svg';

function Survey() {
  return (
    <div className='flex flex-col justify-center'>
      <img
        src={StarIcon}
        alt='star icon'
        className='bg-grey/10 p-3 rounded-full w-4 h-4 box-content mb-4 hover:animate-spin'
      />
      <h2 className='text-white text-2xl font-semibold mb-3'>How did we do?</h2>
      <p className='text-grey'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
      <Button variant='filled'>Submit</Button>
    </div>
  );
}

export default Survey;
