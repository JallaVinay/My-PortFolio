
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = {
    frontend: [
      {
        title: 'Modern E-commerce UI',
        description: 'Responsive e-commerce interface built with React and Tailwind CSS',
        image: 'https://res.cloudinary.com/dwzpwhdho/image/upload/v1755392469/Screenshot_2025-08-17_062901_e7ainf.png',
        tech: ['React.js', 'Node.js'],
        github: 'https://github.com/JallaVinay/NxtTrendz-Frontend',
        demo: 'https://vinaysnxtrendz.ccbp.tech/',
      },
      {
        title: 'Jobby App',
        description: 'Developed a job portal with search filters, job detail views, and authentication.',
        image: 'https://res.cloudinary.com/dwzpwhdho/image/upload/v1755392469/Screenshot_2025-08-17_062955_g8gceo.png',
        tech: ['React.js', 'Node.js'],
        github: 'https://github.com/JallaVinay/jobby-React',
        demo: 'https://vinaysjobbyapp.ccbp.tech/login',
      },
    ],
    fullstack: [
      {
        title: 'Social Media Platform',
        description: 'Full-stack social platform with real-time messaging and posts',
        image: '💬',
        tech: ['MERN', 'Socket.io', 'JWT'],
        github: '',
        demo: '',
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task manager with teams, projects, and real-time updates',
        image: '✅',
        tech: ['Node.js', 'Express', 'MongoDB', 'React'],
        github: '#',
        demo: '#',
      },
    ],
    ai: [
      {
        title: 'AI Chatbot Assistant',
        description: 'Intelligent chatbot powered by natural language processing',
        image: '🤖',
        tech: ['Python', 'OpenAI API', 'FastAPI'],
        github: '#',
        demo: '#',
      },
      {
        title: 'Image Recognition App',
        description: 'AI-powered image classification and object detection system',
        image: '👁️',
        tech: ['TensorFlow', 'Python', 'React'],
        github: '#',
        demo: '#',
      },
    ],
  };

  const categories = [
    { key: 'frontend', title: 'Frontend', color: 'text-neon-cyan' },
    { key: 'fullstack', title: 'Full Stack', color: 'text-neon-purple' },
    { key: 'ai', title: 'AI-based', color: 'text-neon-pink' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  //Kamlesh


  const ProjectButton = ({ href, icon: Icon, children, variant, className }: any) => {
  const isDisabled = !href || href === "#";

  return (
    <motion.div whileHover={{ scale: isDisabled ? 1 : 1.05 }} whileTap={{ scale: isDisabled ? 1 : 0.95 }}>
      {isDisabled ? (
        <Button
          variant={variant}
          size="sm"
          className={`flex items-center gap-2 ${className}`}
          disabled
        >
          <Icon className="w-4 h-4" />
          {children}
        </Button>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Button
            variant={variant}
            size="sm"
            className={`flex items-center gap-2 ${className}`}
          >
            <Icon className="w-4 h-4" />
            {children}
          </Button>
        </a>
      )}
    </motion.div>
  );
};


 

  return (
    <section id="projects" className="px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className=" font-bold bg-gradient-hero bg-clip-text text-transparent ">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across different technologies and domains
          </p>
        </motion.div>

        <div className=" space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-2xl font-bold mb-8 ${category.color}`}
              >
                {category.title}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects[category.key as keyof typeof projects].map((project) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group glow-card"
                  >
                    <Card className=" overflow-hidden  hover:border-neon-cyan/50 group-hover:border group-hover:border-primary rounded-2xl">
                      <div className=" h-30 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20">
                        {project.image.startsWith('http') ? (
                          <img src={project.image} alt={project.title} style={{borderRadius:"30px"}}className= "p-5 h-full w-full object-cover" />
                        ) : (
                          <span className="text-6xl">{project.image}</span>
                        )}
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                          {project.title}
                        </h4>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium glass rounded-full border border-neon-purple/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <ProjectButton
                            href={project.github}
                            icon={Github}
                            variant="outline"
                            className="border-neon-cyan/50  "
                          >
                            GitHub
                          </ProjectButton>

                          <ProjectButton
                            href={project.demo}
                            icon={ExternalLink}
                            variant=""
                            className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                          >
                            Live Demo
                          </ProjectButton>
                          
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
