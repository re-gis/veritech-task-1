import DeveloperTeam from "./components/DeveloperTeam";
import Header from "./components/Header";
import MarketingTeam from "./components/MarketingTeam";
import { Team } from "./components/Team";

function App() {
  return (
    <div>
      <div className="flex flex-col px-20 py-5">
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
    </div>
  );
}

export default App;
