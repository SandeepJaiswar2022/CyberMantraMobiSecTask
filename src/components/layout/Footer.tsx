import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">CyberMantra</h3>
                        <p className="text-gray-400">
                            Empowering the future through technology and innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@cybermantra.com</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Address: 123 Tech Street, Digital City</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} CyberMantra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 