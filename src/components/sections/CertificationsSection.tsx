
import { motion } from 'framer-motion';
import { Award, Code, Database, Lightbulb } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Programming Foundations in Python',
      provider: 'Programming Academy',
      year: '2023',
      icon: Code,
      description: 'Core Python concepts and programming fundamentals',
      link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=DNLLMKGDUP',
    },
    {
      title: 'Introduction to Databases',
      provider: 'Database Institute',
      year: '2023',
      icon: Database,
      description: 'SQL, database design, and data management principles',
      link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=CXAYULZYHX',
    },
    {
      title: 'JavaScript Essentials',
      provider: 'Web Development Academy',
      year: '2024',
      icon: Code,
      description: 'Modern JavaScript, ES6+, and web development best practices',
      link: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=KKVBIGHXWR',
    },
    {
      title: 'Developer Foundations',
      provider: 'Tech Skills Institute',
      year: '2024',
      icon: Lightbulb,
      description: 'Software development lifecycle and industry best practices',
      link: 'https://certificates.ccbp.in/intensive/developer-foundations?id=QTHCFCHAOO',
    },
    {
      title: 'React.js ',
      provider: 'Frontend Masters',
      year: '2024',
      icon: Code,
      description: 'React components, hooks, and state management',
      link: 'https://certificates.ccbp.in/intensive/react-js?id=IPHXLNYGMX',
    },
    {
      title: 'Node.js ',
      provider: 'Backend Academy',
      year: '2024',
      icon: Code,
      description: 'Node.js runtime, Express.js, and API development',
      link: 'https://certificates.ccbp.in/intensive/node-js?id=XZXYRWSOBH',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glow-card p-6 group relative"
            >
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                      <div className="flex items-center mt-3 text-primary">
                    <Award className="w-4 h-4 mr-1" />
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium underline hover:text-primary/80"
                      >
                        Certificate
                      </a>
                    ) : (
                      <span className="text-sm font-medium opacity-50 cursor-not-allowed select-none">
                        Certificate
                      </span>
                    )}
                  </div>
                  </div>

                  <p className="text-primary font-medium mb-2">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>

              
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Continuously learning and expanding my skills in emerging technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
