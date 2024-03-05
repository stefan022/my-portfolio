import { FunctionComponent, JSX } from "preact";

import { Title } from "../../components";

import "./QuoteCode.scss";

const QuoteCode: FunctionComponent = (): JSX.Element => {
	return (
		<section className="quote__code">
			<Title title="Quote Code" />
			<div className="quote__code-content" data-aos="fade-up">
				<code>
					<span>do</span>
					{` {`}
				</code>
				<code className="quote__code-content__str-one">{`"your best"`}</code>
				<code>
					{`}`} <span>while</span>
					{" ("}
					<span className="quote__code-content__str-two">
						"you still have the time"
					</span>
					{`);`}
				</code>
			</div>
		</section>
	);
};

export default QuoteCode;
