import { useState } from "react";
import "./Navbar.css"

function Navbar({ scrollContainer }) {
    const [isOpen, setIsOpen] = useState(false);
    const navbarHeight = 64; // adjust to your navbar's actual height

    // Generic scroll function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        // const container = document.querySelector(".scrollable-container"); // add class to div
        const container = scrollContainer.current;
        const offsetTop = element.offsetTop;
        container.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: "smooth",
        });
    };

    // Menu items
    const menuItems = [
        // { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Education", id: "education" },
        { label: "Awards", id: "awards" },
        { label: "Talks", id: "talks" },
        { label: "Publications", id: "publications" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-bold pl-16 -ml-8 box-border">Marc Schlichting</div>



                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-white hover:text-gray-300 no-underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger Button */}

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hamburger-button"
                        >
                            {isOpen ? "×" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-white hover:text-gray-300 no-underline block"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false); // close menu on click
                                scrollToSection(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}


export default Navbar;


