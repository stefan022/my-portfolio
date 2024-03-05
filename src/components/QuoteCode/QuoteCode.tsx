import { FunctionComponent, JSX } from "preact";

import { Title } from "../../components";

const QuoteCode: FunctionComponent = (): JSX.Element => {
	return (
		<section className="flex items-center justify-center flex-col relative z-10 gap-2.5 mb-32">
			<Title title="Quote Code" />
			<div className="flex flex-col" data-aos="fade-up">
				<code>
					<span>do</span>
					{` {`}
				</code>
				<code className="pl-6 text-gray-300">{`"your best"`}</code>
				<code>
					{`}`} <span>while</span>
					{" ("}
					<span className="text-gray-300 bg-none">
						"you still have the time"
					</span>
					{`);`}
				</code>
			</div>
		</section>
	);
};

export default QuoteCode;
