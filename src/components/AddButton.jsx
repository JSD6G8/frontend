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
    <div className="place-content-center-2 btn btn-primary h-12 text-[1rem] tracking-wide text-white max-md:btn-square hover:bg-[#1357B8] md:px-[6px] md:py-[1px]">
      <a href="/activities/create">
        <div className="flex">
          <span className="material-symbols-outlined text-3xl font-bold md:self-center">
            add
          </span>
          <p className="hidden self-center text-base font-semibold md:inline-block md:p-1">
            Add Activity
          </p>
        </div>
      </a>
    </div>
  );
}

export default AddActivityBtn;
