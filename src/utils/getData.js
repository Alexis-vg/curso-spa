const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiUrl= id ? `${API}${id}`: API;
    try {
        const response = await fetch(apiUrl);
        const responseJson = await response.json()
        return responseJson

    } catch (error) {
        console.log("fetch error", error)
    }
}
export default getData