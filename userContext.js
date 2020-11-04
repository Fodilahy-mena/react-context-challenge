import React from 'react';
const { Provider, Consumer } = React.createContext();

class UsernameContextProvider extends React.Component {

    state = {
        username: "Jerome",
    }

    changeUserName = (newUsername) => {
        this.setState({username: newUsername})
    }
    render() {
        return  <Provider value={{ username: this.state.username, changeUserName: this.changeUserName }}>
                    {this.props.children}
                </Provider>;
    }
}
export { UsernameContextProvider, Consumer as UsernameContextConsumer}
