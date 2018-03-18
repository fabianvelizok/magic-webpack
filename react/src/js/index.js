import '../css/index.css';

import platziImage from '../images/platzi.png';

/* import render from './render'; */
import makeImage from './makeImage';
import data from './teachers.json';

// React
import React from 'react';
import { render } from 'react-dom';

import Teachers from './components/teachers';

const container = document.getElementById('teachers');
render(<Teachers teachers={data.teachers}/>, container);

/* const img = makeImage(platziImage);
render(img); */
