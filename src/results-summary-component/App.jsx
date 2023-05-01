import "./index.css";
import data from "./data.json";

export default function App() {
  const bgColors = [
    "bg-light-red/10",
    "bg-orangey-yellow/10",
    "bg-green-teal/10",
    "bg-cobalt-blue/10",
  ];
  const textColors = [
    "text-light-red",
    "text-orangey-yellow",
    "text-green-teal",
    "text-cobalt-blue",
  ];
  // console.log(data.map((value) => value.icon));
  return (
    <div className="text-lg desktop:flex desktop:w-screen desktop:h-screen desktop:justify-center desktop:items-center">
      <div className="desktop:flex desktop:max-w-2xl desktop:min-h-fit">
        <section className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-center rounded-b-2xl desktop:rounded-2xl px-10 py-10 desktop:flex-1">
          <h1 className="text-light-lavender">Your Result</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-gradient-to-b from-violet-blue to-persian-blue/0 rounded-full text-light-lavender h-36 w-36 flex flex-col justify-center">
              <span className="text-white block text-5xl">76</span> of 100
            </div>
          </div>
          <span className="text-white text-3xl mt-8 block">Great</span>
          <p className="text-light-lavender mt-4">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="px-4 py-4 desktop:px-8 desktop:flex-1">
          <h2 className="text-dark-gray-blue text-xl">Summary</h2>
          <div className="py-4 flex flex-col gap-2">
            {data?.map((value, i) => (
              <div
                key={value.category}
                className={bgColors[i] + " p-4 rounded-xl flex justify-between"}
              >
                <div className="flex gap-2">
                  <img
                    src={"/src/results-summary-component/" + value.icon}
                    alt=""
                  />
                  <span className={textColors[i]}>{value.category}</span>
                </div>
                <div className="text-light-lavender font-bold">
                  <span className="text-dark-gray-blue">{value.score}</span> /
                  100
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="w-full rounded-full bg-dark-gray-blue text-white py-2 text-xl">
              Continue
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
