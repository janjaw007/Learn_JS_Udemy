import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/SearchView.js';
import ResultView from './views/ResultView.js';
import PaginationView from './views/PaginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.jonas.io

///////////////////////////////////////

//make AJAX Request
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner();
    // 0.) Update result view to mark selected search result
    ResultView.update(model.getSearchResultsPage());

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
    ResultView.renderSpinner();

    // 1.) Get Search Query
    const query = SearchView.getQuery();
    if (!query) return;

    // 2.) Load Result From Query
    await model.loadSearchResults(query);

    // 3.) Render Results
    ResultView.render(model.getSearchResultsPage());

    // 4.) Render initial pagination button
    PaginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // 1.) Render Results
  ResultView.render(model.getSearchResultsPage(goToPage));
  // 2.) Render initial pagination button
  PaginationView.render(model.state.search);
};

const controlServings = function (newServing) {
  // Update the recipe servings (in state)
  model.updateServings(newServing);
  // Update the recipe view
  // 2.) Rendering recipe
  // RecipeView.render(model.state.recipe);
  RecipeView.update(model.state.recipe);
};

const init = function () {
  //Publisher and Subscriber
  RecipeView.addHandlerRender(controlRecipe);
  RecipeView.addHandlerUpdateServing(controlServings);
  SearchView.addHandlerSearch(controlSearchResults);
  PaginationView.addHandlerClick(controlPagination);
};

init();
