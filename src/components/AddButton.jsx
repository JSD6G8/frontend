function AddActivityBtn() {
  return (
    <>
      <div className="fixed bottom-2 right-2 xl:left-3/4 ">
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
    <div className="rounded-md bg-[#004AAD] px-2 text-[1rem] font-medium tracking-wide text-white md:px-[6px] md:py-[1px] hover:bg-[#1357B8]">
      <a href="/activities/create">
        <button className="flex">
          <p>+</p>
          <p className="hidden md:inline-block">Activity</p>
        </button>
      </a>
    </div>
  );
}

export default AddActivityBtn;
