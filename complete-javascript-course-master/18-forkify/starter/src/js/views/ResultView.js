import View from './View';
import PreviewView from './PreviewView';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes found for your query! Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultView();
