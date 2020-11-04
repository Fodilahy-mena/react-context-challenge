import React from 'react';
import { UsernameContextConsumer } from "./userContext";

function Header() {
	return (
		<header>
			<UsernameContextConsumer>
				{context => <p>Welcome, {context.username}!</p>}
			</UsernameContextConsumer>
		</header>
	);
}

export default Header;
