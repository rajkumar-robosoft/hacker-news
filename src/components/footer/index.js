import './style.css';

const Footer = () => {
    return (
        <div className='footer'>

                <div className="footer-menu">
                <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
                <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
                <a href="https://news.ycombinator.com/lists">Lists</a>
                <a href="https://github.com/HackerNews/API">API</a>
                <a href="https://news.ycombinator.com/security.html">Security</a>
                <a href="http://www.ycombinator.com/legal/">Legal</a>
                <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                <a href="mailto:hn@ycombinator.com">Contact</a>
                </div>
               <div className='footer-search'>
               <form method="get" >
                    Search: <input type="text" name="query" />
                </form>
               </div>
                
          
        </div>
    )
}
export default Footer;