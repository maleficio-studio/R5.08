// App.jsx
import MainCard from "./components/Maincard";
import OverviewCard from "./components/Overviewcard";
import {
  socialmediaData,
  socialmediaoverviewData,
} from "./data/socialmediaData";

function App() {
  return (
    <>
      <div className="bg-theme-top-bg flex flex-col gap-10 p-15">
        <div>
          <h2 className="text-theme-text text-4xl">Social Media Dashboard</h2>
          <p className="text-theme-text-muted text-2xl">
            Total Followers: 23,004
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {socialmediaData.map((data) => (
            <MainCard
              key={data.id}
              name={data.name}
              platform={data.platform}
              username={data.username}
              followers={data.followers}
              today={data.today}
            />
          ))}
        </div>

        <div>
          <h2 className="text-theme-text mt-12 mb-6 text-2xl font-bold">
            Overview - Today
          </h2>

          <div className="grid grid-cols-4 gap-5">
            {socialmediaoverviewData.map((data) => (
              <OverviewCard
                key={data.id}
                name={data.name}
                platform={data.platform}
                data={data.data}
                percent={data.percent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
