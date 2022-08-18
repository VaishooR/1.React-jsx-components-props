import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Job name="Vaish" job="fsd" city="Chennai" />
      <Job name="Prajeeth" job="school" city="Austin" />
      <Job name="Aishoo" job="NE" city="Texas" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <h3>City: {props.city}</h3>
      <h3>Job: {props.job}</h3>
      <h1>------</h1>
    </div>
  );
};
