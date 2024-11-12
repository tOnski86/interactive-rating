import Button from './Button';

import SuccessIcon from '/illustration-thank-you.svg';

function Success() {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={SuccessIcon}
        alt='success icon'
        className='w-32 aspect-auto mb-6 mt-2'
      />
      <span className='text-orange px-4 py-[5px] rounded-full bg-grey/10 mb-6'>
        You selected X out of Y
      </span>
      <h2 className='text-white text-2xl font-semibold mb-3'>Thank you!</h2>
      <p className='text-center text-grey mb-3'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&#39;t hesitate to get in touch!
      </p>
      <Button variant='text'>&larr; Back</Button>
    </div>
  );
}

export default Success;
