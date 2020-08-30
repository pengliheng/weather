import React from 'react'
import './index.scss'

export default function Screenshot({src}) {
    return <div className="Screenshot">
        {
            src && <img src={src} alt="screenshot"/>
        }
    </div>
}