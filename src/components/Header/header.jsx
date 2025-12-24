import catalog_icon from "../../assets/header/catalog.svg";
import search_icon from "../../assets/header/search.svg";
import location_icon from "../../assets/icons/location.svg";
import time_icon from "../../assets/header/time.svg";
import user_icon from "../../assets/header/user.svg";
import basket_icon from "../../assets/icons/basket.svg";
import { usePopUpStore } from "../../store/popUpStore";
import "../Header/style.css";
import modalNames from "../../utils/modalNames";

function Header() {
  const {setModalName} = usePopUpStore();
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__nav-left">
            <p className="header__nav-text">Витрина</p>
          </div>
          <div className="header__nav-controls">
            <button className="header__nav-btn" onClick={()=>setModalName(modalNames.menu)}>
              <img src={catalog_icon} alt="каталог" />
            </button>
            <div className="header__nav-item">
              <img
                className="header__nav-item-icon"
                src={search_icon}
                alt="поиск"
              />
              <input
                className="header__nav-search"
                type="text"
                placeholder="Поиск"
              />
            </div>
            <div className="header__nav-choose" onClick={()=>setModalName(modalNames.address)}>
              <img src={location_icon} alt="местоположение" />
              <div className="header__nav-choose-texts">
                <p className="header__nav-choose-texts-title">Адрес доставки</p>
                <p className="header__nav-choose-texts-subtitle">
                  Москва, узнаем у получателя
                </p>
              </div>
            </div>
            <div className="header__nav-choose" onClick={()=>setModalName(modalNames.date)}>
              <img src={time_icon} alt="часы" />
              <div className="header__nav-choose-texts">
                <p className="header__nav-choose-texts-title">Дата доставки</p>
                <p className="header__nav-choose-texts-subtitle">2025-09-16</p>
              </div>
            </div>
            <button className="header__nav-btn" onClick={()=>setModalName(true)}>
              <img src={user_icon} alt="войти" />
            </button>
            <button className="header__nav-btn" onClick={()=>setModalName(true)}>
              <img src={basket_icon} alt="корзина" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
