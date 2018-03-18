import '../css/index.css';
import data from './teachers.json';

// React
import React from 'react';
import { render } from 'react-dom';

// Components
import Teachers from './components/teachers';
import Header from './components/header';

const headerContainer = document.getElementById('header');
render(<Header />, headerContainer);

const teacherContainer = document.getElementById('teachers');
render(<Teachers teachers={data.teachers}/>, teacherContainer);
