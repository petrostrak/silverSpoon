import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pasta recipe', 'With tomato paste', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg'),
        new Recipe('Punjabi samosa recipe', 'Crisp fried Indian snack', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'),
        new Recipe('Bratwurst recipe', 'In beer with onions', 'https://www.foodiecrush.com/wp-content/uploads/2012/10/Bratwurst-foodiecrush.com-013-500x500.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}