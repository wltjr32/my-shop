import { Button, Container } from "@mui/material";

export default function Home(){
  return(
    <>
      <Container fixed>
        <Button variant="contained" href="/signin">회원가입</Button>
      </Container>
    </>
  )
}