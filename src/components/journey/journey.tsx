import { useRef } from 'react';
import { motion } from "motion/react";

export default function Journey() {
  const containerRef = useRef(null);
  
  const milestones = [
    {
      year: "2018",
      title: "First Steps in Development",
      description: "Started learning HTML, CSS, and JavaScript. Created my first static website and fell in love with web development."
    },
    {
      year: "2019",
      title: "Frontend Framework Journey",
      description: "Learned React and began building interactive user interfaces. Completed several projects using modern JavaScript practices."
    },
    {
      year: "2020",
      title: "Full Stack Development",
      description: "Expanded my knowledge to backend technologies. Learned Node.js and Express, and built RESTful APIs connecting to databases."
    },
    {
      year: "2021",
      title: "Professional Developer",
      description: "Joined a tech company as a junior developer. Collaborated on large-scale applications and learned about CI/CD pipelines."
    },
    {
      year: "2022",
      title: "Cloud & DevOps",
      description: "Dived into cloud infrastructure with AWS. Implemented serverless architectures and improved application deployment practices."
    },
    {
      year: "2023",
      title: "Team Leadership",
      description: "Promoted to lead developer. Mentored junior developers and managed feature implementations while improving technical architecture."
    },
    {
      year: "2024",
      title: "Modern Frontend Expert",
      description: "Mastered advanced React patterns, state management, and performance optimizations. Implemented design systems and accessibility best practices."
    },
    {
      year: "2025",
      title: "Current Focus",
      description: "Working with cutting-edge technologies like React 19 and exploring AI integration in web applications to create more intelligent interfaces."
    }
  ];

  return (
    <div className="relative  w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">My Journey</h2>
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 relative"
      >
        <div className="flex flex-col items-center min-h-screen relative">
          {/* Main timeline line container */}
          <div className="absolute h-full w-1 bg-gray-200 rounded-full left-1/2 transform -translate-x-1/2 z-10">
            {/* Animated fill for the timeline */}
            <motion.div 
              className="absolute w-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full origin-top h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: [0, 1] }} // Explicitly animate from 0 to 1
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>
          
          {/* Timeline milestones */}
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex w-full items-center mb-16 md:mb-24 ${isEven ? 'justify-start md:justify-start' : 'justify-end md:justify-end'}`}
                style={{ height: "max-content" }}
              >
                {/* Circle indicator */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-20"
                  initial={{ backgroundColor: "#D1D5DB" }} // gray-300
                  whileInView={{ backgroundColor: "#3B82F6" }} // blue-500
                  viewport={{ once: false, margin: "-50px 0px -50px 0px" }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Content card */}
                <motion.div 
                  className={`w-5/6 md:w-5/12 ${isEven ? 'pr-4 md:pr-6 mr-auto md:mr-0' : 'pl-4 md:pl-6 ml-auto md:ml-0'}`}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    x: isEven 
                      ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -10) 
                      : (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 10)
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    x: 0
                  }}
                  viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.7, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  <div className={`bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg ${
                    isEven 
                      ? 'border-r-4 border-blue-500' 
                      : 'border-l-4 border-blue-500'
                  }`}>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}