const DeletionModal = () => {
  return (
    <section
      className={`absolute top-0 min-h-screen w-screen bg-[#e6e6e6] flex justify-center items-center ${
        modalVisibility ? "block" : "hidden"
      }`}
    >
      <article className="mt-28 mb-8 relative w-[90vw] bg-dark-gray p-14 pt-20 rounded-3xl shadow-xl shadow-slate-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-[url(/user-picture-2.jpg)] h-[150px] aspect-square bg-cover bg-center rounded-full"></div>
        <h2>Estas seguro que deseas eliminar a este usuario</h2>
          <button
            type="button"
            className="bg-cream-gray font-lato p-2 block w-full rounded-md text-dark-black"
          >
            Si, eliminar
          </button>
          <button
            type="button"
            onClick={handleHideModal}
            className="text-cream-gray font-lato p-2 block w-full rounded-md"
          >
            Cancelar
          </button>
        </form>
      </article>
    </section>
  );
};
export default DeletionModal;
