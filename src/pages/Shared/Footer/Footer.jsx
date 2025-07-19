import logo from '../../../../public/weblogo.png';

const Footer = () => {
    return (
        <footer className="bg-pink-950 text-white pt-10 pb-6 px-6 mt-10">

            {/* Logo Centered */}
            <div className="flex flex-col items-center justify-center mb-8 text-center">
                <img className="h-16 w-auto mb-2" src={logo} alt="Elara Library Logo" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl from-neutral-300 m-2 italic font-bold font-poppins tracking-wide">
                    Elara Library
                </h1>
                <p className="mt-2 text-sm max-w-md text-gray-300 mx-auto">
                    A gateway to knowledge, creativity, and community. Explore thousands of books, attend events, and connect with like-minded readers.
                </p>

            </div>

            {/* Grid Sections */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center md:text-left">

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Book Catalog</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Library Card</a></li>
                        <li><a href="#">Search Database</a></li>
                        <li><a href="#">Borrowing Rules</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Upcoming Events</a></li>
                        <li><a href="#">Research Help</a></li>
                        <li><a href="#">Reading Rooms</a></li>
                        <li><a href="#">Digital Library</a></li>
                        <li><a href="#">Study Guides</a></li>
                    </ul>
                </div>

                {/* Community */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Community</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Reading Clubs</a></li>
                        <li><a href="#">Workshops</a></li>
                        <li><a href="#">Support Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Stay Connected */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
                © 2023 Elara Library. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
