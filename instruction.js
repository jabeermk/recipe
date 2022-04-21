

let headIngredient2 = React.createElement("h1", null,"Instructions");

const recipeComponents1 = (itm) =>
{
    return React.createElement("ul", null, itm.map((item,i) =>
    {
        return React.createElement("li", {key:i}, item);
    }))
}

const instructionDiv = React.createElement("div", null,headIngredient2, recipeComponents1(instructions));