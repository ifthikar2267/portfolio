import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { FiDownload } from "react-icons/fi";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Projects', path: '/projects', icon: 'FolderOpen' },
    { name: 'Education', path: '/education', icon: 'GraduationCap' },
    { name: 'Certifications', path: '/certifications', icon: 'Award' }
  ];

  const moreMenuItems = [
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1yeRdoTSmDM7ASUJ2OBpNtOqDqjIDL7d9/view?usp=drivesdk";

    // Create a hidden link and trigger click
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "My_Resume.pdf"); // This suggests a filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          {/* <Link 
            to="/homepage" 
            className="flex items-center space-x-2 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <Icon name="Code2" size={18} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -inset-1 gradient-primary rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-200 blur-sm"></div>
            </div>
             <div className="flex flex-col">
              <span className="text-lg font-bold gradient-text">Ifthikar</span>
              <span className="text-xs text-muted-foreground -mt-1">Portfolio</span>
            </div> 
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-150 ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
           <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3F72AF] text-[#F9F7F7] font-medium hover:bg-[#112D4E] transition-colors duration-200"
    >
      <FiDownload size={18} />
      <span>Resume</span>
    </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={20} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-4 pb-4 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
            {[...navigationItems, ...moreMenuItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border">
              <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3F72AF] text-[#F9F7F7] font-medium hover:bg-[#112D4E] transition-colors duration-200"
    >
      <FiDownload size={18} />
      <span>Resume</span>
    </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;