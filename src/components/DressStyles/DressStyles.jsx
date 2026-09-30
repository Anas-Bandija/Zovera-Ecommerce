import React from 'react'
import './DressStyles.css'
import DressStyleCardImg1 from '../../assets/images/dressStyleCardImg_1.svg'
import DressStyleCardImg2 from '../../assets/images/dressStyleCardImg_2.svg'
import DressStyleCardImg3 from '../../assets/images/dressStyleCardImg_3.svg'
import DressStyleCardImg4 from '../../assets/images/dressStyleCardImg_4.svg'

export default function DressStyles() {
  return (
    <div className="dressStylesContainer">      
        <div className="parentContainer">
        <h1>BROWSE BY dress STYLE</h1>
        </div>
        <div className="dressStyleCardContainer">
            <div className="dressStyleCardSmall">
                <h3>Casual</h3>
                <div className="dressStyleCardSmallImg">
                    <img src={DressStyleCardImg1} alt="Dress Style" />
                </div>
                </div>
                            <div className="dressStyleCardSmall">
                                 <h3>Formal</h3>

                <div className="dressStyleCardSmallImg">
                    <img src={DressStyleCardImg2} alt="Dress Style" />
                </div>
            </div>

        </div>
        <div className="dressStyleCardContainer">
            <div className="dressStyleCardSmall">
                <h3>Party</h3>
                <div className="dressStyleCardSmallImg">
                    <img src={DressStyleCardImg3} alt="Dress Style" />
                </div>
                </div>
                            <div className="dressStyleCardSmall">
                                 <h3>Gym</h3>

                <div className="dressStyleCardSmallImg">
                    <img src={DressStyleCardImg4} alt="Dress Style" />
                </div>
            </div>

        </div>
      </div>
  )
}
