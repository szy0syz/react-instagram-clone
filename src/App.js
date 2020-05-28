import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/edit-profile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/not-found';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FeedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/:username" exact component={ProfilePage} />
        <Route path="/p/:postId" exact component={PostPage} />
        <Route path="/account/edit" component={EditProfilePage} />
        <Route path="/account/login" component={LoginPage} />
        <Route path="/account/signup" component={SignUpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
