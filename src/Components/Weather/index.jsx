import React from 'react'
import './index.scss'

export default function Weather({data}) {
    return <div className="Weather">
        <p>
        area: {data.area}
        </p>
        <p>
        forecast: {data.forecast}
        </p>
    </div>
}