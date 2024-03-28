import Header from "./Header";
import Body from "./Body";

const Home = () => {
  return (
    <div
      className="home min-h-screen bg-cover bg-center bg-[#2f1893] h-screen w-screen"
      style={{ backgroundImage: `url("./src/assets/image.svg")` }}
    >
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Home;
