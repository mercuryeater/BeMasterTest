import db from "../../../db.json";
import "./Home.scss";

export default function Home() {
  const testImg = db.categories.comedies[0].banner;
  console.log(testImg);

  return (
    <div className="home">
      <div className="home__card">
        <img src={testImg} alt="Card 1" />
      </div>
      <div className="home__card">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"
          alt="Card 2"
        />
      </div>
      <div className="home__card">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"
          alt="Card 3"
        />
      </div>
      <div className="home__card">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"
          alt="Card 4"
        />
      </div>
      <div className="home__card">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"
          alt="Card 5"
        />
      </div>
      <button onClick={() => console.log(testImg)}>asdasd</button>
    </div>
  );
}
