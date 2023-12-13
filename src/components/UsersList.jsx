import { IconEdit, IconTrash } from "@tabler/icons-react";

const UsersList = ({ users, handleUpdateUser, showDeletionModal }) => {
  // console.log(users);
  return (
    <section className="w-screen h-full grid gap-4 my-10 grid-cols-[repeat(auto-fill,_340px)] justify-center">
      {users.map((user) => (
        <article
          key={user.id}
          className="w-full mx-auto rounded-lg bg-light-gray-2 grid grid-cols-4 p-4 gap-2"
        >
          <div className="col-span-3">
            <h2 className="text-black text-lg border-b-[1px] border-light-gray pb-2">{`${user.first_name} ${user.last_name}`}</h2>
            <div className="grid grid-cols-2 text-xs text-start gap-x-8 gap-y-1 p-2">
              <h3>Email</h3>
              <h3>Birthday</h3>
              <span>{user.email}</span>
              <span>{user.birthday}</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start">
            <button onClick={() => {showDeletionModal(user)}} className="bg-red-500 p-1 rounded-md">
              <IconTrash />
            </button>
            <button onClick={() => handleUpdateUser(user)} className="bg-light-gray-3 p-1 rounded-md">
              <IconEdit />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};
export default UsersList;
