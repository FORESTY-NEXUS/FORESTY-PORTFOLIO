import * as motion from "motion/react-client"

export default function EnterAnimation({ children, disableScale = false }) {
    const initial = disableScale ? { opacity: 0, scale: 1 } : { opacity: 0, scale: 0 };
    const animate = { opacity: 1, scale: 1 };

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{
                duration: 0.4,
                scale: disableScale ? undefined : { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
            {children}
        </motion.div>
    )
}
