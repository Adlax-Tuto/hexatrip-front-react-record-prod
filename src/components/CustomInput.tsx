import { Input } from "./ui/input";
import { Label } from "./ui/label";

type CustomInputProps = {
	label?: string;
	name: string;
	type: string;
	defaultValue?: string;
	classname?: string;
	disabled?: boolean;
	required?: boolean;
	placeholder?: string;
	nolabel?: boolean;
};

const CustomInput = ({ label, name, type, defaultValue, classname, disabled, required, placeholder, nolabel }: CustomInputProps) => {
	return (
		<div className={`w-[200px] ${classname}`}>
			{!nolabel && (
				<Label className="capitalize w-full" htmlFor={name}>
					{label || name}
				</Label>
			)}
			<Input
				name={name}
				id={name}
				type={type}
				defaultValue={defaultValue}
				className="w-full"
				disabled={disabled}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default CustomInput;
