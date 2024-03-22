import data from "./data";

function Main() {
  return (
    <div>
      <h2 className="title">Albums</h2>
      <div className="container">
        {data.map((photo, index) => (
          <div className="card" key={index}>
            <img src={photo.src.large} alt="" />
            <p>{photo.photographer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
