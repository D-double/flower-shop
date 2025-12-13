import { icons } from '../../utils'
import s from './categories.module.css'
const CategoriesItem = ({title, products}) => {
  return (
    <a href='/' className={s.categories__item}>
        <h3 className={s.categories__title}>
            {title}
            <img src={icons.arrowBlack} alt="arrow" />
        </h3>
        <div className={s.categories__wrapper}>
            {
                products.map((elem, index)=>(
                    <div key={index} className={s.categories__product}>
                        <img src={elem.image} alt="" />
                        <h4>{elem.name}</h4>
                    </div>
                ))
            }
            <p className={s.categories__show}>
                Смотреть все
                <img src={icons.arrowBlack} alt="arrow" />
            </p>
        </div>
    </a>
  )
}

export default CategoriesItem