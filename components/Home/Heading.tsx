import { createStyles, Text } from "@mantine/core";

const BREAKPOINT = "@media (max-width: 768px)";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Graycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },
}));

const Heading = () => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.title}>
      <Text
        component="span"
        variant="gradient"
        gradient={{ from: "#db9544", to: "#c97f28" }}
        inherit
      >
        Quacker
      </Text>
    </div>
  );
};

export default Heading;
