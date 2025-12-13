import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__box">
          <h1 className="home__box-title">
            В каждом лепестке - <br />
            история {""}
            <span className="home__box-title-mod">любви</span>
          </h1>
          <p className="home__box-subtitle">
            Создаем букеты, которые говорят без слов
          </p>
        </div>
        <Categories/>
      </div>
      <div className="home__products">
        <Products/>
        <Products/>
        <Products/>
      </div>
    </section>
  );
}

export default Home;
