import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Search, FileSearch, FileCheck, RefreshCcw } from "lucide-react";

const VAPTServices = () => {
    const services = [
        {
            title: "Web Application Testing",
            description: "Identify weaknesses in your web platforms, including OWASP Top 10 vulnerabilities.",
            icon: <Shield className="w-12 h-12 text-primary" />,
        },
        {
            title: "Mobile Application Testing",
            description: "Secure your Android and iOS applications against malicious threats and data breaches.",
            icon: <Search className="w-12 h-12 text-primary" />,
        },
        {
            title: "Executable Testing",
            description: "Ensure standalone software is free of exploitable vulnerabilities, preventing potential malware injection.",
            icon: <FileSearch className="w-12 h-12 text-primary" />,
        },
    ];

    const process = [
        {
            step: 1,
            title: "Reconnaissance",
            description: "Gather information about your systems and potential attack surfaces.",
        },
        {
            step: 2,
            title: "Scanning",
            description: "Use automated tools to identify vulnerabilities.",
        },
        {
            step: 3,
            title: "Exploitation",
            description: "Conduct manual testing to attempt exploitation of discovered vulnerabilities.",
        },
        {
            step: 4,
            title: "Reporting",
            description: "Deliver a comprehensive report with risk prioritization and remediation steps.",
        },
        {
            step: 5,
            title: "Retesting",
            description: "Verify that identified vulnerabilities have been successfully patched.",
        },
    ];

    const features = [
        {
            title: "Advanced Tools",
            description: "We use industry-leading tools and techniques for accurate assessments.",
        },
        {
            title: "Certified Experts",
            description: "Our team includes experienced and certified penetration testers.",
        },
        {
            title: "Detailed Reporting",
            description: "Comprehensive reports with risk prioritization and remediation guidance.",
        },
        {
            title: "Proactive Defence",
            description: "Strengthen your defences before attackers can exploit weaknesses.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-fit bg-gray-100 py-20">
                <div className="my-container  mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-heading text-[#0dafee]"
                            >
                                Vulnerability Assessment and Penetration Testing (VAPT)
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-subheading font-semibold text-gray-600"
                            >
                                Our VAPT services are designed to identify vulnerabilities in your digital assets and simulate real-world attacks to test your defences. From web applications to mobile apps and executables, we ensure your systems are secure.
                            </motion.p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="w-full h-[300px]  bg-gray-100 rounded-lg ">
                                {/* <p className="text-gray-500">Security Illustration Placeholder</p> */}
                                <img src="vapt2.png" alt="VAPT Illustration" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-container">
                {/* Services Section */}
                <section className="py-16 bg-white">
                    <div className="container space-y-24 mx-auto px-4">
                        <div>
                            <div className="container mx-auto px-4">
                                <h2 className="section-heading text-center">Our VAPT Services Include</h2>
                                <div className="flex justify-center items-center gap-2 mb-8">
                                    <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                    <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="mb-4">{service.icon}</div>
                                        <h3 className="text-lg font-medium leading-none mb-3">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center space-y-4 mt-8">
                            <p className="text-2xl italic">Secure your applications and infrastructure with our VAPT services.</p>
                            <Button size="lg" className="bg-[#0dafee] hover:bg-[#2098c8]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 overflow-hidden">
                    <div className="container mx-auto px-4 space-y-20">
                        <div className="container mx-auto px-4">
                            <h2 className="section-heading text-center">Our Process</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-1/2 h-full w-1 bg-primary/20 transform -translate-x-1/2 md:block hidden"></div>
                            <div className="space-y-12">
                                {process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                            }`}
                                    >
                                        <div className="flex-1 flex gap-3 md:text-left">
                                            <div className=" bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                                {step.step}

                                            </div>
                                            <div className="pt-3">
                                                <h3 className="text-lg font-medium leading-none mb-2">{step.title}</h3>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
                                                {/* <p className="text-gray-500">Process Step {step.step} Illustration</p> */}
                                                <p className="text-gray-800 text-center">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="container mx-auto px-4">
                            <h2 className="section-heading text-center">Why CyberMantra for VAPT?</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VAPTServices; 