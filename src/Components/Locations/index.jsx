import React from 'react'
import './index.scss'

export default function Locations({cameras, handleLocationClickProp}) {
    return <div className="Locations">
        {
            cameras.map(camera => (
                <span
                    className="camera"
                    key={camera.camera_id}
                    onClick={e => handleLocationClickProp(camera)}
                >
                    <span>
                        area: {camera.forecast.area}
                    </span>
                    {/* <span>
                        forecast: {camera.forecast.forecast}
                    </span> */}
                    <span>
                        latitude: {camera.location.latitude}
                    </span>
                    <span>
                        longitude: {camera.location.longitude}
                    </span>
                </span>
            ))
        }
    </div>
}