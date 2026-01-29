import { motion, useScroll, useTransform } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useRef } from 'react';

const FloatingElement = ({
    children,
    rate = 1,
    initialRotate = 0,
    className = '',
    floatIntensity = 1
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scroll driven rotation and position
    const rotate = useTransform(scrollYProgress, [0, 1], [initialRotate, initialRotate + (360 * rate)]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * rate]);

    // Continuous float animation
    const floatY = {
        y: [-10 * floatIntensity, 10 * floatIntensity, -10 * floatIntensity],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ rotate, y }} className="w-full h-full">
                <motion.div animate={floatY.y} transition={floatY.transition} className="w-full h-full">
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FloatingElement;
