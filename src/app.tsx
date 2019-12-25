import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.scss'
function App () {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={() => <span>login</span>} />
                    <Route path='/' component={() => <span>admi2222n</span>} />
                </Switch>
            </BrowserRouter>
            app + webapck ?/?
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))