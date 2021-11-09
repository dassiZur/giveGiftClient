import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { categoryReducer, greetingCardReducer, userReducer, businessOwnerReducer, giftReducer } from './reducers';
// import { buss..... categoryReducer, greetingCardReducer, userReducer, gifts } from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Header from './components/header/header';
import ExactSerarch from './components/exactSerarch/exactSerarch';
import GreetingCard from './components/greetingCard/greetingCard';
import HomePage from './components/homePage/homePage';
import { Link, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import BusinessOwner from './components/businessOwner/businessOwner'
import HorizontalNonLinearStepper from './components/bussnessOwnerStep/stepOne';
import Entry from './components/entry/entry';
import NewUser from './components/newUser/newUser';
import Stores from './components/stores/stores';
import StoreDetails from './components/stores/storeDetails/storeDetails';
import SubHeader from './components/greetingCard/subHeader/subHeader'
import OneStore from './components/stores/oneStore/oneStore';
import Map from './components/stores/map';
import SerchByCategory from './components/serchByCategory/serchByCategory';
import SerchByCategoryChild from './components/serchByCategoryChild/serchByCategoryChild';
import SerchByCategoryChildFinish from './components/searchByCategoryFinish/searchByCategoryFinish';
import ShareGift from './components/shareGift/shareGift';
import Delete from './components/detailsGitUser/delete';


// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import { Main } from './businessOwnerDetails/main';
const history = createMemoryHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  categoryPart: categoryReducer
  , userPart: userReducer
  , greetingCardPart: greetingCardReducer
  , businessOwnerPart: businessOwnerReducer
  , giftPart: giftReducer
}), composeEnhancers(

  applyMiddleware(thunk))
)

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store} >

      <Menu />
      <App />
      <Router history={history}>
        <Switch>

          <Route path='/About' component={About}></Route>
          <Route path='/entry' component={Entry}></Route>
          <Route path='/newUser' component={NewUser}></Route>
          {/* <Route path='/BusinessOwner' component={BusinessOwner}></Route>  */}
          <Route path='/getStepContent' component={HorizontalNonLinearStepper}></Route>
          {/* <Route path='/ExactSerarch' component={ExactSeragetStepContentrch}></Route> */}
          <Route path='/greetingCard' component={SubHeader}></Route>
          <Route path='/Store' component={Stores}></Route>
          {/* <Route path='/storeDetails/:id' component={StoreDetails}></Route> */}
          <Route path='/Stores/:id' component={OneStore}></Route>
          <Route path='/Logo' exact component={HomePage}></Route>
          <Route path='/greetingCards/:id' component={SubHeader}></Route>
          <Route path='/Stors/Map' component={Map}></Route>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/ChoseCategories' exact component={SerchByCategory}></Route>
          <Route path='/ChoseCategory/:id' exact component={SerchByCategoryChild}></Route>
          <Route path='/ShareGift' exact component={ShareGift}></Route>
          <Route path='/Try' exact component={Delete}></Route>
          <Route path='/ChoseCategoryFinish/:id' exact component={SerchByCategoryChildFinish}></Route>
          {/* <Entry></Entry> */}
          {/* <newUser></newUser> */}
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// element.style {
//   overflow: hidden;
// }