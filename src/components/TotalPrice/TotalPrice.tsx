import { useState } from 'react'
import clsx from 'clsx'
import './TotalPrice.scss'

export const TotalPrice = () => {
  const [isTotalPriceEnabled, setIsTotalPriceEnabled] = useState(false)

  return (
    <div className="total-price">
      <div className="total-price__body">
        <div className="total-price__label">Display total price</div>
        <div className="total-price__description">Includes all fees, before taxes</div>
      </div>
      <button
        className={clsx('switch', isTotalPriceEnabled && 'switch--checked')}
        onClick={() => setIsTotalPriceEnabled(prev => !prev)}
        aria-checked={isTotalPriceEnabled}
        role="switch"
        type="button"
      >
        <span className="switch__thumb" />
      </button>
    </div>
  )
}
