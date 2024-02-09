import DeveloperTeam from "./components/DeveloperTeam";
import Header from "./components/Header";
import MarketingTeam from "./components/MarketingTeam";
import { Team } from "./components/Team";

import svg from "./assets/svg1.svg"

function App() {
  return (
    <div className="flex flex-col">
      <img src={svg} alt="svg"  className="self-end"/>
      <div className="flex flex-col  py-5">
        <div>
          <Header />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <DeveloperTeam />
        </div>
        <div>
          <MarketingTeam />
        </div>
      </div>
      <img src={svg} alt="svg"  className="self-start rotate-180"/>

    </div>
  );
}

export default App;
