import { useState } from "react";

interface Prop {
    label: string;
    type: string;
    name: string;
    value: string;
    error?: string;
    variant?: string;
}

const Input = ({
    label,
    type = "text",
    name,
    value,
    error = "",
    variant = "input"
}: Prop) => {
    const [focused, setFocused] = useState(false);
    const [data, setData] = useState("")
    const isActive = focused || value.length > 0;

    return (
        <div className="relative w-full bg-input">
            {variant === "input" ? <input
                type={type}
                name={name}
                value={data}
                onChange={(e) => setData(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    if (data.length <= 0) {
                        setFocused(false)
                    }
                }}
                placeholder=""
                required
                aria-invalid={!!error}
                className={`peer h-14 w-full rounded-sm px-3 pt-6 pb-2 text-sm placeholder-transparent text-white focus:outline-none transition-all duration-200`}
            /> :
                <textarea
                    name={name}
                    className="peer w-full rounded-sm px-3 pt-6 pb-2 text-sm placeholder-transparent text-white focus:outline-none transition-all duration-200"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => {
                        if (data.length <= 0) {
                            setFocused(false);
                        }
                    }}
                    placeholder=""
                    required
                    rows={8}
                />

            }
            <label
                htmlFor={name}
                className={`font-libre-baskerville capitalize absolute pointer-events-none left-3 text-text text-md transition-all duration-200 px-1
          ${isActive ? "top-1 text-xs" : "top-3.5"}`}
            >
                {label}
                {variant === "input" && <span className="text-gray-600 text-xs lowercase">(required)</span>}
            </label>

            {error && (
                <p className="text-red-600 text-sm font-bold mt-1 px-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
