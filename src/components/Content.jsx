import { useState } from 'react';
import './Content.scss';

const Content = () => {
  const [name, setName] = useState('Tim');

  const names = ['Tim', 'Tom', 'Joseph'];

  const handleName = () => {
    const change = Math.floor(Math.random() * 3);
    return (
      setName(names[change])
    );
  };

  return (
    <main>
      <ul>
        <li>
          hello
          &nbsp;
          {name}
          !
        </li>
        <li>
          <button className="btn btn-outline-light mt-4" type="submit" onClick={handleName}>
            Click me
          </button>
        </li>
      </ul>
    </main>
  );
};

export default Content;
