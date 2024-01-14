function getShapePerimeter(base, height) {
   
    var perimeter = (base === height) ? 4*(base) : 2*(base + height);
    console.log(`${perimeter} é o perímetro da forma`);

    if (perimeter > 100) {
        console.log("O perímetro é muito grande.");
    } else {
        console.log("O perímetro está bom.");
    }

    return perimeter;
}

const baseShape = 50;
const heightShape = 20;
const resultPerimeter = getShapePerimeter(baseShape, heightShape);