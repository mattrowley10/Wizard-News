const timeAgo = require('node-time-ago')
const postDetails = (post) => {
    const html = `
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>Wizard News</header>
          <div class='news-item'>
            <p>
              <span class="news-position">${post.id}. ▲</span>
              ${post.title}
              <small>(by ${post.name})</small>
            </p>
              <small class="news-info">
              ${post.upvotes} upvotes | ${timeAgo(post.date)}
              </small>
          </div>
        </div>
      </body>
    </html>`;

    return html
}
module.exports = postDetails