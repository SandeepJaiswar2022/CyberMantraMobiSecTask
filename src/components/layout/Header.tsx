import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white sticky -top-1 z-10 shadow-sm">
            <nav className="py-4 lg:max-w-[84rem] lg:px-4  md:max-w-[47rem] max-sm:max-w-[22rem] mx-auto">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold"
                    >
                        <Link to="/">
                            <img src="/logo.png" className="md:w-44 max-sm:w-36 lg:w-56" alt="CyberMantra Logo" />
                        </Link>
                    </motion.div>

                    <div className="hidden lg:flex space-x-8 relative">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/cyber-security-audit">Audits</NavLink>
                        <NavLink to="/vapt-services">VAPT Services</NavLink>
                        <NavLink to="/cybersecurity-consultancy">Consultancy</NavLink>
                        <NavLink to="/training-courses">Training Courses</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* Mobile and Tablet menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="lg:hidden">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <div className="flex flex-col space-y-6 mt-6">
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/">Home</NavLink>
                                </div>
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/cyber-security-audit">Audits</NavLink>
                                </div>
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/vapt-services">VAPT Services</NavLink>
                                </div>
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/cybersecurity-consultancy">Consultancy</NavLink>
                                </div>
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/training-courses">Training Courses</NavLink>
                                </div>
                                <div onClick={() => setOpen(false)}>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
        <Link
            to={to}
            className="text-[#0dafee] hover:text-[#1a7ba2] lg:text-[1rem] text-sm font-medium transition-colors"
        >
            {children}
        </Link>
    </motion.div>
);


export default Header;
