import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedPriceProps {
    value: number;
    prefix?: string;
}

const AnimatedPrice: React.FC<AnimatedPriceProps> = ({
    value,
    prefix = "£",
}) => {
    const motionValue = useMotionValue(value);
    const spring = useSpring(motionValue, { stiffness: 100, damping: 20 });
    const rounded = useTransform(spring, (latest) => Math.round(latest));
    const formatted = useTransform(rounded, (val) => `${prefix}${val}`);

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    return (
        <motion.span className="block text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            {formatted}
        </motion.span>
    );
};

export default AnimatedPrice;
