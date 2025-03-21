import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Code, Users, LifeBuoy, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const expertise = [
    {
        title: "Cybersecurity Audits",
        description: "Thorough evaluations to identify and mitigate security risks.",
        link: "/cyber-security-audit"
    },
    {
        title: "Vulnerability Assessment and Penetration Testing (VAPT)",
        description: "Uncover and remediate vulnerabilities in your applications and systems.",
        link: "/vapt-services"
    },
    {
        title: "Cybersecurity Consultancy",
        description: "Tailored strategies to fortify your organization's cyber defences.",
        link: "/cybersecurity-consultancy"
    },
    {
        title: "Training Programs",
        description: "Empowering individuals and teams with essential cybersecurity skills.",
        link: "/training-courses"
    }
];

const features = [
    {
        icon: <ShieldCheck size={40} />,
        bgColor: "bg-blue-600",
        title: "Experienced Professionals",
        description: "Our team comprises certified cybersecurity experts with years of industry experience.",
    },
    {
        icon: <Code size={40} />,
        bgColor: "bg-green-600",
        title: "Cutting-Edge Solutions",
        description: "We utilize the latest tools and methodologies to ensure maximum protection.",
    },
    {
        icon: <Users size={40} />,
        bgColor: "bg-orange-600",
        title: "Client-Centric Approach",
        description: "Every solution is customized to meet the unique needs of our clients.",
    },
    {
        icon: <LifeBuoy size={40} />,
        bgColor: "bg-red-600",
        title: "End-to-End Support",
        description: "From risk identification to mitigation, we provide comprehensive support.",
    },
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[32rem] lg:min-h-[36rem] md:min-h-[30rem] max-sm:min-h-[22rem] overflow-hidden">
                {/* Background Image with Responsive Sizes */}
                <picture className="absolute max-sm:inset-0 md:inset-0">
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet="https://plus.unsplash.com/premium_photo-1676618540046-3a68a4e20408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern Cybersecurity Dashboard"
                        className="w-full h-full object-cover"
                    />
                </picture>

                {/* Content */}
                <div className="relative px-4 py-24 lg:py-28 md:py-20 max-sm:py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white mb-6 text-heading lg:text-5xl md:text-4xl max-sm:text-2xl font-bold"
                        >
                            Welcome to CyberMantra
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 leading-relaxed lg:text-xl md:text-lg max-sm:text-base max-w-2xl mx-auto"
                        >
                            Empowering the future through technology and innovation. Join us on our journey to transform the digital landscape.
                        </motion.p>
                        <div className="">
                            <motion.a
                                href="https://www.aksinstitute.com/allcourses"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 max-sm:px-2 max-sm:text-sm max-sm:py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0dafee]/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Enroll Today
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            <div className='my-container space-y-4 max-sm:px-6'>
                {/* Our Expertise Section */}
                <section className="max-sm:py-5 py-14">
                    <div className="">
                        <h2 className="section-heading text-center">Our Expertise</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {expertise.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.03,
                                            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)"
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className=" border-[#0dafee] h-[15rem] max-sm:h-fit border rounded-lg"
                                    >
                                        <Link to={feature.link}>
                                            <Card className="cursor-pointer">
                                                <CardHeader>
                                                    <CardTitle>{feature.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className='space-y-6'>
                                                        <p className="text-gray-600 max-sm:text-sm">{feature.description}</p>
                                                        <Button className='bg-[#0dafee] hover:bg-[#2098c8] text-white'>Learn More</Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CyberMantra Technologies (Company Introduction) */}
                <section className='grid lg:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-1 gap-5'>
                    <div className="mx-auto bg-white rounded-lg ">
                        <h2 className="section-heading">CyberMantra Technologies: Your Trusted Cybersecurity Partner</h2>
                        <p className="text-gray-600 max-sm:text-sm">
                            In an era where digital threats are constantly evolving, CyberMantra Technologies Private Limited stands as a beacon of security and trust.
                            We specialize in delivering comprehensive cybersecurity services, including audits, vulnerability assessments, penetration testing, consultancy, and training programs.
                            Our mission is to safeguard businesses and individuals from cyber threats while empowering them with the knowledge and tools to stay secure.
                        </p>
                    </div>
                    <div>
                        {/* <img  src="cyber-content-side-image.jpeg" alt="" /> */}
                        <picture>
                            {/* Image for small screens */}
                            <source srcSet="cyber-content-side-image.jpeg" media="(max-width: 640px)" />
                            {/* Image for medium screens */}
                            <source srcSet="cyber-content-side-image-mob.jpeg" media="(max-width: 1024px)" />
                            {/* Default image for larger screens */}
                            <img src="cyber-content-side-image.jpeg" alt="Responsive Example" className='h-[20rem] max-sm:h-[14rem] w-full' />
                        </picture>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="section-heading text-center">Why Choose CyberMantra</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-2">
                            {features.map((feature, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader className='space-y-5'>
                                        <div className={`w-20 h-20 mx-auto flex items-center justify-center ${feature.bgColor} rounded-full text-white`}>
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="mt-4">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className='-p-2'>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Home; 