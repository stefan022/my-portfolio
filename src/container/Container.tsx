import { VNode, FunctionComponent, JSX } from "preact";

import "./Container.scss";

interface IProps {
	children: VNode;
}

const Container: FunctionComponent<IProps> = ({ children }): JSX.Element => {
	return <div className="cnt">{children}</div>;
};

export default Container;
