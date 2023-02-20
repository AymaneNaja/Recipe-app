import Nav from "./components/Nav/Nav";


import Home from './components/Home/Home'
import { SearchProvider } from "./Contexts/SearchContext";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
import Recipe from "./components/Recipe/Recipe";
import Footer from "./components/Footer.js/Footer";

function App(){

return (
    <div className="relative recipe-app">
    <Router>
    <SearchProvider>
        <Nav/>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/recipe-app'  element={<Home/>} />
            <Route 
            exact
            path='/search/:query/:searchFor'  element={<SearchResults/>} />
            <Route path='/Recipe/:id' exact element={<Recipe/>} />
        </Routes>
        <Footer/>
    </SearchProvider>
    </Router>
    </div>
    );
}

export default App;
