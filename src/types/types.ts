export type Link = {
	ref: string;
	label: string;
};

export type HotlineDataType = { src: string; text: string };

export type RegionsCarouselDataType = {
	name: string;
	photo: string;
	region: number;
};

export type TagsCarouselDataType = {
	title: string;
	code: string;
	photo: string;
	text: string;
};

export type Agency = {
	_id: string;
	address: string;
	phone: string;
	photo: string;
	title: string;
	email: string;
};

export type Advisor = {
	_id: string;
	name: string;
	tags: string[];
	image: string;
	present: string;
	from: string;
	desc: string;
	phone: string;
	email: string;
};

export type Trip = {
	_id: string;
	title: string;
	summary: string;
	region: number;
	town: string;
	desc: string;
	category: string;
	images: string[];
	duration: number;
	adultPrice: number;
	youngPrice: number;
	createdAt: string;
	updateddAt: string;
	tags: string[];
};

export type FiltersParams = {
	town?: string;
	duration?: string;
	category?: string;
	price?: string;
	region?: string;
	tags?: string;
};

export type StringMapCodes = { name: string; code: number }[];

export type ResearchLoaderType = {
	data: Trip[] | null;
	params: FiltersParams;
};

export type Profile = {
	_id: string;
	username: string;
	email: string;
	firstname: string;
	familyname: string;
	phone: string;
	address: string;
	zip: string;
	town: string;
	country: string;
};

export type Order = {
	_id: string;
	trip: Trip;
	quantity: number;
	kids: number;
	adults: number;
	firstname: string;
	familyname: string;
	email: string;
	phone: string;
	address: string;
	zip: string;
	town: string;
	country: string;
	title: string;
};

export type ProfilePageLoaderType = Profile & { orders: Order[] };

export type ProfileFormData = {
	firstname?: string;
	familyname?: string;
	address?: string;
	town?: string;
	zip?: string;
	country?: string;
	phone?: string;
};
