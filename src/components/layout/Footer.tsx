import { Link } from "react-router-dom";

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Training Courses", path: "/training-courses" },
        { name: "Cybersecurity Audit", path: "/cyber-security-audit" },
        { name: "Cybersecurity Consultancy", path: "/cybersecurity-consultancy" },
        { name: "VAPT Services", path: "/vapt-services" },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium max-sm:text-lg text-white">CyberMantra Technologies</h3>
                        <p className="text-white/80 max-sm:text-sm text-[1rem]">
                            Empowering organizations with cutting-edge cybersecurity solutions and expertise.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-9">
                        <div className="space-y-4">
                            <h3 className="text-2xl max-sm:text-lg font-medium text-white">Quick Links</h3>
                            <ul className="space-y-4">
                                {quickLinks.slice(0, 3).map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-white/80 max-sm:text-sm  hover:text-[#0dafee] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl max-sm:text-lg font-medium text-white">Quick Links</h3>
                            <ul className="space-y-4">
                                {quickLinks.slice(3).map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-white/80 max-sm:text-sm hover:text-[#0dafee] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl max-sm:text-lg font-medium text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <p className="text-white/80 max-sm:text-sm text-[1rem]">F-201, Phase-1,</p>
                            <p className="text-white/80 max-sm:text-sm text-[1rem]">New Palam Vihar, Sector-110,</p>
                            <p className="text-white/80 max-sm:text-sm text-[1rem]">Gurugram-122017, Haryana, IN</p>
                            <div className="flex md:flex-col lg:flex-row text-white/80 max-sm:text-sm space-x-1">
                                <p className="text-[#0dafee] text-[1rem] max-sm:text-sm">Email :</p>
                                <a
                                    href="mailto:contact@cybermantra.in"
                                    className="text-white/80 text-[1rem] max-sm:text-sm hover:text-[#0dafee] transition-colors duration-300"
                                >
                                    contact@cybermantra.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links
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
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/20 text-center">
                    <p className="text-white/50 max-sm:text-normal text-lg">&copy; {new Date().getFullYear()} CyberMantra Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;