import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AnimatedPriceOdometerProps {
    value: number;
    prefix?: string;
    children?: React.ReactNode;
}

const digitVariants = {
    initial: (direction: number) => ({
        y: direction > 0 ? -20 : 20,
        opacity: 0,
    }),
    animate: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 150, damping: 20 },
    },
    exit: (direction: number) => ({
        y: direction > 0 ? 20 : -20,
        opacity: 0,
        transition: { duration: 0.15 },
    }),
};

export const AnimatedPriceOdometer: React.FC<AnimatedPriceOdometerProps> = ({
    value,
    prefix = "£",
    children,
}) => {
    const [previousValue, setPreviousValue] = React.useState(value);

    const direction = value > previousValue ? 1 : -1;

    React.useEffect(() => {
        if (value !== previousValue) {
            setPreviousValue(value);
        }
    }, [value, previousValue]);

    const digits = value.toString().split("");

    return (
        <div className="flex text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            <span className="mr-1">{prefix}</span>
            {digits.map((digit, index) => (
                <div
                    key={index}
                    className="relative w-[1ch] overflow-hidden flex items-center justify-center"
                >
                    <AnimatePresence mode="popLayout" custom={direction}>
                        <motion.span
                            key={`${digit}-${index}`}
                            custom={direction}
                            variants={digitVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute"
                        >
                            {digit}
                        </motion.span>
                    </AnimatePresence>
                </div>
            ))}
            {children}
        </div>
    );
};
