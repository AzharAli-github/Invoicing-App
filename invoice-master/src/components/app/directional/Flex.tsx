import React from "react";

export function Flex({
  as = "div",
  flexDirection = "row",
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  children,
  className,
  ...rest
}: FlexProps) {
  const styles = { flexDirection, justifyContent, alignItems, flexWrap, gap };
  const As = as;
  return (
    <As style={styles} {...rest} className={`flex ${className}`}>
      {children}
    </As>
  );
}
