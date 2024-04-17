export default function createSVGImg(importedSVG, assignedClass, assignedID) {
    const svgImage = new Image();
    svgImage.src = importedSVG;
    svgImage.classList.add(assignedClass);
    svgImage.id = assignedID;

    return svgImage;
}
