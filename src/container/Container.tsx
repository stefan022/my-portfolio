import { VNode, FunctionComponent, JSX } from "preact";

interface IProps {
	children: VNode;
}

const Container: FunctionComponent<IProps> = ({ children }): JSX.Element => {
	return <div className="max-w-[1080px] mx-auto max-xl:px-6">{children}</div>;
};

export default Container;
