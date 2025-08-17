console.log('Script is loading...'); // Should appear in console
console.log('React is available:', typeof React !== 'undefined');
console.log('ReactDOM is available:', typeof ReactDOM !== 'undefined');
console.log('Target element exists:', document.getElementById('navbar'));

const Navbar = () => {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    return (
        <nav>
            <ul>
                <li>
                    <a 
                    href="index.html"
                    className={currentPage === 'index.html' ? 'active' : ''}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                    href="about.html"
                    className={currentPage === 'about.html' ? 'active': ''}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                    href="contact.html"
                    className={currentPage === 'contact.html' ? 'active' : ''}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

// Render Navbar to each Page
ReactDOM.render(<Navbar />, document.getElementById('navbar'));