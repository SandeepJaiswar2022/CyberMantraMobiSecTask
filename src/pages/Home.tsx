import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Code, Users, LifeBuoy } from "lucide-react";
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
                            Welcome to CyberMantra
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-subheading text-white/90 leading-relaxed"
                        >
                            Empowering the future through technology and innovation. Join us on our journey to transform the digital landscape.

                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href='https://www.aksinstitute.com/allcourses' target='_blank' className="cursor-pointer text-lg py-3 px-5 rounded-sm bg-white text-black  hover:bg-gray-300">Get Started</a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className='my-container space-y-4 max-sm:px-6'>
                {/* Our Expertise Section */}
                <section className="py-16">
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
                                        className=" border-[#0dafee] h-[17rem] border rounded-lg"
                                    >
                                        <Link to={feature.link}>
                                            <Card className="cursor-pointer  ">
                                                <CardHeader>
                                                    <CardTitle>{feature.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className='space-y-6'>
                                                        <p className="text-gray-600 text-lg">{feature.description}</p>
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
                        <p className="text-gray-600 md:text-lg">
                            In an era where digital threats are constantly evolving, CyberMantra Technologies Private Limited stands as a beacon of security and trust.
                            We specialize in delivering comprehensive cybersecurity services, including audits, vulnerability assessments, penetration testing, consultancy, and training programs.
                            Our mission is to safeguard businesses and individuals from cyber threats while empowering them with the knowledge and tools to stay secure.
                        </p>
                    </div>
                    <div className='p-2'>
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
                                <Card key={index} className="py-4   text-center">
                                    <CardHeader className='space-y-5'>
                                        <div className={`w-20 h-20 mx-auto flex items-center justify-center ${feature.bgColor} rounded-full text-white`}>
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="mt-4">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
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