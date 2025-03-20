import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    BookOpen,
    Terminal,
    Shield,
    Code,
    Award,
    Users,
    Laptop,
    Layout,
    Building,
    ArrowRight
} from "lucide-react";

const TrainingCourses = () => {
    const navigate = useNavigate();

    const trainingPrograms = [
        {
            id: "cybersecurity-fundamentals",
            title: "Cybersecurity Fundamentals",
            description: "Understand the basics of cybersecurity, threat identification, and mitigation.",
            icon: <Shield className="w-10 h-10 text-[#0dafee]" />,
            duration: "4 weeks",
            level: "Beginner",
        },
        {
            id: "ethical-hacking",
            title: "Ethical Hacking",
            description: "Gain hands-on experience with tools and techniques to identify and exploit vulnerabilities ethically.",
            icon: <Terminal className="w-10 h-10 text-[#0dafee]" />,
            duration: "8 weeks",
            level: "Intermediate",
        },
        {
            id: "advanced-security-practices",
            title: "Advanced Security Practices",
            description: "Learn advanced techniques in incident response, threat hunting, and malware analysis.",
            icon: <Shield className="w-10 h-10 text-[#0dafee]" />,
            duration: "12 weeks",
            level: "Advanced",
        },
        {
            id: "programming-for-security",
            title: "Programming for Security",
            description: "Master languages like Python and Java with a focus on security applications.",
            icon: <Code className="w-10 h-10 text-[#0dafee]" />,
            duration: "10 weeks",
            level: "Intermediate",
        },
        {
            id: "certifications-training",
            title: "Certifications Training",
            description: "Prepare for globally recognized certifications such as CEH, CISSP, and CISM.",
            icon: <Award className="w-10 h-10 text-[#0dafee]" />,
            duration: "16 weeks",
            level: "Advanced",
        },
    ];

    const features = [
        {
            title: "Certified Instructors",
            description: "Learn from industry professionals with extensive experience.",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Hands-On Learning",
            description: "Engage in practical exercises and real-world simulations.",
            icon: <Laptop className="w-8 h-8" />,
        },
        {
            title: "Flexible Options",
            description: "Choose from online, in-person, and hybrid formats.",
            icon: <Layout className="w-8 h-8" />,
        },
        {
            title: "Custom Corporate Training",
            description: "Tailored programs for organizations to enhance their team's cybersecurity skills.",
            icon: <Building className="w-8 h-8" />,
        },
    ];

    const targetAudience = [
        "IT Professionals seeking to enhance their skill set",
        "Organizations looking to upskill their workforce",
        "Students and career changers interested in cybersecurity roles",
    ];

    return (
        <div className="min-h-screen space-y-24">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-tr bg-url('/training-banner.jpg') h-[32rem] max-sm:h-fit from-[#134a9d] via-[#134a9d]/90 to-[#134a9d]/80 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
                    <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                <div className="px-4 md:px-7 relative py-20 md:py-28">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white mb-6 text-heading"
                        >
                            Expert-Led Cybersecurity Training Courses
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-subheading text-white/90 leading-relaxed"
                        >
                            Empower your team with comprehensive cybersecurity knowledge through our industry-leading training courses.
                            Learn from experienced professionals and stay ahead of evolving cyber threats.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="my-container space-y-28 ">
                {/* Training Programs Section with Card Grid */}
                <section className="space-y-16">
                    <div className="space-y-12 px-4">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center section-heading">Training Programs We Offer</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid-layout grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {trainingPrograms.map((program, index) => (
                                <motion.div
                                    key={program.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-200"
                                    onClick={() => navigate(`/course/${program.id}`)}
                                >
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="bg-[#134a9d]/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#134a9d]/10 transition-colors">
                                            {program.icon}
                                        </div>
                                        <h3 className="mb-2">{program.title}</h3>
                                        <p className="mb-4">{program.description}</p>
                                    </div>
                                    <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                                        <span className="text-sm font-bold italic text-[#0dafee]">{program.level}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center px-3 space-y-8">
                        <p className="text-2xl italic">Empower yourself or your team with cybersecurity expertise.</p>
                        {/* Enroll Now Button */}
                        <div className="">
                            <motion.a
                                href="https://www.aksinstitute.com/allcourses"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-[#0dafee] hover:bg-[#2098c8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0dafee]/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Enroll Today
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </section>

                {/* Features Section with Interactive Cards */}
                <section className="bg-white">
                    <div className="space-y-12 px-4">
                        <div className="container mx-auto px-4">
                            <h2 className=" text-center section-heading">What Makes Our Training Unique?</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid-layout grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-50 rounded-xl p-6 text-center duration-500 hover:bg-[#0dafee] group transition-colors"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 bg-[#134a9d]/10 rounded-full flex items-center justify-center group-hover:text-white group-hover:bg-black text-[#0dafee]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-2">{feature.title}</h3>
                                    <p className="group-hover:text-white">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience Section with Animated List */}
                <section className="bg-gradient-to-b py-14">
                    <div className="space-y-12 px-4">
                        <div className="container mx-auto px-4">
                            <h2 className=" text-center section-heading">Who Should Enroll?</h2>
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="grid-layout">
                                {targetAudience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-8 h-8 bg-[#134a9d]/10 rounded-full flex items-center justify-center text-[#0dafee]">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg m-0">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TrainingCourses; 