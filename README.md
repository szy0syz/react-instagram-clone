# react-instagram-clone

## Routes

第一步：观察路由，根据路由反推项目结构

- `/ (feed page)`
  - Components:
    - FeedPost
    - FeedPostSkeleton
    - FeedSideSuggestions
- /explore (explore page)
  - Components:
    - ExploreGrid
    - ExploreSuggestions
- /p/:postId
  - Components:
    - Post
    - PostModal
    - MorePostsFromUser
- /notifications
  - Components:
    - NotificationList
    - NotificationTooltip
- /:username (profile page)
  - Components:
    - prfileTabs
- /acounts/edit (edit profile page)
- /accounts/login (login page)
- /accounts/emailsignup (signup page)
- * (not found page)

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

