import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-10 px-5 bg-forest-900 border-t bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Foresty. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://instagram.com/foresty_nexus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-forest-500 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/923195403032"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-forest-500 transition-colors"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
