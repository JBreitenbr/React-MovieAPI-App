export const Home = () => {
  let guest_session_id = localStorage.getItem("guest_session_id");
  return (<h1 style={{marginTop:"150px"}}>This is home.</h1>)
}