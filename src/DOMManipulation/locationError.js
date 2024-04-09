
export default function locationErrorNotification(err){
    const mainContentElement = document.createElement("div");

    mainContentElement.id = "mainContent";
    mainContentElement.textContent = "Oops! Please use a valid location";
    return mainContentElement;

}