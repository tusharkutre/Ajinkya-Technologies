// App.js
import React, { useState } from 'react';
import UserForm from './userManagement/UserForm';
import UsersModal from './userManagement/UsersModal';

const NewApp = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateUser  = (userData) => {
    setUsers([...users, userData]);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <UserForm onCreateUser ={handleCreateUser } onOpenModal={handleOpenModal} />
      {isOpen && (
        <UsersModal onClose={handleCloseModal} users={users} />
      )}
    </div>
  );
};

export default NewApp;