import { useState } from "react";
import { Crown, Moon, Rocket, Sun, Zap } from "lucide-react";
import { useTheme } from "./ThemeContext";
import PriceCard from "./components/PriceCard";

const plans = [
    {
        name: "Starter",
        monthlyPrice: 10,
        annualPrice: 96,
        period: "/month",
        description: "Perfect for individuals getting started",
        icon: Zap,
        features: [
            "Up to 5 projects",
            "2GB storage",
            "Basic analytics",
            "Email support",
        ],
        color: "blue",
    },
    {
        name: "Pro",
        monthlyPrice: 25,
        annualPrice: 240,
        period: "/month",
        description: "Best for growing businesses",
        icon: Crown,
        features: [
            "Unlimited projects",
            "20GB storage",
            "Advanced analytics",
            "Priority support",
            "Custom domains",
        ],
        popular: true,
        color: "purple",
    },
    {
        name: "Enterprise",
        monthlyPrice: 50,
        annualPrice: 480,
        period: "/month",
        description: "For large scale organisations",
        icon: Rocket,
        features: [
            "Unlimited everything",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Advanced security",
        ],
        color: "indigo",
    },
];

function App() {
    const [isAnnual, setIsAnnual] = useState(false);
    const { isDark, toggleDark } = useTheme();
    const annualDiscount = 20; // 20% discount for annual plans

    const calculatePrice = (monthlyPrice: number, annualPrice: number) => {
        if (!isAnnual) return monthlyPrice;
        const monthlyEquivalent = Math.round(annualPrice / 12);
        return monthlyEquivalent;
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-200 ${
                isDark
                    ? "bg-gray-900"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
            } py-16 px-4 sm:px-6 lg:px-8`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center relative">
                    <button
                        onClick={toggleDark}
                        className={`absolute right-0 top-0 p-2 rounded-lg ${
                            isDark
                                ? "bg-gray-800 text-gray-200"
                                : "bg-white text-gray-700"
                        } shadow-lg hover:shadow-xl transition-all duration-200`}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>
                    <h1
                        className={`text-4xl font-extrabold ${
                            isDark ? "text-white" : "text-gray-900"
                        } sm:text-5xl sm:tracking-tight lg:text-6xl`}
                    >
                        Choose your plan
                    </h1>
                    <p
                        className={`mt-5 max-w-xl mx-auto text-xl lg:text-2xl text-balance ${
                            isDark ? "text-gray-300" : "text-gray-500"
                        }`}
                    >
                        Select the perfect plan for your needs. Upgrade or
                        downgrade at any time.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span
                            className={`text-sm font-medium ${
                                !isAnnual
                                    ? isDark
                                        ? "text-white"
                                        : "text-gray-900"
                                    : isDark
                                    ? "text-gray-400"
                                    : "text-gray-500"
                            }`}
                        >
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                                isDark ? "bg-gray-700" : "bg-gray-200"
                            }`}
                            role="switch"
                            aria-checked={isAnnual}
                        >
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                    isAnnual ? "translate-x-5" : "translate-x-0"
                                }`}
                            />
                        </button>
                        <span
                            className={`text-sm font-medium ${
                                isAnnual
                                    ? isDark
                                        ? "text-white"
                                        : "text-gray-900"
                                    : isDark
                                    ? "text-gray-400"
                                    : "text-gray-500"
                            }`}
                        >
                            Annual
                            <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                Save {annualDiscount}%
                            </span>
                        </span>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
                    {plans.map((plan) => (
                        <PriceCard
                            key={plan.name}
                            plan={plan}
                            isAnnual={isAnnual}
                            price={calculatePrice(
                                plan.monthlyPrice,
                                plan.annualPrice
                            )}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
