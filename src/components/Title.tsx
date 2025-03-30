const Title = ({ text, classname }: { text: string; classname?: string }) => {
	return <div className={`${classname || "text-4xl capitalize my-8"}`}>{text}</div>;
};
export default Title;
