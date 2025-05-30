import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, CheckCircle, Briefcase, ArrowRight, Calendar, BookOpen, Tag, Signal } from "lucide-react";
import Courses, { Course } from "@/data/CoursesDetail";

const CourseDetail = () => {
    const { id } = useParams();
    const course = Courses.find((course: Course) => course.id === id);


    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                    <p className="text-gray-600">The course you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="my-container space-y-20 px-4">

                <h1 className="text-center text-4xl bg-white shadow-md py-10 uppercase">
                    {course.courseName}
                </h1>

                {/* Course Overview Banner */}
                <div className=" mb-16 grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-xl border-b hover:shadow-lg p-6 flex items-start gap-4">
                        <Calendar className="w-6 h-6 text-[#0dafee] mt-1" />
                        <div>
                            <h3 className="text-gray-500 text-sm mb-1">Program Duration</h3>
                            <p className="font-semibold text-gray-800">{course.duration}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl border-b hover:shadow-lg p-6 flex items-start gap-4">
                        <Signal className="w-6 h-6 text-[#0dafee] mt-1" />
                        <div>
                            <h3 className="text-gray-500 text-sm mb-1">Level</h3>
                            <p className="font-semibold text-gray-800">Beginner</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl border-b hover:shadow-lg p-6 flex items-start gap-4">
                        <BookOpen className="w-6 h-6 text-[#0dafee] mt-1" />
                        <div>
                            <h3 className="text-gray-500 text-sm mb-1">Lessons</h3>
                            <p className="font-semibold text-gray-800">24</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl border-b hover:shadow-lg p-6 flex items-start gap-4">
                        <Tag className="w-6 h-6 text-[#0dafee] mt-1" />
                        <div>
                            <h3 className="text-gray-500 text-sm mb-1">Price</h3>
                            <p className="font-semibold text-gray-800">₹ 10000</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-md p-8 max-sm:p-4">
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Course Objectives */}
                                <div className="bg-gray-50  transition-colors hover:bg-gray-100 rounded-md p-6 max-sm:p-2 shadow-md ">

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#134a9d]/10 rounded-xl flex items-center justify-center">
                                            <Award className="w-6 h-6 text-[#0dafee]" />
                                        </div>
                                        <h2 className="text-2xl max-sm:text-lg font-semibold text-gray-800">Course Objectives</h2>
                                    </div>
                                    <div className="space-y-4 pl-4">
                                        {course.keyBenefits.map((target, index) => (
                                            <div key={index} className="grid grid-cols-12 text-gray-600">
                                                <div className="justify-self-start">
                                                    <div className="w-2 h-2 max-sm:w-1 max-sm:h-1 bg-[#0dafee] rounded-full mt-2"></div>
                                                </div>
                                                <div className="text-lg  max-sm:text-sm col-span-11 max-sm:col-span-11">{target}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div >
                                    <img src={course.courseImgSrc} alt="not found" className="w-full rounded-md max-sm:h-[16rem] h-full object-cover" />
                                </div>
                            </div>
                            {/* Who Should Take This Course  */}
                            <div className="bg-gray-50 transition-colors hover:bg-gray-100 shadow-md rounded-md p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#134a9d]/10 rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <h2 className="text-2xl max-sm:text-lg font-semibold text-gray-800">Who Should Take This Course</h2>
                                </div>
                                <div className="space-y-4 pl-4">
                                    {course.whoShouldTakeThisCourse.map((prereq, index) => (
                                        <div key={index} className="grid grid-cols-12 text-gray-600">
                                            <div className="justify-self-center">
                                                <div className="w-2 h-2 max-sm:w-1 max-sm:h-1 bg-[#0dafee] rounded-full mt-2"></div>
                                            </div>
                                            <div className="text-lg max-sm:text-sm col-span-8 max-sm:col-span-11">{prereq}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pre-requisites*/}
                            <div className="bg-gray-50 rounded-md p-6 transition-colors hover:bg-gray-100 shadow-md ">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#134a9d]/10 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <h2 className="text-2xl  max-sm:text-lg font-semibold text-gray-800">Pre-requisites</h2>
                                </div>
                                <div className="space-y-4 pl-4">
                                    {course.prerequisites.map((benefit, index) => (
                                        <div key={index} className="grid grid-cols-12 text-gray-600">
                                            <div className="justify-self-center">
                                                <div className="w-2 h-2 max-sm:w-1 max-sm:h-1 bg-[#0dafee] rounded-full mt-2"></div>
                                            </div>
                                            <div className="text-lg max-sm:text-sm col-span-8 max-sm:col-span-11">{benefit}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            {/* Enroll Now Button */}
                            <Link to={`/contact`} className="flex justify-center">
                                <motion.div
                                    className="inline-flex items-center gap-2 bg-[#0dafee] hover:bg-[#2098c8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0dafee]/20"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>

                            {/* CURRICULLUM */}
                            <section className=" px-2 bg-white">
                                <div className="space-y-14 px-4">
                                    <div className="">
                                        <h2 className=" text-center section-heading">Curricullum</h2>
                                        <div className="flex justify-center items-center gap-2 mb-8">
                                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                                            <div className="h-[3px] w-[25px] bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="lg:max-w-5xl max-sm:max-w-full grid grid-cols-2 max-sm:grid-cols-1 gap-4 mx-auto">
                                        {course?.curriculum.map((level, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex rounded-md hover:shadow-lg h-fit shadow-md px-6 py-3 items-start gap-6 mb-12 last:mb-0"
                                            >
                                                <div>
                                                    <h3 className="text-xl mb-2 text-[#0dafee]">Lesson {index + 1}</h3>
                                                    <p className="text-gray-600">{level}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Career Applicability */}
                            <div className="bg-gray-50 rounded-md p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 shadow-lg rounded-xl flex items-center justify-center">
                                        <Briefcase className="w-6 h-6 text-[#0dafee]" />
                                    </div>
                                    <h2 className="text-2xl max-sm:text-lg font-semibold text-gray-800">Career Applicability</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {course.careerApplicability.map((career, index) => {
                                        let Icon;
                                        // Map icon strings to Lucide icons
                                        Icon = career.icon
                                        return (
                                            <div key={index} className="bg-white rounded-md p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                                                    <Icon className="w-7 h-7 text-[#0dafee]" />
                                                </div>
                                                <p className="text-gray-800 max-sm:text-sm font-medium text-lg">{career.description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Why Join this Program */}
                {/* <div className=" space-y-12 mb-16">
                    <div className="container mx-auto px-4">
                        <h2 className=" text-center section-heading">Why Join this Program?</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-[3px] w-[80px] bg-[#0dafee] rounded-full"></div>
                            <div className="h-[3px] w-[25px] bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 max-sm:space-y-8 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow-md p-4 relative pt-16 group hover:shadow-lg transition-shadow">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Award className="w-7 h-7 text-[#0dafee]" />
                                </div>
                            </div>
                            <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800 mb-3 text-center">Expert-Led Training</h3>
                            <p className="text-gray-600 max-sm:text-sm text-center">Learn from industry experts with over 15+ years of experience in cybersecurity and ethical hacking.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 relative pt-16 group hover:shadow-lg transition-shadow">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Globe className="w-7 h-7 text-[#0dafee]" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold max-sm:text-lg text-gray-800 mb-3 text-center">Industry Recognition</h3>
                            <p className="text-gray-600 max-sm:text-sm text-center">Earn globally recognized certifications and join our network of 1000+ successful cybersecurity professionals.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 relative pt-16 group hover:shadow-lg transition-shadow">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Lightbulb className="w-7 h-7 text-[#0dafee]" />
                                </div>
                            </div>
                            <h3 className="text-xl max-sm:text-lg font-semibold  text-gray-800 mb-3 text-center">Cutting-Edge Curriculum</h3>
                            <p className="text-gray-600 max-sm:text-sm text-center">Stay ahead with our regularly updated curriculum covering the latest cybersecurity tools and techniques.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 relative pt-16 group hover:shadow-lg transition-shadow">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Target className="w-7 h-7 text-[#0dafee]" />
                                </div>
                            </div>
                            <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800 mb-3 text-center">Practical Learning</h3>
                            <p className="text-gray-600 max-sm:text-sm  text-center">Access our state-of-the-art labs and work on real-world projects with hands-on cybersecurity training.</p>
                        </div>
                    </div>
                </div> */}





            </div>
        </div>
    );
};

export default CourseDetail; 