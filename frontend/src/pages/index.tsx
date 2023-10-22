import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import Booklist from "@/components/Booklist";

const Home = () => {
  return (
    <>
      <Head>
        <title>Outlast Bookshop</title>
        <meta
          name="description"
          content="Your one way stop to infinite books and knowledge"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Outlast Bookshop
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Are you ready to embark on an epic literary journey? At Outlast, we
                are passionate about books, and we are on a mission to bring the 
                magic of reading to your doorstep.
              </Typography>
            </Container>
          </Box>
        <Booklist />
      </main>
    </>
  );
}

export default Home;