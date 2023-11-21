import React from 'react'
import { DotWave } from '@uiball/loaders'
import "./Loader.css"

const Loader = () => {
    return (
        <div className='loader'>
            <DotWave
                size={47}
                speed={0.8}
                color="black"
            />
        </div>
    )
}

export default Loader