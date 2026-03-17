import Icon from '@mdi/react'
import {mdiWeatherCloudy} from '@mdi/js'

function LogoComponent() {
    return(
        <div className='app-logo'>
            <Icon path={mdiWeatherCloudy} size={0.8} />
            <h2 style={{fontWeight:"bold"}}>MyWeather</h2>
         </div>
    )
}

export default LogoComponent