import 'bulmaswatch/nuclear/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list/cell-list';
import './index.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
