import { Link } from "react-router-dom";

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Training Courses", path: "/training" },
        { name: "Cybersecurity Audit", path: "/cybersecurity-audit" },
        { name: "Cybersecurity Consultancy", path: "/cybersecurity-consultancy" },
        { name: "VAPT", path: "/vapt" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-white">CyberMantra Technologies</h3>
                        <p className="text-white text-lg">
                            Empowering organizations with cutting-edge cybersecurity solutions and expertise.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white text-lg hover:text-[#0dafee] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <p className="text-white text-lg">F-201, Phase-1,</p>
                            <p className="text-white text-lg">New Palam Vihar, Sector-110,</p>
                            <p className="text-white text-lg">Gurugram-122017, Haryana, IN</p>
                            <p>
                                <a
                                    href="mailto:contact@cybermantra.in"
                                    className="text-white text-lg hover:text-[#0dafee] transition-colors duration-300"
                                >
                                    contact@cybermantra.in
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-white">Connect With Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white text-2xl hover:text-[#0dafee] transition-colors duration-300">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-white text-2xl hover:text-[#0dafee] transition-colors duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white text-2xl hover:text-[#0dafee] transition-colors duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/20 text-center">
                    <p className="text-white text-lg">&copy; {new Date().getFullYear()} CyberMantra Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 