# react-instagram-clone

## Routes

第一步：观察路由，根据路由反推项目结构

- `/ (feed page)`
  - Components:
    - FeedPost
    - FeedPostSkeleton
    - FeedSideSuggestions
- `/explore` (explore page)
  - Components:
    - ExploreGrid
    - ExploreSuggestions
- `/p/:postId`
  - Components:
    - Post
    - PostModal
    - MorePostsFromUser
- `/notifications`
  - Components:
    - NotificationList
    - NotificationTooltip
- `/:username` (profile page)
  - Components:
    - prfileTabs
- `/acounts/edit` (edit profile page)
- `/accounts/login` (login page)
- `/accounts/emailsignup` (signup page)
- `* (not found page)`

## Shared Components

抽离项目可以公共的组件

- NavBar
- FollowSuggestions
- FollowButton
- UserCard
- LoadingScreen
- OptionsDialog
- ProfilePicture
- Layouts
- SEO

## 定义项目结构

- tree preview

```bash
.
├── App.js
├── components
│   ├── explore
│   │   ├── ExploreGrid.js
│   │   └── ExploreSuggestions.js
│   ├── feed
│   │   ├── FeedPost.js
│   │   ├── FeedPostSkeleton.js
│   │   └── FeedSideSuggestions.js
│   ├── notification
│   │   ├── NotificationList.js
│   │   └── NotificationTooltip.js
│   ├── post
│   │   ├── MorePostsFromUser.js
│   │   ├── Post.js
│   │   ├── PostModal.js
│   │   └── PostSkeleton.js
│   ├── profile
│   │   └── ProfileTabs.js
│   └── shared
│       ├── FollowButton.js
│       ├── FollowSuggestions.js
│       ├── GridPost.js
│       ├── Layout.js
│       ├── LoadingScreen.js
│       ├── Navbar.js
│       ├── OptionsDialog.js
│       ├── ProfilePicture.js
│       ├── Seo.js
│       └── UserCard.js
├── data.js
├── icons.js
├── images
│   ├── default-user-image.jpg
│   ├── facebook-icon-blue.svg
│   ├── facebook-icon-white.png
│   ├── icon-sheet-2.png
│   ├── icon-sheet.png
│   └── logo.png
├── index.js
├── pages
│   ├── edit-profile.js
│   ├── explore.js
│   ├── feed.js
│   ├── login.js
│   ├── not-found.js
│   ├── post.js
│   ├── profile.js
│   └── signup.js
├── styles.js
└── theme.js

9 directories, 42 files
```

## 定义路由

- 温习：拦截了 `history` 后，自顶向下查找匹配的组件，以 `Switch` 方式切换，如果首页和带 `:` 详页路由记得加 `exact`，要不然就进行不下去了，最后惯例来个 `notfound`。
- 其实后期可以来异步组件 `lazy、Suspense` 搞一下。

```js
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
```

## Notes

- Layout 组件
  - 血统超级正的classes命名方式
  - marginTop 这个有意思，竟然和我当年封装GatsbyJS的layout一模一样，默认值满足过半的情况。

```js
function Layout({ children, title, marginTop = 60 }) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>
            {children}
          </div>
        </section>
      </main>
    </section>
  )
}
```

- `CSR` 如何搞 `SEO`
  - 答案就是 `react-helmet`

```js
function SEO({ title }) {
  const titleText = title ? `${title} - Instagram` : 'Instagram'
  return (
    <Helmet>
      <title>{titleText}</title>
      {/* <meta></meta> */}
    </Helmet>
  );
}
```
