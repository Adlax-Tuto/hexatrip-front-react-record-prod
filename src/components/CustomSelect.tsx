import { StringMapCodes } from "@/types/types";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type CustomSelectProps = {
	name: string;
	label?: string;
	defaultValue?: string;
	options: StringMapCodes;
};

const CustomSelect = ({ name, label, defaultValue, options }: CustomSelectProps) => {
	return (
		<div className="w-[200px]">
			<Label className="capitalize w-full" htmlFor={name}>
				{label || name}
			</Label>
			<Select defaultValue={defaultValue} name={name}>
				<SelectTrigger className="w-full" id={name}>
					<SelectValue></SelectValue>
				</SelectTrigger>
				<SelectContent>
					{options.map(({ name, code }) => (
						<SelectItem key={name} value={code.toString()}>
							{name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
export default CustomSelect;
