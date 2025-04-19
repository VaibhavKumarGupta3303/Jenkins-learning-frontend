import { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '../api';

const Home = () => {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    const res = await fetchItems();
    setItems(res.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>All Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description}
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
