import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/routes';
import { Fragment } from 'react/jsx-runtime';
import NavigationBar from './components/navbar';


function App() {
 
   
  return (
    <Fragment>
      <BrowserRouter>
      <NavigationBar />
      <RoutesComponent />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
