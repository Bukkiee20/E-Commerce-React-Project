import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


var numbers= [3, 56, 2, 48, 5];

// const newNumbers= numbers.map(x => x * 2);
// console.log(newNumbers);

const newNumbers= numbers.filter(x => x > 10);
console.log(newNumbers);