/* 
•	To create a React Project run the command line:
npx create-react-app <projectName>

OR if project files already given simply --> npm install 
to install all dependencies including REACT 

•	To run the project: npm start 

NOTE: once you made code changings the html page will update automatically at "localhost:3000"

Will be using "Material UI" npm package for icons use --> npm install @mui/icons-material
https://mui.com/getting-started/installation/
https://mui.com/components/icons/

*/

import React from "react"; 
import ReactDom from "react-dom";
import App from "./components/App"; //importing a React component

ReactDom.render(
    <App />, document.getElementById("root")
);

