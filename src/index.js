import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from './reducer';

ReactDom.render(
       <DataLayer 
          initialState={initialState}
          reducer={reducer}
       >
            <App/>
       </DataLayer>
,document.getElementById('root'));