import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      year: '2025',
      degree: 'B.E. Computer Engineering',
      institution: 'Malla Reddy University',
      icon: GraduationCap,
      status: '79%',
      description: 'Specializing in software development and computer systems',
    },
    {
      year: '2021',
      degree: 'Class XII - Science',
      institution: 'Sri Gayatri Junior College',
      icon: School,
      status: '94%',
      description: 'Mathematics, Physics, Chemistry with Computer Science',
    },
    {
      year: '2018',
      degree: 'Class X',
      institution: 'DR RLR School',
      icon: BookOpen,
      status: '9.3 GPA',
      description: 'Strong foundation in mathematics and sciences',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational <span className="bg-gradient-hero bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and learning path in computer science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-hero transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } pl-20 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glow-card p-6"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-bold text-primary mr-3">
                        {item.year}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                    <p className="text-accent font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:transform md:-translate-x-4 bg-background border-4 border-primary rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;