import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import {
    ShieldCheck,
    FileText,
    AlertTriangle,
    Scale,
    Cog,
    Users,
    TrendingUp,
    Zap
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import useMeasure from "react-use-measure";

const CybersecurityConsultancy = () => {
    const consultancyServices = [
        {
            title: "Risk Assessment",
            description: "Conduct in-depth analysis to identify potential threats and vulnerabilities.",
            icon: <ShieldCheck className="w-8 h-8" />,
            bgColor: "bg-red-500"
        },
        {
            title: "Policy Development",
            description: "Create and implement cybersecurity policies and procedures tailored to your organization.",
            icon: <FileText className="w-8 h-8 " />,
            bgColor: "bg-blue-500"
        },
        {
            title: "Incident Response Planning",
            description: "Develop strategies to detect, respond to, and recover from cyber incidents efficiently.",
            icon: <AlertTriangle className="w-8 h-8" />,
            bgColor: "bg-green-500"
        },
        {
            title: "Compliance Advisory",
            description: "Ensure your organization adheres to regulatory requirements and standards like CIS Standards, ISO 27001, DPDP and NISPG.",
            icon: <Scale className="w-8 h-8 " />,
            bgColor: "bg-yellow-500"
        },
        {
            title: "Security Architecture Design",
            description: "Build robust, scalable, and secure IT architectures to withstand evolving threats.",
            icon: <Cog className="w-8 h-8" />,
            bgColor: "bg-purple-500"
        },
    ];

    const workProcess = [
        {
            title: "Initial Consultation",
            description: "Understand your business needs and challenges.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Gap Analysis",
            description: "Identify areas for improvement in your existing security framework.",
            icon: <TrendingUp className="w-6 h-6" />,
        },
        {
            title: "Strategy Development",
            description: "Design a tailored cybersecurity plan.",
            icon: <Cog className="w-6 h-6" />,
        },
        {
            title: "Implementation Support",
            description: "Assist with deploying and integrating security solutions.",
            icon: <ShieldCheck className="w-6 h-6" />,
        },
        {
            title: "Ongoing Support",
            description: "Provide continuous monitoring and updates as needed.",
            icon: <Zap className="w-6 h-6" />,
        },
    ];

    const features = [
        {
            title: "Tailored Strategies",
            description: "Solutions designed to fit your specific business needs.",
        },
        {
            title: "Experienced Consultants",
            description: "Work with experts who understand the latest threats and trends.",
        },
        {
            title: "Proactive Approach",
            description: "Stay ahead of cyber threats with our forward-thinking solutions.",
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
            <section className="relative h-[32rem] max-sm:h-fit bg-gradient-to-tr from-[#134a9d] via-[#134a9d]/90 to-[#134a9d]/80 overflow-hidden">
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
                            Strategic Cybersecurity Consulting Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-subheading px-2 text-white/90 leading-relaxed"
                        >
                            Partner with CyberMantra Technologies for expert cybersecurity consulting services. Our experienced
                            consultants help organizations build robust security strategies, implement best practices, and achieve
                            their security objectives.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="my-container">
                <section className="py-20 space-y-16">
                    <div className="space-y-12 px-4">
                        <div className="container mx-auto px-4">
                            <h2 className=" text-center section-heading">Our Consultancy Services</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {consultancyServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-lg shadow-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className={`${service.bgColor} text-white  p-4 rounded-full w-fit mb-6`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* CTA Section */}
                    <div className="text-center px-3 space-y-8">
                        <p className="text-2xl italic">Strengthen your cybersecurity framework with our consultancy services.</p>
                        <div>
                            <a href="https://www.aksinstitute.com/allcourses" target="_blank" className="bg-[#0dafee] hover:bg-[#2098c8] font-semibold text-white px-5 py-4 text-lg rounded-md">
                                Get Started
                            </a>
                        </div>
                    </div>
                </section>

                {/* How we Work */}
                <section className="py-20 px-2 bg-white">
                    <div className="space-y-14 px-4">
                        <div className="container mx-auto px-4">
                            <h2 className=" text-center section-heading">How We Work</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            {workProcess.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="flex items-start gap-6 mb-12 last:mb-0"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#0dafee] text-white rounded-full flex items-center justify-center">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="space-y-6 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="section-heading text-center">Why Partner with CyberMantra?</h2>
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
                            {[...features, ...features].map((reason, index) => (
                                <Card
                                    key={index}
                                    className="w-[280px] flex-shrink-0 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#0dafee] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
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

export default CybersecurityConsultancy; 