import React from "react";

export function Text({ as = "p", className, children, ...props }: TextProps) {
  const Component = as;
  const classes = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-normal",
    h6: "text-base font-normal",
    p: "text-base",
    span: "text-base",
  };
  return (
    <Component
      className={`text-gray-800 ${classes[as]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
