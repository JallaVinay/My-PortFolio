import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express', icon: '🚂', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'JavaScript', icon: '🟨', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'GitHub', icon: '🐙', category: 'Tools' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'HTML', icon: '🌐', category: 'Frontend' },
    { name: 'CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind', icon: '💨', category: 'Frontend' },
    { name: 'Bootstrap', icon: '🅱️', category: 'Frontend' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-hero bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="glow-card p-6 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 ">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Category Legend */}
       
      </div>
    </section>
  );
};

export default SkillsSection;