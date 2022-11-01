import React from "react";

function Layout() {
	const [state, setState] = React.useState(0);
	return (
		<div>
			<div>LayoutState: {state}</div>
			<button onClick={() => setState(69)}>SetState</button>
		</div>
	);
}

export default Layout;
