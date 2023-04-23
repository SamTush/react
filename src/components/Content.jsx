import { useState } from 'react';
import './Content.scss';
import { FaTrash } from 'react-icons/fa';

const Content = () => {
  const [name, setName] = useState([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of cocoa covered almonds unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'item 3',
    },
  ]);

  const handleCheck = (id) => {
    const change = name.map((names) => (
      names.id === id
        ? {
          ...names, checked: !names.checked,
        }
        : names
    ));
    setName(change);
    localStorage.setItem('shopinglist', JSON.stringify(change));
  };

  const deleteItem = (id) => {
    const dltItem = name.filter((item) => (
      item.id !== id
    ));
    setName(dltItem);
    localStorage.setItem('shoppinglist', JSON.stringify());
  };

  return (
    <main>
      <ul>
        {name.map((items) => (
          <li key={items.id} className="mb-2">
            <input
              type="checkbox"
              onChange={() => handleCheck(items.id)}
              checked={items.checked}
            />
            <label className="ms-2 items" htmlFor="list item">{items.item}</label>
            <FaTrash onClick={() => deleteItem(items.id)} role="button" className="ms-2" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
