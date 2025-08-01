import { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full bg-react-blue bg-opacity-20 px-2.5 py-0.5 text-sm whitespace-nowrap text-react-blue w-fit">
            {children}
        </span>
    );
}

function OutlineBadge({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full border border-react-blue px-2.5 py-0.5 text-sm whitespace-nowrap text-react-blue w-fit">
            {children}
        </span>
    );
}

export { Badge, OutlineBadge };
