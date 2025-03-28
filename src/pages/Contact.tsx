import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1920"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-black/70" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl px-4"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl text-white">
                            Have questions about our cybersecurity services? We're here to help.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="my-container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        {...fadeInUp}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-medium mb-8 text-[#0dafee]">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#0dafee]/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-900">Email</h3>
                                        <p className="text-gray-600">contact@cybermantra.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#0dafee]/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+91 8000000000</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#0dafee]/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-900">Address</h3>
                                        <p className="text-gray-600">
                                            F-201, Phase-1, New Palam Vihar, Sector-110, Gurugram-122017, Haryana, IN
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#0dafee]/10 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-900">Business Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-medium mb-8 text-[#0dafee]">Follow Us</h2>
                            <div className="flex space-x-6">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className="bg-[#0dafee]/10 p-3 rounded-lg hover:bg-[#0dafee]/20 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-[#0dafee]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    className="bg-[#0dafee]/10 p-3 rounded-lg hover:bg-[#0dafee]/20 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-[#0dafee]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="bg-[#0dafee]/10 p-3 rounded-lg hover:bg-[#0dafee]/20 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-[#0dafee]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        {...fadeInUp}
                        className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-medium mb-8 text-[#0dafee]">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0dafee] focus:border-transparent text-gray-900 placeholder-gray-400 outline-none"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0dafee] focus:border-transparent text-gray-900 placeholder-gray-400 outline-none"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0dafee] focus:border-transparent text-gray-900 placeholder-gray-400 outline-none"
                                    placeholder="Message subject"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0dafee] focus:border-transparent text-gray-900 placeholder-gray-400 outline-none"
                                    placeholder="Your message"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#0dafee] hover:bg-[#2483a8] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 