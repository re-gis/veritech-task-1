import { Leadership, vipLeaders } from "../constant/employee";

export const Team = () => {
  return (
    <div className="flex flex-col  justify-between py-10 gap-5">
      <h1 className="font-extrabold text-2xl self-center">Meet Our Team</h1>
      <button className="text-white  bg-secondary  self-center px-20 py-3 rounded-md font-bold">
        Leadership/Management Team
      </button>
      <div className="flex flex-row items-center justify-center ">
        {/* leadership team */}
        {Leadership.map((lead) => (
          <div
            key={lead.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={lead.profile} alt="profile" />
            <p className="font-bold">{lead.name}</p>
            <p className="text-secondary">{lead.position}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly xs:flex-col">
        {vipLeaders.map((vp) => (
          <div
            className="flex flex-col items-center justify-center"
            key={vp.id}
          >
            <img src={vp.profile} alt="profile" />
            <p className="font-bold">{vp.name}</p>
            <p className="text-secondary">{vp.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
