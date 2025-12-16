import { useEffect, useRef, useState } from "react";
import s from "./footer.module.css";
import { icons } from "../../utils";

const Footer = () => {
  const [social, setSocial] = useState([
    { name: "whatsapp", image: icons.social1 },
    { name: "max", image: icons.social2 },
    { name: "vk", image: icons.social3 },
    { name: "telegram", image: icons.social4 },
  ]);
  const [show, setShow] = useState(false);
  const wrapper = useRef(null);

  useEffect(()=>{
    if (wrapper.current) {
        const div = wrapper.current; 
        div.style.height = show ? div.scrollHeight + 'px' : null;
    }
  })

  return (
    <footer className={s.footer}>
      <div className="container">
        <nav className={s.footer__nav}>
          <a href="" className={s.footer__logo}>
            Логотип
          </a>
          <a href="tel:+79000000000 " className={s.footer__phone}>
            +7 (900) 000‑00‑00
          </a>
          <p>Служба поддержки: 09:00–21:00</p>
          <ul className={s.footer__social}>
            {social.map((elem) => (
              <li key={elem.name}>
                <a href="">
                  <img src={elem.image} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div ref={wrapper} className={`${s.footer__wrapper} ${show ? s.active : ""}`}>
          <h2>Скрытая информация - временно не доступна</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            fuga voluptatum itaque dolorum dolor enim unde veniam corrupti
            consequatur! Labore libero quidem eveniet suscipit adipisci
            provident quibusdam maxime maiores repellendus odio ea rem nemo
            rerum voluptate assumenda voluptatibus at corporis autem blanditiis
            ipsam, modi placeat delectus quisquam? Harum tenetur quo voluptatem
            deserunt rerum nisi minima aspernatur explicabo aliquid maxime,
            excepturi recusandae inventore nobis autem reprehenderit debitis
            aperiam iste? Commodi aliquid non corporis doloremque maxime cum
            optio autem ipsa animi recusandae accusamus eos, assumenda fuga
            voluptate tempore deserunt doloribus atque ab repellendus vel illum
            quam, veritatis veniam natus. Rem repudiandae ab saepe,
            voluptatibus, nostrum ut nobis, aperiam necessitatibus libero cum
            recusandae? Tempore perspiciatis eveniet beatae aliquam dolorum nemo
            debitis, non cum accusamus nihil id dolore. Quam doloribus obcaecati
            veritatis maiores, quia ducimus vitae laborum aliquid aspernatur
            veniam animi itaque alias beatae, ut numquam voluptates odit omnis
            quos labore? Eum, voluptatibus laborum.
          </p>
        </div>
        <button onClick={() => setShow(!show)} className={`${s.footer__arrow} ${show ? s.active : ""}`}>
          <img src={icons.arrowBlack} alt="arrow" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
