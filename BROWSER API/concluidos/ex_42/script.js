document.addEventListener("DOMContentLoaded", function () {
    const imagesArray = ["batmanwb.png", "flashwb.png", "supermanwb.png", "wonder_womanwb.png"];

    imagesArray.forEach(function (imageName) {
        const imgElement = document.createElement("img");
        imgElement.src = "img/" + imageName;

        imgElement.addEventListener("mouseenter", function () {
            imgElement.src = "img/" + imageName.replace("wb", "");
        });

        imgElement.addEventListener("mouseleave", function () {
            imgElement.src = "img/" + imageName;
        });

        imgElement.addEventListener("click", function () {
            alert(imageName.split(".")[0].toUpperCase());
        });

        document.body.appendChild(imgElement);
    });
});
