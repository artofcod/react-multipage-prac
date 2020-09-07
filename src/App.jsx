import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




import Home from './Views/pages/Home';
import About from './Views/pages/about';
import Services from './Views/pages/services';
import Portfolio from './Views/pages/portfolio';
import Team from './Views/pages/team';
import Blog from './Views/pages/Blog/blog';
import BlogSingle from './Views/pages/Blog/blogSingle';
import Contact from './Views/pages/contact';
// import  from './Views/pages';

import Header from './Views/includes/header';
import Footer from './Views/includes/footer';





export default
class  App extends React.Component {
 render(){
  return (

    <Router>
      <div className="App">
        <Header></Header>
        
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/about" component={About}/>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>

          <Route path="/team">
            <Team></Team>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/singleBlog">
            <BlogSingle></BlogSingle>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/">

          </Route>
        </Switch>



     <Footer></Footer>
     <a href='#header' className="back-to-top">
        <i className="icofont-simple-up"></i>
     </a>

      </div>
    </Router >


  )
 }
}


