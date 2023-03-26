import { Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import BasicCard from '../../components/card/BasicCard';
import Navbar from '../../components/core/Navbar';

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <div>This is the Homepage of the Ecommerce website</div>
      <Grid2 container spacing={5}>
        <Grid2 xs={3}>
          <BasicCard />
        </Grid2>
        <Grid2 xs={3}>
          <BasicCard />
        </Grid2>
        <Grid2 xs={3}>
          <BasicCard />
        </Grid2>
        <Grid2 xs={3}>
          <BasicCard />
        </Grid2>
      </Grid2>
      <Button variant='contained'>This is a button</Button>
    </Container>
  )
}

export default HomePage;