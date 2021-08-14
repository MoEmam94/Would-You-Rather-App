import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
// import NewTweet from './NewTweet'
// import TweetPage from './TweetPage'
// import Nav from './Nav'

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData())
  })
  return (
    <Router>
    <Fragment>
      <LoadingBar />
      <div className='container'>
        {/* <Nav /> */}
        {props.loading === true
          ? null
          : <div>
              {/* <Route path='/' exact component={Dashboard} />
              <Route path='/tweet/:id' component={TweetPage} />
              <Route path='/new' component={NewTweet} /> */}
              Hello World!
            </div>}
      </div>
    </Fragment>
  </Router>
  )
}

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null })



export default connect(mapStateToProps)(App)