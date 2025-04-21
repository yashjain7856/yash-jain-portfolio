
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yashjain7856', ariaLabel: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jain-yash1', ariaLabel: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jainyashyj21@gmail.com', ariaLabel: 'Email' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 dark:bg-navy-dark/80 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-navy dark:text-white">
          Yash<span className="text-primary">Jain</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.title}
              to={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors">
              {link.title}
            </Link>
          ))}

          <div className="ml-4 flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button key={link.ariaLabel} variant="ghost" size="icon" asChild className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-navy-dark p-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}

            <div className="pt-4 flex space-x-2">
              {socialLinks.map((link) => (
                <Button key={link.ariaLabel} variant="ghost" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
