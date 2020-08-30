/**
 * acroding to latitude, longitude in cameras and latitude, longitude in weatherForecast to find the most similar location.
 *
 * @export
 * @param {*} cameras
 * @param {*} weatherForecast
 * @returns return the cameras object combine with area and forecast.
 */
export function reserveGeo(cameras, weatherForecast) {
    return cameras.map(cameras => {
        const { latitude, longitude } = cameras.location
        const absArray = weatherForecast.area_metadata.map(area => {
            return Math.abs(latitude - area.label_location.latitude) + Math.abs(longitude - area.label_location.longitude)
        })
        const min = Math.min(...absArray)
        const index = absArray.indexOf(min)
        return Object.assign({}, cameras, {
            area: weatherForecast.area_metadata[index],
            forecast: weatherForecast.items[0].forecasts[index],
        })
    })
}