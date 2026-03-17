import Icon from '@mdi/react'
import {mdiMagnify} from '@mdi/js'

function SearchBar({city, setCity, getWeather}){
  return(
    <form
      className="search-box"
      onSubmit={(e) => {
        e.preventDefault()
        getWeather()
      }}
    >
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" className="search-button">
        <Icon path={mdiMagnify} size={0.8} className="search-icon" />
      </button>
    </form>
  )
}

export default SearchBar