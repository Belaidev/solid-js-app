/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './components/App';
import { APP_NAME } from './consts/consts';
import './index.css';

document.title = APP_NAME;
const root = document.getElementById('root');
if (!(root instanceof HTMLElement)) throw new Error('Root element not found.');
render(() => <App />, root);
