import { images } from '../../utils'
import s from './categories.module.css'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
    const catList = [
        {
            title: 'Цветы',
            products: [
                {
                    name: 'Классические букеты',
                    image: images.flower1
                },
                {
                    name: 'Авторские букеты',
                    image: images.flower2
                },
                {
                    name: 'Монобукеты',
                    image: images.flower3
                },
            ]
        },
        {
            title: 'Торты',
            products: [
                {
                    name: 'Бенто',
                    image: images.cake1
                },
                {
                    name: 'Сникерс',
                    image: images.cake2
                },
                {
                    name: 'Тирамису',
                    image: images.cake3
                },
            ]
        },
        {
            title: 'Воздушные шары',
            products: [
                {
                    name: 'Шары в коробке',
                    image: images.flower1
                },
                {
                    name: 'Наборы шаров',
                    image: images.flower2
                },
                {
                    name: 'Шары с надписями',
                    image: images.flower3
                },
            ]
        },

    ]
  return (
    <div className={s.categories}>
        {
            catList.map((elem, index)=>(
                <CategoriesItem key={index} {...elem}/>
            ))
        }
    </div>
  )
}

export default Categories