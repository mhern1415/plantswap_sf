import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostFormContainer from './posts/PostFormContainer'
import PostListContainer from './posts/PostListContainer'
import PostEditContainer from './posts/PostEditContainer'
import PostShow from './posts/PostShow'
import Header from './Header'
import Footer from './Footer'
import PostAllContainer from './posts/PostAllContainer'
import PostDelete from './posts/PostDelete'
import Title from './Title';
import Resources from './Resources';



class App extends React.Component {
    render() {
    return (
        <div className="main">
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Title />
                <Switch>
                <Route path="/" exact component={PostAllContainer}/>
                <Route path="/posts" exact component={PostListContainer}/>
                <Route path="/posts/new" exact component={PostFormContainer}/>
                <Route path="/posts/delete" exact component={PostDelete}/>
                <Route path="/posts/:id" exact component={PostShow}/>
                <Route path ="/edit/:id" exact component={PostEditContainer}/>
                <Route path ="/resources" exact component={Resources}/>
                </Switch>
                </div>
            </BrowserRouter>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div> <Footer /></div>
        </div>
    )
}
}

export default App;