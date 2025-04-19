import { useState } from 'react';
import { addItem } from '../api';

const AddItem = () => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(form);
    setForm({ name: '', description: '' });
    alert("Item added!");
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
