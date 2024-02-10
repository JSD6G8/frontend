function AddActivityBtn() {
  return (
    <>
      <div className="fixed bottom-2 right-2 md:hidden xl:left-3/4">
        <a href="/activities/create">
          <img
            className="h-[5rem] w-[5rem] transition duration-300 ease-in-out hover:scale-110"
            src="https://cdn-icons-png.flaticon.com/512/4601/4601618.png"
            alt="Add activity button"
          ></img>
        </a>
      </div>
    </>
  );
}

export function AddButton() {
  return (
    <div className="btn bg-[#004AAD] px-2 text-[1rem] font-medium tracking-wide text-white hover:bg-[#1357B8] md:px-[6px] md:py-[1px]">
      <a href="/activities/create">
        <div className="flex">
          <span className="material-symbols-outlined text-4xl font-bold md:self-center">
            add
          </span>
          <p className="hidden self-center text-xl font-semibold md:inline-block md:p-2">
            Activity
          </p>
        </div>
      </a>
    </div>
  );
}

export default AddActivityBtn;
