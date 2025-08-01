import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
    return (
        <>
            <button className="m-1 bg-react-blue text-slate-800 px-5 py-2 rounded-full border-none w-fit">
                {children}
            </button>
        </>
    );
}

function OutlineButton({ children }: { children: ReactNode }) {
    return (
        <>
            <button className="m-1 bg-transparent border border-react-blue border-solid text-react-blue px-5 py-2 rounded-full w-fit">
                {children}
            </button>
        </>
    );
}

export { Button, OutlineButton };
