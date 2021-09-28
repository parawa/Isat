
import Login from './views/login/Login'
import Page16 from './components/Page16'
import Page3 from './components/Page3'
import Page51 from './components/Page51'
import Page27 from './components/Page27'
import  './css/style.css'
//  import './css/Page3.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
 
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Page16" component={Page16} />
        <Route exact path="/Page3" component={Page3} />
        <Route exact path="/Page51" component={Page51} />
        <Route exact path="/Page27" component={Page27} />
      </Switch>
      </BrowserRouter>
    );
  
  // render() {
  //   return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  // }
    }
export default App;
