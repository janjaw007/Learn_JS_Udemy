import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/SearchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.jonas.io

///////////////////////////////////////

//make AJAX Request
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    RecipeView.renderSpinner();
    // 1.) Loading Recipe
    await model.loadRecipe(id);

    // 2.) Rendering recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1.) Get Search Query
    const query = SearchView.getQuery();
    if (!query) return;

    // 2.) Load Result From Query
    await model.loadSearchResults(query);

    // 3.) Render REsults
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  //Publisher and Subscriber
  RecipeView.addHandlerRender(controlRecipe);
  SearchView.addHandlerSearch(controlSearchResults);
};

init();
