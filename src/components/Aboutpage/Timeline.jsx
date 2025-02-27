const TimelineData = [
  {
    year: 2014,
    desc: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: 2015,
    desc: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: 2016,
    desc: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: 2017,
    desc: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: 2018,
    desc: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: 2019,
    desc: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: 2021,
    desc: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
  },
  {
    year: 2022,
    desc: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: 2023,
    desc: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
  },
  {
    year: 2024,
    desc: "Better Mortgage launches the fully digital 3-day HELOC².",
  },
  {
    year: 2025,
    desc: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
  },
];

const Timeline = () => {
  return (
    <section className="my-20">
      <h2 className="font-semibold text-center text-3xl mb-4">
        Company Timeline
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {TimelineData.map((data, index) => (
          <li key={data.year}>
            <hr />
            <div className="timeline-middle bg-tertiary-green text-white py-2 px-8 font-semibold text-2xl rounded-full">
              {index == TimelineData.length - 1 ? "Today" : data.year}
            </div>
            <div
              className={`${
                index % 2 === 0 ? "timeline-start" : "timeline-end"
              } md:mb-10 mt-20 w-[400px] bg-gray-200 p-8 text-gray-600 rounded-md`}
            >
              <p>{data.desc}</p>
              {index == TimelineData.length - 1 && (
                <button className="bg-tertiary-green mt-4 font-semibold text-white py-2 px-4 rounded-md">
                  Get Started
                </button>
              )}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
