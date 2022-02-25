import React from "react";
import { createUseStyles } from "react-jss";

type RuleNames = "myButton" | "myLabel";

interface ButtonProps {
  children?: React.ReactNode;
  spacing?: number;
  fontWeight?: string;
  labelColor?: string;
}

interface CustomTheme {
  background: string;
}

const useStyles = createUseStyles<RuleNames, ButtonProps, CustomTheme>({
  myButton: {
    padding: 10,
  },
  myLabel: ({ ...props }) => ({
    display: "block",
    color: props.labelColor || "red",
    fontWeight: props.fontWeight || "bold",
    backgroundColor: "gray",
  }),
});

function Button({ children, ...props }: ButtonProps): React.ReactElement {
  const classes = useStyles({ ...props });

  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
}

export default Button;
