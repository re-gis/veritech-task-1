import { developerTeam } from "../constant/employee";
import svg from "../assets/svg1.svg";

const DeveloperTeam = () => {
  // developer component
  return (
    <div className="flex flex-col  justify-between py-10 gap-5">
      <div className="flex items-center justify-center">
        <div className=" w-[40%] flex justify-start">
          <img src={svg} alt="svg" className="rotate-180" />
        </div>
        <div className="w-[60%] flex justify-start">
          <button className="text-white bg-secondary px-20 py-3 rounded-md font-bold">
            Sales and Marketing
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between ">
        {developerTeam[0].map((developer) => (
          <div
            key={developer.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={developer.profile} alt="developer profile" />
            <p className="font-bold">{developer.name}</p>
            <p className="text-secondary">{developer.position}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly ">
        {developerTeam[1].map((developer) => (
          <div
            key={developer.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={developer.profile} alt="developer profile" />

            <p className="font-bold">{developer.name}</p>
            <p className="text-secondary">{developer.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperTeam;
