import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Code, Users, LifeBuoy, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomCarousel from '@/components/features/Carousal';

const sliderContent = [
    {
        title: "Welcome to CyberMantra",
        description: "Empowering the future through technology and innovation. Join us on our journey to transform the digital landscape.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=640",
    },
    {
        title: "Secure Your Digital Future",
        description: "Expert cybersecurity solutions to protect your business from evolving digital threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=640",
    },
    {
        title: "Professional Training Programs",
        description: "Comprehensive cybersecurity training to build the next generation of security experts.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=640",
    }
];

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

const slides = [
    {
        title: "Comprehensive Security Solutions",
        description: "Protecting your digital assets with advanced cybersecurity measures and real-time threat monitoring.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=640"
    },
    {
        title: "Expert Security Auditing",
        description: "In-depth analysis and assessment of your systems to identify vulnerabilities and strengthen defenses.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=640"
    },
    {
        title: "Advanced Threat Detection",
        description: "Stay ahead of cyber threats with our cutting-edge detection and prevention systems.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
        imageMd: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1024",
        imageSm: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=640"
    }
];


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);


    return (
        <div className="min-h-screen">
            <CustomCarousel slides={slides} />

            <div className='my-container space-y-4 max-sm:px-6'>
                {/* Our Expertise Section */}
                <section className="max-sm:py-5 py-14">
                    <div className="">
                        <h2 className="section-heading text-center">Our Expertise</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            {expertise.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.01,
                                            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)"
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className=" border-[#0dafee] h-[18rem] max-sm:h-fit border rounded-lg"
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
                            <source srcSet="cybersecurity-partner.jpg" media="(max-width: 1024px)" />
                            {/* Default image for larger screens */}
                            <img src="cybersecurity-partner.jpg" alt="Responsive Example" className='h-[19rem] max-sm:h-[15rem] w-full' />
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
                                        <div className={`w-16 h-16 mx-auto flex items-center justify-center ${feature.bgColor} rounded-full text-white`}>
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