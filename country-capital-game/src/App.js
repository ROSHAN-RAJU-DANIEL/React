import React from 'react';
import CountryCapital from './CountryCapital.js'

const data = {
  India: "New Delhi",
  Australia: "Canberra",
  Spain: "Madrid",
  England: "London",
  Italy: "Rome"
};

function App() {
  return (
    <div>
      <CountryCapital data={data} />
    </div>
  );
}

export default App;
