import { Check } from "lucide-react";

interface Plan {
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    period: string;
    description: string;
    icon: React.ElementType;
    features: string[];
    popular?: boolean;
    color: string;
}

interface PriceCardProps {
    plan: Plan;
    price: number;
    isDark: boolean;
    isAnnual: boolean;
}

const getColorClasses = (color: string, isDark: boolean) => ({
    backgroundColor: isDark ? `bg-${color}-600` : `bg-${color}-100`,
    iconColor: isDark ? `text-${color}-100` : `text-${color}-600`,
    buttonColor: `bg-${color}-600 text-white hover:bg-${color}-700 focus:ring-${color}-600`,
    buttonHoverColor: isDark
        ? `hover:bg-${color}-700`
        : `hover:bg-${color}-600`,
    ringColor: `focus:ring-${color}-600`,
});

const PriceCard: React.FC<PriceCardProps> = ({ plan, price, isDark }) => {
    const colorClasses = getColorClasses(plan.color, isDark);
    const formattedPrice = `$${price}`;

    return (
        <div
            className={`price-card relative flex flex-col rounded-2xl ${
                isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
            } border shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? "ring-2 ring-purple-500" : ""
            }`}
        >
            {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold text-white">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Icon background and text color based on the theme */}
            <div
                className={`h-12 w-12 rounded-lg p-3 mb-6 ${colorClasses.backgroundColor}`}
            >
                <plan.icon
                    className={`h-full w-full ${colorClasses.iconColor}`}
                />
            </div>

            <h3
                className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                }`}
            >
                {plan.name}
            </h3>
            <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {plan.description}
            </p>

            <div className="mt-6">
                <span
                    className={`text-4xl lg:text-5xl font-extrabold ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    {formattedPrice}
                </span>
                <span
                    className={`text-base font-medium ${
                        isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                    {plan.period}
                </span>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <span
                            className={`ml-3 text-base ${
                                isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <button
                    className={`w-full rounded-lg ${colorClasses.buttonColor} px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 ${colorClasses.buttonHoverColor} focus:outline-none focus:ring-2 ${colorClasses.ringColor} focus:ring-offset-2`}
                >
                    Get started
                </button>
            </div>
        </div>
    );
};

export default PriceCard;
