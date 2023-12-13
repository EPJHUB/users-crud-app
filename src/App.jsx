import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import UsersList from "./components/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null)

  const { register, handleSubmit, reset } = useForm();

  const handleShowModal = () => {
    setModalVisibility(true);
  };

  const handleHideModal = () => {
    setModalVisibility(false);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setUserToUpdate(null)
  };

  const handleUpdateUser = (user) => {
    handleShowModal()
    setUserToUpdate(user)
  }

  const createUser = (userData) => {
    axios
      .post("https://users-crud.academlo.tech/users/", userData)
      .then(({ data }) => {
        setUsers(data);
        handleHideModal();
        setUsers([...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const deleteUser = (userIdToDelete) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${userIdToDelete}/`)
      .then(() => {
        const newUsers = users.filter((user) => user.id != userIdToDelete);
        setUsers(newUsers);
      })
      .catch((error) => console.log(error));
  };

  const updateUser = (userData) => {
    axios
      .put(`https://users-crud.academlo.tech/users/${userToUpdate.id}/`, userData)
      .then(({ data: updatedUser }) => {
        handleHideModal()
        const newUsers = users.map((user) => user.id == updatedUser.id? updatedUser: user)
        setUsers(newUsers)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then(({ data }) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if(userToUpdate != null){
      reset(userToUpdate);
    }
  },[reset, userToUpdate])

  return (
    <main
      className="flex flex-col text-center text-white font-lato font-normal min-h-screen bg-black [&>div]:mt-24
    "
    >
      <div className="grid gap-6 justify-center items-center">
        <h2 className="text-light-green font-bold">Lista de usuarios</h2>
        <button
          className="text-dark-black bg-cream-gray rounded-md py-2 w-[80vw] mx-auto"
          onClick={handleShowModal}
        >
          Crear nuevo usuario
        </button>
      </div>
      <div
        className={`grid gap-6 justify-center items-center ${
          users.length == 0 ? "block" : "hidden"
        }`}
      >
        <div className="bg-[url(/user-picture-2.jpg)] h-[150px] aspect-square bg-cover bg-center rounded-full mx-auto"></div>
        <span className="text-light-gray-2">
          No tienes ningun usuario en tu lista. <br />
          Crea un nuevo usuario
        </span>
      </div>
      <Modal
        modalVisibility={modalVisibility}
        handleHideModal={handleHideModal}
        register={register}
        handleSubmit={handleSubmit}
        createUser={createUser}
        isUpdating={!!userToUpdate}
        updateUser={updateUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleUpdateUser={handleUpdateUser}
      />
    </main>
  );
};
export default App;
