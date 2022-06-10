import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <a
          href="https://news.ycombinator.com/newsguidelines.html"
          target="_blank"
        >
          Guidelines
        </a>
        <a href="https://news.ycombinator.com/newsfaq.html" target="_blank">
          FAQ
        </a>
        <a href="https://news.ycombinator.com/lists" target="_blank">
          Lists
        </a>
        <a href="https://github.com/HackerNews/API" target="_blank">
          API
        </a>
        <a href="https://news.ycombinator.com/security.html" target="_blank">
          Security
        </a>
        <a href="http://www.ycombinator.com/legal/" target="_blank">
          Legal
        </a>
        <a href="http://www.ycombinator.com/apply/" target="_blank">
          Apply to YC
        </a>
        <a href="mailto:hn@ycombinator.com" target="_blank">
          Contact
        </a>
      </div>
      <div className="footer-search">
        <form method="get">
          Search: <input type="text" name="query" />
        </form>
      </div>
    </div>
  );
};
export default Footer;
