import { useState } from "react";
import { Crown, Moon, Rocket, Sun, Zap } from "lucide-react";
import { useTheme } from "./ThemeContext";
import PriceCard from "./components/PriceCard";
import BillingToggle from "./components/BillingToggle";

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
    const { toggleDark } = useTheme();
    const annualDiscount = 20; // 20% discount for annual plans

    const calculatePrice = (monthlyPrice: number, annualPrice: number) => {
        if (!isAnnual) return monthlyPrice;
        const monthlyEquivalent = Math.round(annualPrice / 12);
        return monthlyEquivalent;
    };

    return (
        <div className="min-h-screen transition-colors duration-200 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center relative">
                    <button
                        onClick={toggleDark}
                        className="absolute w-9 h-9 right-0 top-0 p-2 rounded-lg dark:bg-gray-800 bg-white  shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
                        aria-label="Toggle dark mode"
                    >
                        <Sun className="h-5 w-5 transition-all duration-200 text-gray-200" />
                        <Moon className="h-5 w-5 transition-all duration-200 text-gray-700" />
                    </button>
                    <h1 className="text-4xl font-extrabold dark:text-white text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Choose your plan
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl lg:text-2xl text-balance dark:text-gray-300 text-gray-500">
                        Select the perfect plan for your needs. Upgrade or
                        downgrade at any time.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <BillingToggle
                            isAnnual={isAnnual}
                            onToggle={() => setIsAnnual(!isAnnual)}
                            monthlyLabel="Pay Monthly"
                            annualLabel="Pay Yearly"
                            discount={annualDiscount}
                        />
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
