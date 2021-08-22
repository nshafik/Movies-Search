import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
    let history = useHistory()
    useEffect(() => {
        setTimeout(() => history.push('/movies'), 5000)
    }, [])
    return (
        <Container>
            <h1>Hello </h1>
        </Container>
    )
}
export default Welcome;