type BillingToggleProps = {
    isAnnual: boolean;
    onToggle: () => void;
    monthlyLabel?: string;
    annualLabel?: string;
    discount?: number;
};

export default function BillingToggle({
    isAnnual,
    onToggle,
    monthlyLabel = "Monthly",
    annualLabel = "Annual",
    discount,
}: BillingToggleProps) {
    return (
        <>
            <span
                className={`text-sm font-medium transition-colors duration-200 ease-in-out ${
                    !isAnnual
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                }`}
            >
                {monthlyLabel}
            </span>

            <button
                role="switch"
                type="button"
                aria-checked={isAnnual}
                onClick={onToggle}
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isAnnual ? "translate-x-5" : "translate-x-0"
                    }`}
                />
            </button>

            <span
                className={`text-sm font-medium transition-colors duration-200 ease-in-out ${
                    isAnnual
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                }`}
            >
                {annualLabel}
                <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Save {discount}%
                </span>
            </span>
        </>
    );
}
