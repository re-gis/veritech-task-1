import { developerTeam, marketingTeam } from "../constant/employee";

const MarketingTeam = () => {
  return (
    <div className="flex flex-col  justify-between py-10 gap-5">
      <button className="text-white  bg-secondary  self-center px-20 py-3 rounded-md font-bold">
        Sales and Marketing
      </button>
      <div className="flex flex-row items-center justify-between ">
        {marketingTeam[0].map((market) => (
          <div
            key={market.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={market.profile} alt="market profile" />
            <p className="font-bold">{market.name}</p>
            <p className="text-secondary">{market.position}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly ">
        {marketingTeam[1].map((market) => (
          <div
            key={market.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={market.profile} alt="market profile" />

            <p className="font-bold">{market.name}</p>
            <p className="text-secondary">{market.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingTeam;
