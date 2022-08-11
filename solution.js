//1.
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for(item of board){
console.log(item)
for(item2 of item){
console.log(item2)
}
}

//2.
doggo = {name: 'Ramzi', breed: 'Kanisch', "favorite foods": ['batata', 'burger'],
printFavoriteFoods(){
for(food of doggo["favorite foods"])
console.log(food);
}
};


console.log('2.3',doggo["favorite foods"][1]);
doggo.printFavoriteFoods();

//3.
recipes = {ingredients: {"butter": "1", "sugar": "2", "flour": "3"},
printIngredients(){
for(ingredient in this.ingredients)
console.log(ingredient);
}
}
recipes.ingredients.ginger = "4";
recipes["ingredients"]["brown sugar"] = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
recipes.printIngredients();
