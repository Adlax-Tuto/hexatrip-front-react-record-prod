import { RegionsCarouselDataType } from "@/types/types";
import alpes from "../assets/images/regionsCarousel/alpes.jpg";
import occitanie from "../assets/images/regionsCarousel/occitanie.jpg";
import provence from "../assets/images/regionsCarousel/provence.jpg";

const regionsCarouselData: RegionsCarouselDataType[] = [
	{ name: "the alps", photo: alpes, region: 1 },
	{ name: "occitanie", photo: occitanie, region: 11 },
	{ name: "provence", photo: provence, region: 13 },
];

export { regionsCarouselData };
