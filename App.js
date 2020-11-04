import React from "react"
import Header from "./Header"
import { UsernameContextConsumer } from "./userContext"

class App extends React.Component {

    state = {
        usernameInput: "",
    }

    handleChange = (e) => {
        this.setState({usernameInput: e.target.value})
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <UsernameContextConsumer>
                        {context => (<p className="main">No new notifications, {context.username}! 🎉</p>)}
                    </UsernameContextConsumer>
                </main>
                
                {
                    /**
                     * Challenge: Add the ability for the user to choose a new username
                     * 
                     * 1. Add state to this component to hold the new username in a controlled form
                     * (https://reactjs.org/docs/forms.html#controlled-components)
                     * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
                     * 
                     * 2. Change userContext into a component that has state and provides the ability
                     * to change the user's username. Make sure to export the provider and consumer
                     * as named exports and update their uses anywhere else in the app
                     * 
                     * 3. Give this App component the ability to update the username in context when the
                     * button is clicked
                     */
                }
                <input
                        type="text"
                        name="username"
                        placeholder="New username"
                        value={this.state.usernameInput}
                        onChange={this.handleChange}
                    />
                <UsernameContextConsumer>
                    {context => (
                    <button onClick={(e) => context.changeUserName(this.state.usernameInput)}>Change Username</button>
                    )}
                </UsernameContextConsumer>
                
                {/* <button onClick={}>Change Username</button> */}
                
            </div>
        )
    }
}

export default App