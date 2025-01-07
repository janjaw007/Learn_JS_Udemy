import { API_URL } from './config.js';
import { getJSON } from './helper.js';
// export data from model
export const state = {
  recipe: {},
};

// fetch data from API
export const loadRecipe = async function (id) {
  //Bussiness Logic
  try {
    // 1.) Loading Recipe
    const data = await getJSON(`${API_URL}/${id}`);
    // reformat respone
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (error) {
    throw error;
  }
};
