import Link from "next/link";
import { Box, Flex, Heading } from "theme-ui";

const Header = () => {
  // const [colorMode, setColorMode] = useColorMode();

  const onClick = async () => {
    const d = await fetch('/api');
    console.log(d)
  }
  return (
    <Box variant="header">
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="menu">
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/132">
              <a>Services</a>
            </Link>
            <Link href="/pricing">
              <a>Pricing!</a>
            </Link>
          </nav>
          <nav>
            <a href="https://console.app.com">Sign In</a>

            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </nav>
          <button onClick={onClick}>onClick me</button>
        </div>
      </div>
    </Box>
  );
};

export {Header};
