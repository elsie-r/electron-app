import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

const root = document.getElementById('app');
ReactDOM.render(<App compiler="TypeScript" framework="React" />, root);
