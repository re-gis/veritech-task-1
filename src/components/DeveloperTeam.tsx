import { developerTeam } from "../constant/employee";

const DeveloperTeam = () => {
  return (
    <div className="flex flex-col  justify-between py-10 gap-5">
      <button className="text-white  bg-secondary  self-center px-20 py-3 rounded-md font-bold">Development Team</button>
      <div className="flex flex-row items-center justify-between ">
        {developerTeam[0].map((developer) => (
          <div key={developer.id}  className="flex flex-col items-center justify-center">
            <img src={developer.profile} alt="developer profile" />
            <p className="font-bold">{developer.name}</p>
            <p className="text-secondary">{developer.position}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly ">
        {developerTeam[1].map((developer) => (
          <div key={developer.id}  className="flex flex-col items-center justify-center">
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
