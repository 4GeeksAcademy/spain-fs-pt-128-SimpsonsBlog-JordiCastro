export const getCharacters = async (dispatch) => {
    const response = await fetch("https://thesimpsonsapi.com/api/characters")
    if (!response.ok) {
        console.log("Error al cargar los personajes");
        return
    }
    const data = await response.json()
    dispatch({type: "set_characters", payload: data.results})
}

export const getLocations = async (dispatch) => {
    const response = await fetch("https://thesimpsonsapi.com/api/locations")
    if (!response.ok) {
        console.log("Error al cargar las localizaciones");
        return
    }
    const data = await response.json()
    dispatch({type: "set_locations", payload: data.results})
}