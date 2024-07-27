function HackathonCard(props) {
  return (
    <>
      <div className="card w-80 font-sans border-2 border-white rounded-lg bg-white text-black">
        <div className="head">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            srcset=""
            className="rounded-t-lg"
          />
        </div>
        <div className="content p-4">
          <div className="name text-2xl my-2">Hackathon name</div>
          <div className="themes flex gap-2 my-2 flex-wrap">
            <div className="border-2 border-gray-300 text-gray-500 rounded-3xl px-3 py-1">
              Theme 1
            </div>
            <div className="border-2 border-gray-300 text-gray-500 rounded-3xl px-3 py-1">
              Theme 2
            </div>
            <div className="border-2 border-gray-300 text-gray-500 rounded-3xl px-3 py-1">
              Theme 3
            </div>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            facilis eum corrupti exercitationem fugit vero accusantium adipisci
            aperiam unde et. Possimus distinctio id placeat deleniti suscipit,
            aliquam magnam tenetur corrupti!
          </div>
          <div className="btn my-2 flex justify-center align-middle">
            <button className="border-2 border-green-500 px-5 py-2 rounded bg-green-500 text-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HackathonCard;
