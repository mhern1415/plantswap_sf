import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostFormContainer from './posts/PostFormContainer'
import PostListContainer from './posts/PostListContainer'
import PostList from './posts/PostList'
import PostShow from './posts/PostShow'
import Header from './Header'
import Footer from './Footer'
import PostAllContainer from './posts/PostAllContainer'
import PostDelete from './posts/PostDelete'



const App = () => {
    return (
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={PostListContainer}/>
                <Route path="/posts" exact component={PostListContainer}/>
                <Route path="/posts/new" exact component={PostFormContainer}/>
                <Route path="/posts/all" exact component={PostAllContainer}/>
                <Route path="/posts/:id" exact component={PostShow}/>
                <Route path="/posts/delete" exact component={PostDelete}/>
                </div>
            </BrowserRouter>
        <div>
        <Footer />
        </div>
        </div>
    )
}

export default App;