export default function updateSearch(){
    const locationSearchBarElement = document.querySelector("#locationSearchBar");
    const newLocation = locationSearchBarElement.value;

    locationSearchBarElement.value = "";
    return newLocation;
}