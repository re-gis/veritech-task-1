const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="text-white  bg-secondary  self-center px-20 py-3 rounded-md font-bold">
        Company Name
      </button>
      <div className="flex flex-col gap-1  justify-center items-center border-b-2 border-secondary border-dashed py-6 px-4 leading-tight">
        <p>
          Welcome to Ubuhanga group where a dedicated team of professions works{" "}
        </p>
        <p>
          together to bring innovation , creativity and expertise to software
          industry get to know
        </p>
        <p>the individuals who make our company thrive</p>
      </div>
    </div>
  );
};

export default Header;
