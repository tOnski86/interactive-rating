/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function Rating() {
  return (
    <div className='grid grid-cols-5 text-center gap-4'>
      {/* Generate numbers 1-5 from array */}
      {Array.from({ length: 5 }, (_, i) => (
        <RatingNumber key={i} number={i + 1} />
      ))}
    </div>
  );
}

function RatingNumber({ number }) {
  return (
    <span className='my-6 bg-grey/10 text-white font-medium rounded-full aspect-square flex justify-center items-center hover:text-blue hover:bg-white transition-all hover:cursor-pointer'>
      {number}
    </span>
  );
}

export default Rating;
