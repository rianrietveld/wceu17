var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var MyTabs = require('./MyTabs');
var A11yTabs = require('./A11yTabs');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />

                    <Switch>
                        <Route exact path='/wceu17/wceu-app/build/' component={Home} />
                        <Route exact path='/wceu17/wceu-app/build/mytabs' component={MyTabs} />
                        <Route exact path='/wceu17/wceu-app/build/a11ytabs' component={A11yTabs} />
                        <Route render={function () {
                            return <p>The menu item doesn't exist.</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
