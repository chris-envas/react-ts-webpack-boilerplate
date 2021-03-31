import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Hello } from './components/Hello';
// import EditorRoutes from "./main/js/EditorRoutes"
import {EditorPage} from "./main/js/EditorPage"
declare let module: any
// const EditorRoutesX: React.FC<any> = EditorRoutes as any;

// ReactDOM.render(<Hello compiler="Typescript" framework="React..." bundler="Webpack" />, 
ReactDOM.render(<EditorPage />, 
document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}