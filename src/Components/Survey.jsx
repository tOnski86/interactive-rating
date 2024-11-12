import Rating from './Rating';
import Button from './Button';

function Survey() {
  return (
    <div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
      <Button>Submit</Button>
    </div>
  );
}

export default Survey;
