function book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}
