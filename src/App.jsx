import Rate from './Rate';
import Rating from './Components/Rating';
import Button from './Components/Button';
import Success from './Success';

function App() {
  return (
    <div>
      <Rate>
        <Rating />
        <Button>Submit</Button>
      </Rate>
      <Success>
        <Button>Back</Button>
      </Success>
    </div>
  );
}

export default App;
