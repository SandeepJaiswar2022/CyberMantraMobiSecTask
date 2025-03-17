import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const CybersecurityAudit = () => {
    const keyAreas = [
        {
            title: "Endpoint Auditing and Security",
            description: "Continuous evaluation and monitoring of cross-platform endpoints.",
        },
        {
            title: "Application Security",
            description: "Comprehensive analysis of software, web, and mobile applications to identify and mitigate vulnerabilities.",
        },
        {
            title: "Data Security",
            description: "Thorough review of data storage, access controls, and encryption protocols to protect sensitive information.",
        },
        {
            title: "Compliance Assessments",
            description: "Ensuring alignment with industry standards like ISO 27001, DPDP, NISPG, and CIS standards.",
        },
    ];

    const auditProcess = [
        {
            title: "Initial Assessment",
            description: "Understand your current security posture and identify critical assets.",
        },
        {
            title: "Gap Analysis",
            description: "Identify discrepancies between your existing setup and best practices.",
        },
        {
            title: "Detailed Reporting",
            description: "Provide actionable insights and recommendations for improvement.",
        },
        {
            title: "Implementation Support",
            description: "Assist in deploying recommended changes to strengthen your defences.",
        },
    ];

    const whyChooseUs = [
        {
            title: "Expert Analysis",
            description: "Conducted by experienced cybersecurity professionals.",
        },
        {
            title: "Actionable Insights",
            description: "Detailed reports with recommendations for improvement.",
        },
        {
            title: "Tailored Approach",
            description: "Audits customized to your organization's unique needs.",
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock assistance and monitoring for your security needs.",
        },
        {
            title: "Advanced Tools",
            description: "Using cutting-edge security tools and methodologies.",
        },
    ];

    const controls = useAnimationControls();

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: [-280, -280 * whyChooseUs.length],
                transition: {
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0
                }
            });
        };
        startAnimation();
    }, [controls, whyChooseUs.length]);

    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <section className="relative flex justify-center items-center h-[34rem] max-sm:h-[30rem] bg-gradient-to-tr from-[#134a9d] via-[#134a9d]/90 to-[#134a9d]/80 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
                    <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                <div className="px-4 relative py-20 md:py-28">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white mb-6 text-heading"
                        >
                            Comprehensive Cybersecurity Audits for Enhanced Protection
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-subheading text-white/90 leading-relaxed"
                        >
                            At CyberMantra Technologies, we provide detailed cybersecurity audits to help organizations identify
                            vulnerabilities and strengthen their security posture. Our audits cover all critical areas of your IT infrastructure
                            to ensure compliance and reduce risks.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="my-container mx-auto px-4 py-8 space-y-20">
                {/* Key Areas Section */}
                <section className="space-y-16">
                    <div>
                        <div className="container mx-auto px-4">
                            <h2 className=" text-center section-heading">Key Areas We Cover</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {keyAreas.map((area, index) => (
                                <Card key={index} className="hover:shadow-lg border border-[#0dafee] transition-shadow">

                                    <CardContent className="p-6">
                                        <CardTitle className="mb-3">
                                            {area.title}
                                        </CardTitle>
                                        <p className="text-muted-foreground">{area.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center space-y-4 mt-8">
                        <p className="text-2xl italic">Protect your business with a cybersecurity audit.</p>
                        <Button size="lg" className="bg-[#0dafee] hover:bg-[#2098c8]">
                            Schedule an Audit
                        </Button>
                    </div>
                </section>

                {/* Audit Process Section */}
                <section className="space-y-6">
                    <div className="container mx-auto px-4">
                        <h2 className=" text-center section-heading">Our Audit Process</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {auditProcess.map((step, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="text-3xl text-[#0dafee] mb-4">{index + 1}</div>
                                    <CardTitle className="mb-3">
                                        {step.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="space-y-6 overflow-hidden">
                    <h2 className="text-center section-heading">Why Choose Us for Cybersecurity Audits?</h2>
                    <div className="flex justify-center items-center gap-2 mb-8">
                        <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                        <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
                        <div className="flex gap-8 py-6 overflow-hidden">
                            <motion.div
                                className="flex gap-8 min-w-max"
                                animate={controls}
                                initial={{ x: 0 }}
                            >
                                {[...whyChooseUs, ...whyChooseUs].map((reason, index) => (
                                    <Card
                                        key={index}
                                        className="w-[280px] flex-shrink-0 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#0dafee]/20 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <CardContent className="p-6">
                                            <h3 className="mb-3 text-xl font-medium text-gray-800">{reason.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CybersecurityAudit; 