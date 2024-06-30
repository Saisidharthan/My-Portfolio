import { motion } from "framer-motion";

const TestComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello, world!
    </motion.div>
  );
};

export default TestComponent;
