import { Card, CardContent } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { Shield, Search, FileSearch, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMeasure from "react-use-measure";

const VAPTServices = () => {
    const services = [
        {
            title: "Web Application Testing",
            description: "Identify weaknesses in your web platforms, including OWASP Top 10 vulnerabilities.",
            icon: <Shield className="w-8 h-8" />,
            bgColor: "bg-blue-500"
        },
        {
            title: "Mobile Application Testing",
            description: "Secure your Android and iOS applications against malicious threats and data breaches.",
            icon: <Search className="w-8 h-8" />,
            bgColor: "bg-yellow-500"
        },
        {
            title: "Executable Testing",
            description: "Ensure standalone software is free of exploitable vulnerabilities, preventing potential malware injection.",
            icon: <FileSearch className="w-8 h-8" />,
            bgColor: "bg-green-500"
        },
    ];

    const process = [
        {
            step: 1,
            title: "Reconnaissance",
            subTitle: "Gather information about your systems and potential attack surfaces.",
            description: "In this initial phase, we collect valuable information about your systems, network architecture, and potential attack surfaces through open-source intelligence (OSINT) and other passive methods. This helps us map out the security landscape before proceeding."
        },
        {
            step: 2,
            title: "Scanning",
            subTitle: "Use automated tools to identify vulnerabilities.",
            description: "Automated and manual scanning techniques are employed to detect security flaws, misconfigurations, open ports, outdated software, and other vulnerabilities across your infrastructure and applications."
        },
        {
            step: 3,
            title: "Exploitation",
            subTitle: "Conduct manual testing to attempt exploitation of discovered vulnerabilities.",
            description: "We conduct controlled manual testing to safely exploit the identified vulnerabilities. This step helps verify the actual impact and potential damage that an attacker could inflict, ensuring realistic and actionable results."
        },
        {
            step: 4,
            title: "Reporting",
            subTitle: "Deliver a comprehensive report with risk prioritization and remediation steps.",
            description: "A detailed report is prepared, highlighting all findings, risk ratings, proof-of-concept evidence, and tailored recommendations. This report aids your team in understanding the security posture and the necessary steps for remediation."
        },
        {
            step: 5,
            title: "Retesting",
            subTitle: "Verify that identified vulnerabilities have been successfully patched.",
            description: "After your team has implemented the recommended fixes, we perform a thorough retest to ensure that all previously identified vulnerabilities have been properly mitigated and no new issues have been introduced."
        }
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

    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const SLOW_DURATION = 200;
    const FAST_DURATION = 20;
    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            });
        }
        else {
            controls = animate(xTranslation, [0, finalPosition], {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: `loop`,
                repeatDelay: 0,
            })
        }

        return controls?.stop;
    }, [xTranslation, width, duration, rerender]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[32rem] lg:min-h-[36rem] md:min-h-[30rem] max-sm:min-h-[22rem] overflow-hidden">
                {/* Background Image with Responsive Sizes */}
                <picture className="absolute inset-0">
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920"
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1024"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=640"
                        alt="Security Testing and Analysis"
                        className="w-full h-full object-cover"
                    />
                </picture>

                {/* Content */}
                <div className="relative px-4 py-24 lg:py-28 md:py-20 max-sm:py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white mb-6 text-heading lg:text-5xl md:text-4xl max-sm:text-2xl"
                        >
                            Vulnerability Assessment and Penetration Testing (VAPT)
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 leading-relaxed lg:text-xl md:text-lg max-sm:text-base max-w-2xl mx-auto"
                        >
                            Comprehensive security testing services to identify and address vulnerabilities in your systems.
                            Our expert team provides detailed assessments and actionable recommendations.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="my-container">
                {/* Services Section */}
                <section className="py-16 bg-white">
                    <div className="container space-y-24 mx-auto">
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
                                        <div className={`${service.bgColor} text-white  p-4 rounded-full w-fit mb-6`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-medium leading-none mb-3">{service.title}</h3>
                                        <p className="text-gray-600 text-[1rem]">{service.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center space-y-8">
                            <p className="text-2xl italic">Secure your applications and infrastructure with our VAPT services.</p>
                            {/* Enroll Now Button */}
                            <Link to={`/contact`} className="">
                                <motion.div

                                    className="inline-flex mt-4 items-center gap-2 bg-[#0dafee] hover:bg-[#2098c8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0dafee]/20"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Learn More
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 overflow-hidden">
                    <div className="container mx-auto  space-y-20">
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
                                            <div className="bg-primary text-white text-2xl font-bold rounded-full max-sm:w-8 max-sm:h-8 p-5 w-12 h-12 flex items-center justify-center mb-4">
                                                {step.step}

                                            </div>
                                            <div className="pt-3">
                                                <h3 className="text-xl font-bold leading-none mb-2">{step.title}</h3>
                                                <h3 className="text-[1rem] text-gray-600 leading-none mb-2">{step.subTitle}</h3>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center flex-col gap-4 justify-center">
                                                {/* <p className="text-gray-900">Process Step {step.step} Illustration</p> */}
                                                <p className="text-gray-800 px-2 text-[1rem] text-center">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Why Choose Us Section */}
                <section className="space-y-6 py-16">
                    <div className="container mx-auto">
                        <h2 className="section-heading text-center">Why CyberMantra for VAPT?</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="left-0 mb-16 relative lg:mx-7 overflow-x-clip h-max">
                        <motion.div
                            ref={ref}
                            className="flex gap-6"
                            style={{ x: xTranslation, display: "flex", width: "max-content" }}
                            onHoverStart={() => {
                                setMustFinish(true);
                                setDuration(SLOW_DURATION);
                            }}
                            onHoverEnd={() => {
                                setMustFinish(true);
                                setDuration(FAST_DURATION);
                            }}
                        >
                            {[...features, ...features].map((reason, index) => (
                                <Card
                                    key={index}
                                    className="w-[280px] cursor-pointer flex-shrink-0 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#0dafee] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">{reason.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VAPTServices; 