import {
  createStyles,
  useMantineTheme,
  Text,
  Container,
  Button,
} from "@mantine/core";
import Link from "next/link";

const BREAKPOINT = "@media (max-width: 768px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 256,
    boxSizing: "border-box",
    [BREAKPOINT]: {
      paddingTop: 150,
    },
  },

  title: {
    fontFamily: `Graycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    paddingTop: 10,
    paddingLeft: 300,
    paddingRight: 300,
    fontSize: 24,
    textAlign: "center",

    [BREAKPOINT]: {
      fontSize: 18,
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
    },
  },

  button: {
    marginTop: 30,
  },
}));

const Hero = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "#db9544", to: "#c97f28" }}
          inherit
        >
          Quacker
        </Text>
      </h1>

      <Text className={classes.description} color="dimmed">
        Completely anonymous posts. Quack your heart out!
      </Text>

      <Link passHref href="/home">
        <Button
          component="a"
          className={classes.button}
          variant="light"
          color="indigo"
        >
          Say Something
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
