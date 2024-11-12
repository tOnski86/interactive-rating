/* eslint-disable react/prop-types */
function Rate({ children }) {
  return (
    <div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {children}
    </div>
  );
}

export default Rate;
