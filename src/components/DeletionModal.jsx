const DeletionModal = ({ deletionModalVisibility, hideDeletionModal, handleDeleteUser }) => {
  return (
    <section
      className={`fixed top-0 min-h-screen w-screen bg-[#e6e6e6] flex justify-center items-center overscroll-none ${
        deletionModalVisibility ? "block" : "hidden"
      }`}
    >
      <article className="mt-28 mb-8 relative w-[90vw] bg-dark-gray p-14 pt-20 rounded-3xl shadow-xl shadow-slate-500 grid gap-8  max-w-[480px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-[url(/user-picture-2.jpg)] h-[150px] aspect-square bg-cover bg-center rounded-full"></div>
        <h2>¿Estas seguro que deseas eliminar a este usuario?</h2>
        <div>
          <button
            onClick={handleDeleteUser}
            type="button"
            className="bg-cream-red font-lato p-2 block w-full rounded-md text-dark-black"
          >
            Si, eliminar
          </button>
          <button
            onClick={hideDeletionModal}
            type="button"
            className="text-cream-gray font-lato p-2 block w-full rounded-md"
          >
            Cancelar
          </button>
        </div>
      </article>
    </section>
  );
};
export default DeletionModal;
