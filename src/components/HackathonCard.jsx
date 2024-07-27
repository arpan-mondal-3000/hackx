function HackathonCard(props) {
  return (
    <>
      <div className="card w-80 font-sans border-2 border-white rounded-lg bg-white text-black">
        <div className="head">
          <img src={props.imgSrc} alt="" srcset="" className="rounded-t-lg" />
        </div>
        <div className="content p-4">
          <div className="name text-2xl my-2">{props.name}</div>
          <div className="themes flex gap-2 my-2 flex-wrap">
            {props.themes.map((element) => (
              <div className="border-2 border-gray-300 text-gray-500 rounded-3xl px-3 py-1 hover:shadow-lg hover:cursor-pointer transition-all">
                {element}
              </div>
            ))}
          </div>
          <div className="desc h-30 overflow-hidden">{props.desc}</div>
          <div className="btn my-2 flex justify-center align-middle">
            <button className="border-2 border-green-500 px-5 py-2 rounded bg-green-500 text-white hover:shadow-lg hover:shadow-green-400 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HackathonCard;
