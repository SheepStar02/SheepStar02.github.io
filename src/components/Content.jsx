const Content = () => {
  const games = [
    {
      title: "Coming very soon",
      color: "yellow-300",
      desc: "I'll get this one done I promise with pinky swears",
      icon: "https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg",
    },
    {
      title: "Coming a bit later",
      color: "orange-400",
      icon: "https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg",
      desc: "Idk don't quote me on anything if I get bored I'll just drink bleach instead of being useful",
    },
    {
      title: "Not coming soon",
      color: "red-600",
      icon: "https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg",
      desc: "It's generally hard to tell whether or not someone you meet is male or female.",
    },
  ];

  const title = "My Awful Website";

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-evenly">
      <div className="text-8xl font-bold cursor-pointer select-none hover:text-white text-gray-300">
        {title.split("").map((item, index) => (
          <span key={index} className="group">
            <span className="absolute h-[180px] translate-y-[-60px] z-10">
              <span
                className={`absolute translate-y-[60px] duration-100 group-hover:translate-y-[100px] group-hover:text-black group-hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]`}
              >
                {item}
              </span>
            </span>
            <span className="opacity-0">{item}</span>
          </span>
        ))}
      </div>
      <div className="w-3/4 flex flex-wrap gap-12 justify-evenly">
        {games.map((item, index) => (
          <div
            key={index}
            className="w-64 h-64 text-slate-200 rounded-lg p-4 flex flex-col justify-between gap-4 bg-neutral-700 cursor-pointer hover:bg-neutral-600 hover:shadow-[0_0_1rem_1rem_rgba(255,255,255,0.2)] duration-200 group"
          >
            <h1 className={"font-bold text-2xl text-center text-" + (item.color)}>{item.title}</h1>
            <div className="flex justify-center">
              <div className="rounded-full shadow-[0_0_4px_4px_rgba(0,0,255,0.2)] group-hover:shadow-[0_0_4px_4px_rgba(0,255,0,0.6)] duration-200 overflow-hidden">
                <img width={100} src={item.icon} className="group-hover:scale-150 duration-200 opacity-80 group-hover:opacity-100"></img>
              </div>
            </div>
            <p className="text-center text-sm group-hover:opacity-60 duration-200">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
