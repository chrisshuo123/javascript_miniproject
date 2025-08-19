// Navbar Component with React
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MySite</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {/* Level 1 - Home */}
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        
                        {/* Level 1 with dropdown */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown">
                                Products
                            </a>
                            <ul class="dropdown-menu">
                                {/* Level 2 items */}
                                <li><a class="dropdown-item" href="#">Electronics</a></li>
                                
                                {/* Level 2 with submenu */}
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item" href="#">Clothing</a>
                                    <ul class="dropdown-menu">
                                        {/* Level 3 items */}
                                        <li><a class="dropdown-item" href="#">Men's</a></li>
                                        <li><a class="dropdown-item" href="#">Women's</a></li>
                                        <li><a class="dropdown-item" href="#">Kids</a></li>
                                    </ul>
                                </li>
                                
                                <li><a class="dropdown-item" href="#">Furniture</a></li>
                            </ul>
                        </li>
                        
                        {/* Another Level 1 with dropdown */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                {/* Level 2 items */}
                                <li><a class="dropdown-item" href="#">Consulting</a></li>
                                
                                {/* Level 2 with submenu */}
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Training</a>
                                    <ul class="dropdown-menu">
                                        {/* Level 3 items */}
                                        <li><a class="dropdown-item" href="#">Web Development</a></li>
                                        <li><a class="dropdown-item" href="#">Data Science</a></li>
                                        <li><a class="dropdown-item" href="#">Cloud Computing</a></li>
                                    </ul>
                                </li>
                                
                                <li><a class="dropdown-item" href="#">Support</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Render Navbar
ReactDOM.render(<Navbar />, document.getElementById('navbar-root'));

// Initialize after React renders
setTimeout(() => {
    // Your existing navbar.js code goes here, but with modifications
    initializeNavbarFunctionality();
}, 100);

function initializeNavbarFunctionality() {
    // Initialize Bootstrap dropdowns
    const dropdownToggles = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
    const dropdowns = dropdownToggles.map(function(el) {
        return new bootstrap.Dropdown(el);
    });

    // Desktop hover behavior
    if (window.innerWidth >= 992) {
        document.querySelectorAll('.dropdown-submenu').forEach(function(item) {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-menu').classList.add('show');
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    }
    
    // Mobile dropdown handling
    document.querySelectorAll('.dropdown-submenu > a').forEach(function(item) {
        item.addEventListener('click', function(e) {
            // Desktop hover behavior
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();

                const submenu = this.nextElementSibling;
                const isShowing = submenu.classList.contains('show');

                // Close all other submenus at the same level
                const parentMenu = this.closest('.dropdown-menu');
                if(parentMenu) {
                    parentMenu.querySelectorAll('.dropdown-submenu > .dropdown-menu')
                        .forEach(menu => {
                            if(menu !== submenu) menu.classList.remove('show');
                        });
                }

                // Toggle current dropdown
                submenu.classList.toggle('show');
                this.setAttribute('aria-expanded', !isShowing);
            }
        });
    });

    // Close all menus when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            // Check if click is outside navbar or on non-menu item
            if(!e.target.closest('.navbar-nav') &&
               !e.target.classList.contains('navbar-toggler')) {
                
                // Close navbar collapse
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if(navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }

                // Close all dropdown menus
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });

                // Reset toggle states
                document.querySelectorAll('[aria-expanded="true"]').forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'false');
                });
            }
        }
    });

    // Add active class to current page
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.ref === window.location.href) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Add active class to current page
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if(window.innerWidth >= 992) {
        // Reset all submenus when switching to desktop
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        }); 
        document.querySelectorAll('[aria-expanded="true"]').forEach(toggle => {
            toggle.setAttribute('aria-expanded', 'false');
        });
    }
});
