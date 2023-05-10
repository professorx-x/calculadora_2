import React from 'react';
import ReactDom from 'react-dom/client';

import './css/index.css';
import './css/body_calc.css';

import Display from './componentes/display';
import GroupBotton from './componentes/group_botton';

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<div className="body_calc"> <Display str="0" /> <GroupBotton /> </div>);
