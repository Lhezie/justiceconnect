import React from 'react';

const Greetings = ({ timeOfDay }) => {
  let greet;

  if (timeOfDay === 'morning') {
    greet = 'Good Morning';
  } else if (timeOfDay === 'afternoon') {
    greet = 'Good Afternoon';
  } else if (timeOfDay === 'evening') {
    greet = 'Good Evening';
  } else {
    greet = 'Hi';
  }

  return (
    <div>
      {greet}
    </div>
  );
};

export default Greetings;

