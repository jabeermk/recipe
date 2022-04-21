let headIngredient1 = React.createElement("h1", null,"Baked Salmon");
let headIngredient = React.createElement("h1", null,"Ingredients");

const recipeComponents2 = (itm) =>
{
    return React.createElement("ul", null, itm.map((item,i) =>
    {
        return React.createElement("li", {key:i}, item);
    }))
}

const ingredientDiv = React.createElement("div", null,headIngredient1, headIngredient, recipeComponents2(items));

