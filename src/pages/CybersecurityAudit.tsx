import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useState } from "react";
import { ShieldCheck, Shield, Database, Scale, Search, Check, FileText, ArrowRight } from "lucide-react";


const CybersecurityAudit = () => {
    const keyAreas = [
        {
            title: "Endpoint Auditing and Security",
            description: "Continuous evaluation and monitoring of cross-platform endpoints.",
            icon: <ShieldCheck className="w-8 h-8" />,
            bgColor: "bg-blue-500"
        },
        {
            title: "Application Security",
            description: "Comprehensive analysis of software, web, and mobile applications to identify and mitigate vulnerabilities.",
            icon: <Shield className="w-8 h-8" />,
            bgColor: "bg-purple-500"
        },
        {
            title: "Data Security",
            description: "Thorough review of data storage, access controls, and encryption protocols to protect sensitive information.",
            icon: <Database className="w-8 h-8" />,
            bgColor: "bg-yellow-500"
        },
        {
            title: "Compliance Assessments",
            description: "Ensuring alignment with industry standards like ISO 27001, DPDP, NISPG, and CIS standards.",
            icon: <Scale className="w-8 h-8" />,
            bgColor: "bg-red-500"
        }
    ];

    const auditProcess = [
        {
            title: "Initial Assessment",
            description: "Understand your current security posture and identify critical assets.",
            icon: <Search className="w-6 h-6 text-[#0dafee]" />,
            keyActivities: [
                "System Inventory",
                "Risk Assessment",
                "Policy Review"
            ]
        },
        {
            title: "Gap Analysis",
            description: "Identify discrepancies between your existing setup and best practices.",
            icon: <Shield className="w-6 h-6 text-[#0dafee]" />,
            keyActivities: [
                "Vulnerability Scanning",
                "Penetration Testing",
                "Security Controls"
            ]
        },
        {
            title: "Detailed Reporting",
            description: "Provide actionable insights and recommendations for improvement.",
            icon: <FileText className="w-6 h-6 text-[#0dafee]" />,
            keyActivities: [
                "Findings Analysis",
                "Risk Prioritization",
                "Report Generation"
            ]
        },
        {
            title: "Implementation Support",
            description: "Assist in deploying recommended changes to strengthen your defences.",
            icon: <ArrowRight className="w-6 h-6 text-[#0dafee]" />,
            keyActivities: [
                "Remediation Planning",
                "Implementation Support",
                "Follow-up Testing"
            ]
        },
    ];

    const whyChooseUs = [
        {
            title: "Comprehensive Assessment",
            description: "Thorough evaluation of your security infrastructure, policies, and practices to identify vulnerabilities and risks."
        },
        {
            title: "Expert Team",
            description: "Our certified cybersecurity professionals bring years of experience in conducting security audits across industries."
        },
        {
            title: "Industry Standards",
            description: "Audits aligned with international standards like ISO 27001, NIST, and GDPR compliance requirements."
        },
        {
            title: "Detailed Reporting",
            description: "Comprehensive reports with actionable insights and recommendations for improving security posture."
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock assistance and guidance for implementing security improvements and addressing concerns."
        }
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
                        srcSet="https://media.istockphoto.com/id/1653312926/photo/document-management-and-checking-system-online-documentation-database-online-approve.jpg?s=612x612&w=0&k=20&c=K8pzbh-I2ScVwFKNzw_ycZ7dYr1PYkOLNKuDHKWVr70="
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet="https://media.istockphoto.com/id/1653312926/photo/document-management-and-checking-system-online-documentation-database-online-approve.jpg?s=612x612&w=0&k=20&c=K8pzbh-I2ScVwFKNzw_ycZ7dYr1PYkOLNKuDHKWVr70="
                    />
                    <img
                        src="https://media.istockphoto.com/id/1653312926/photo/document-management-and-checking-system-online-documentation-database-online-approve.jpg?s=612x612&w=0&k=20&c=K8pzbh-I2ScVwFKNzw_ycZ7dYr1PYkOLNKuDHKWVr70="
                        alt="Security Audit and Compliance"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60" />

                {/* Content */}
                <div className="relative px-4 py-24 lg:py-28 md:py-20 max-sm:py-20">
                    <div className="max-w-xl mx-auto text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white mb-6   p-2 text-heading "
                        >
                            Cybersecurity Audit
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white p-2 leading-relaxed lg:text-xl md:text-lg max-sm:text-base max-w-2xl mx-auto"
                        >
                            Comprehensive security assessment and evaluation of your organization's cybersecurity posture by CyberMantra Technologies.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="my-container py-8 px-4 space-y-12">
                {/* Key Areas Section */}
                <section className="space-y-16">
                    <div>
                        <div className="text-center">
                            <h2 className="section-heading text-center mb-2">Key Areas We Cover</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {keyAreas.map((area, index) => (
                                <Card key={index} className="border-2 border-gray-100  hover:shadow-[0_3px_10px_rgb(0,0,0,0.12)] hover:border-[#0dafee]/20 transition-all duration-300 transform">
                                    <CardContent className="p-6">
                                        <div className={`${area.bgColor} text-white  p-4 rounded-full w-fit mb-6`}>
                                            {area.icon}
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-800 mb-3">{area.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{area.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Audit Process */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        {/* <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Audit Process
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                A systematic approach to identifying and addressing security vulnerabilities
                            </p>
                        </div> */}

                        <div className="text-center mb-10">
                            <h2 className="section-heading text-center mb-2">Our Audit Process</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {auditProcess.map((step, index) => (
                                <div key={index} className="relative group">

                                    {/* Step Card */}
                                    <div className="relative h-[27rem] bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#0dafee]/30 transition-all duration-300 transform hover:-translate-y-1">
                                        {/* Step Icon */}
                                        <div className="flex justify-center">
                                            <div className="w-14 h-14 bg-[#0dafee]/10 rounded-full flex items-center justify-center group-hover:bg-[#0dafee]/20 transition-colors duration-300">
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>



                                        {/* Key Activities */}
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <h4 className="text-sm font-semibold text-[#0dafee] mb-3">Key Activities</h4>
                                            <ul className="space-y-2">
                                                {step.keyActivities.map((activity, activityIndex) => (
                                                    <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                                                        <Check className="w-4 h-4 text-[#0dafee] mr-2" />
                                                        {activity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="space-y-6">
                    <div className="text-center">
                        <h2 className="section-heading text-center mb-2">Why Choose Us</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="left-0 mb-16 relative overflow-x-clip h-max w-full">
                        <motion.div
                            ref={ref}
                            className="flex space-x-10"
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
                            {[...whyChooseUs, ...whyChooseUs].map((reason, index) => (
                                <Card
                                    key={index}
                                    className="w-[280px] cursor-pointer flex-shrink-0 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#0dafee] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-3">{reason.title}</h3>
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

export default CybersecurityAudit; 