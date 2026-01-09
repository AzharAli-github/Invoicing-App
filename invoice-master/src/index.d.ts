interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
  onSubmit?: Function;
  className?: string;
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: ReactNode;
}
