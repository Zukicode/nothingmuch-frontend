import ReactDOM from 'react-dom/client';

//Style
import '@/styles/global.scss';

//Application
import { App } from '@/components/App/App';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
