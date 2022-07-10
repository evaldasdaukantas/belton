import React from 'react'
import './hero.css'
import Button from '../button/button1'
import logoTogether from './image/main/1.avif'


const hero = () => {
  return (
    <div>
        <div className="container hero">
            <div className="row">
                <div className="col-12 text d-flex row gap-5 my-5 justify-content-between alingn-items-center">
                    <div>
                    <h1>Bring people together with great food</h1>
                    </div>
                    <div>
                    <Button />
                    </div>
                </div>
                <div className="col-12 image">
                 <img src={logoTogether} alt="together" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero