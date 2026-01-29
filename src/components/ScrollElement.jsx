import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ScrollElement = ({
    children,
    direction = 'up',
    viewport = { amount: 0.3, margin: '0px' },
    className = '',
    delay = 0
}) => {
    const directionVariants = {
        up: {
            initial: { opacity: 0, y: 75 },
            whileInView: { opacity: 1, y: 0 }
        },
        down: {
            initial: { opacity: 0, y: -75 },
            whileInView: { opacity: 1, y: 0 }
        },
        left: {
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 }
        },
        right: {
            initial: { opacity: 0, x: 100 },
            whileInView: { opacity: 1, x: 0 }
        },
        scale: {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 }
        },
        fade: {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 }
        }
    };

    const variant = directionVariants[direction] || directionVariants.up;

    return (
        <motion.div
            initial={variant.initial}
            whileInView={variant.whileInView}
            viewport={viewport}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollElement;
