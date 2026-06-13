import clsx from 'clsx'
import arrowRightIcon from '../../assets/images/icons/arrow-right.svg'
import filterIcon from '../../assets/images/icons/filters.svg'
import { categories } from './categories.data'
import './Categories.scss'

export const Categories = () => {
  return (
    <div className="categories container">
      <div className="categories__main">
        <ul className="categories__list">
          {categories.map(({ imgSrc, label, isActive }, index) => (
            <li className="categories__item" key={index}>
              <button className={clsx('category-card', isActive && 'is-active')} type="button">
                <img
                  className="category-card__image"
                  src={imgSrc}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <span className="category-card__label">{label}</span>
              </button>
            </li>
          ))}
        </ul>
        <button className="categories__next-button" type="button">
          <img src={arrowRightIcon} alt="" width={12} height={12} loading="lazy" />
        </button>
      </div>
      <button className="categories__filter-button" type="button">
        <img src={filterIcon} alt="" width={14} height={14} loading="lazy" />
        <span>Filters</span>
      </button>
    </div>
  )
}
