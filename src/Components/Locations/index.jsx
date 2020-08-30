import React from 'react'
import './index.scss'

export default function Locations({cameras, handleLocationClickProp}) {
    // function handleLocationClick(data) {
    //     console.log(data)
    //     handleLocationClickProp(data)
    // }
    return <div className="Locations">
        {
            cameras.map(camera => (
                <span
                    className="camera"
                    key={camera.camera_id}
                    onClick={e => handleLocationClickProp(camera)}
                    // style={{backgroundImage: `url(${camera.image})`}}
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
                    {/* <img
                        src={camera.image}
                        alt={camera.image_metadata.md5}
                        // style={{width: camera.image_metadata.width+'px', height: camera.image_metadata.height+'px'}}
                    /> */}
                </span>
            ))
        }
    </div>
}