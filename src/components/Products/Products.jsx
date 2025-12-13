import CardProduct from "../CardProduct/CardProduct";
import s from "./products.module.css";

const Products = () => {
    const list = Array(12).fill(1)
  return (
    <div className={s.products}>
      <div className="container">
        <h2 className={s.products__title}>Классичечкие букеты</h2>
        <h3 className={s.products__subtitle}>Авторские букеты</h3>
      </div>
      <div className={s.products__list}>
        {
            list.map((_, index)=>(
                <CardProduct key={index}/>
            ))
        }
      </div>
    </div>
  );
};

export default Products;
