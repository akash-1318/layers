import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { children, className, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-lime-100 gap-2 text-lime-400 px-3 py-2 rounded-full uppercase items-center",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
};

export default Tag;
