import * as model from './model.js';
import RecipeView from './views/RecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.jonas.io

///////////////////////////////////////

//make AJAX Request
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

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

const init = function () {
  RecipeView.addHandlerRender(controlRecipe);
};

init();
