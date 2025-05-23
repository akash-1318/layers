import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400",
            secondary: "border-white",
        },
        size: {
            sm: "h-10",
        },
    },
});

const Button = (
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button
            className={classes({ variant, size, className })}
            {...otherProps}
        ></button>
    );
};

export default Button;
