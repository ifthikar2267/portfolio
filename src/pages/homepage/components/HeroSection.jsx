import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { FiDownload } from 'react-icons/fi';


const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  
  const codeSnippets = [
  {
    language: 'React',
    code: `// Display products
import { useEffect, useState } from 'react';

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      {items.map(p => <div key={p._id}>{p.name}</div>)}
    </div>
  );
}`
  },
  {
    language: 'Node.js',
    code: `// Backend route
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;`
  },
   {
    language: 'JavaScript',
    code: `// Get products
export async function getProducts() {
  const res = await fetch('/api/products');
  return res.json();
}`
  }
];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white  from-violet-50 via-pink-50 to-purple-50">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
       <div className="flex justify-center items-center gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-center"
          >
            <div className="space-y-2 ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-1xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight"
              >
                <span className="font-worksans text-black">Welcome to my Portfolio</span>
                <br />
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight font-worksans"
              >
                Hi{' '}
                <span className="text-black">I'm</span>
                <br />
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-worksans"
              >
                <span className="text-[#0077ff]">Ifthikar</span>
                <br />
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground leading-tight font-worksans"
              >
                <span className="text-black">Fullstack Developer</span>
                <br />
              </motion.h1>

              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-md text-black-foreground max-w-lg leading-relaxed text-black font-worksans"
              >
                Crafting seamless digital experiences with the MERN stack (MongoDB, Express.js, React, Node.js) — transforming ideas into scalable, user-centric applications that blend functionality with intuitive design, delivering performance, accessibility, and innovation at every step.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 items-center justify-center font-worksans"

            >
              <Link to="/projects">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-white text-[#0077FF] border border-[#0077FF] hover:bg-[#0077FF] hover:text-white w-full sm:w-auto rounded-xl "

                  iconName="FolderOpen"
                  iconPosition="right"
                >
                  View Projects
                </Button>
              </Link>
              
              <button
                onClick={handleDownload}
                className="bg-[#0077FF] hover:bg-white hover:text-[#0077FF] border border-[#0077FF] w-full sm:w-auto rounded-xl text-white flex items-center justify-center gap-2 px-4 py-2"
              >
               
                <span>Download CV</span>
                 <FiDownload size={18} />
              </button>

            </motion.div>

            {/* Quick Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-centerjustify-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground">Year Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Code Animation */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-xl shadow-brand-lg overflow-hidden"> */}
              {/* Terminal Header */}
              {/* <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {codeSnippets?.[currentCodeIndex]?.language}
                </div>
              </div> */}

              {/* Code Content */}
              {/* <div className="p-6 bg-slate-900 text-green-400 font-mono text-sm leading-relaxed min-h-[300px] overflow-hidden">
                <motion.pre
                  key={currentCodeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="whitespace-pre-wrap"
                >
                  {codeSnippets?.[currentCodeIndex]?.code}
                </motion.pre>
              </div> */}

              {/* Language Indicators */}
              {/* <div className="absolute bottom-4 right-4 flex space-x-2">
                {codeSnippets?.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCodeIndex 
                        ? 'bg-primary scale-125' :'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div> */}

            {/* Floating Elements */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-lg shadow-lg"
            >
              <Icon name="Code2" size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-secondary text-white p-3 rounded-lg shadow-lg"
            >
              <Icon name="Zap" size={20} />
            </motion.div> */}
          {/* </motion.div>
        </div>
      </div> */}
      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div> */}
      </div>
      </div>
    </section>
  );
};

export default HeroSection;