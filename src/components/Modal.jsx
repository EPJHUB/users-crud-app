const Modal = ({ modalVisibility, handleHideModal, register, handleSubmit, createUser, isUpdating, updateUser }) => {
  const onSubmit = (userData) => {
    isUpdating? updateUser(userData): createUser(userData)
  }

  const titleForm = isUpdating? "Actualizar usuario":"Crear usuario"
  const textButtonSubmit = isUpdating? "Actualizar":"Crear usuario"

  return (
    <section className={`absolute top-0 min-h-screen w-screen bg-[#e6e6e6] flex justify-center items-center ${modalVisibility? 'block': 'hidden'}`}>
      <article className="mt-28 mb-8 relative w-[90vw] bg-dark-gray p-14 pt-20 rounded-3xl shadow-xl shadow-slate-500  max-w-[480px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-[url(/user-picture-2.jpg)] h-[150px] aspect-square bg-cover bg-center rounded-full"></div>
        <h2 className="text-light-green font-bold">{titleForm}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="[&>label>span]:text-light-green [&>label>span]:text-left [&>label>input]:bg-transparent [&>label]:grid [&>label]:gap-2 [&>label>input]:border-[1px] [&>label>input]:rounded-md [&>label>input]:py-2 [&>label>input]:px-4 [&>label>input]:placeholder-light-gray [&>label>input]:text-light-gray grid gap-4"
          action=""
        >
          <label htmlFor="">
            <span>Nombre</span>
            <input {...register("first_name")} type="text" placeholder="Enter name" />
          </label>
          <label htmlFor="">
            <span>Last Name</span>
            <input {...register("last_name")} type="text" placeholder="Enter last name" />
          </label>
          <label htmlFor="">
            <span>Email address</span>
            <input {...register("email")} type="text" placeholder="Enter email" />
          </label>
          <label htmlFor="">
            <span>Password</span>
            <input {...register("password")} type="text" placeholder="Password" />
          </label>
          <label htmlFor="">
            <span>Birthday</span>
            <input {...register("birthday")} type="date"/>
          </label>
          <button type="submit" className="bg-cream-gray font-lato p-2 block w-full rounded-md text-dark-black">
          {textButtonSubmit}
          </button>
          <button type="button" onClick={handleHideModal} className="text-cream-gray font-lato p-2 block w-full rounded-md">
            Cancelar
          </button>
        </form>
      </article>
    </section>
  );
};
export default Modal;
