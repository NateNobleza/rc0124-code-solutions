import { useState } from 'react';
import { Modal } from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    alert('Item deleted!');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleDelete}>Delete Me!</button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <p>Are you sure you want to delete?</p>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleConfirmDelete}>Delete</button>
      </Modal>
    </div>
  );
}

export default App;
