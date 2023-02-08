import { helloWorld } from './components/component.js'

// Bootstrap
import './styles.scss'
import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover } from 'bootstrap';

window.jQuery = window.$ = $

console.log('I am main.js');
helloWorld();