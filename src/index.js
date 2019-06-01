import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isMouseRelatedEvent=(name)=>{
   return  name.includes('mouse')|| name.includes('pointer') || name.includes('wheel')
}

Object.keys(window).forEach(key => {
    if (/^on/.test(key) && !isMouseRelatedEvent(key)) {
        window.addEventListener(key.replace('on',''), event => {
            console.log('window event',key,event);
        });
    }
});

// window.onload=()=>{
//     console.log('windows hack onload')
// }



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
