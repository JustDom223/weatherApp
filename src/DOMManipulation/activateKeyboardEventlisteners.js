export default function addKeyEvents(){
    document.querySelector("#locationSearchBar").addEventListener("keypress",(event) => {
        if (event.key === "Enter"){
            document.getElementById("weatherUpdate").click();
        }
    });
}