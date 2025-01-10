// import { async } from 'regenerator-runtime';
import { API_URL, PAGE_SIZE } from './config.js';
import { getJSON } from './helper.js';
// export data from model
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: PAGE_SIZE,
    page: 1,
  },
};

// fetch data from API
export const loadRecipe = async function (id) {
  //Bussiness Logic
  try {
    // 1.) Loading Recipe
    const data = await getJSON(`${API_URL}${id}`);
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
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (error) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = Number(page);
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};
