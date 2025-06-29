import { Example } from "./Header"

const Notifications = () => {
    let name = 'Great Premier'
    let clicked = 'Button clicked'
    return(
        <>
        <h1>Notifications!</h1>
        <Example props={name} clicked={clicked}/>
        </>
    )
}

export default Notifications