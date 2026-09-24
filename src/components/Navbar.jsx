import { useState } from "react";
import "./Navbar.css"

const menuItems = [
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Awards", id: "awards" },
    { label: "Talks", id: "talks" },
    { label: "Publications", id: "publications" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-normal box-border">
                        <a href="#bio">Marc Schlichting</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {menuItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="menu-item">
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hamburger-button"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? "×" : "≡"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-gray-700 px-4 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-white hover:text-gray-300 no-underline block"
                            onClick={() => setIsOpen(false)}
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
