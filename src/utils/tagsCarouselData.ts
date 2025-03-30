import kids from "../assets/images/tagsCarousel/kids.jpg";
import families from "../assets/images/tagsCarousel/families.jpg";
import couples from "../assets/images/tagsCarousel/couples.jpg";
import mountains from "../assets/images/tagsCarousel/montains.jpg";
import beach from "../assets/images/tagsCarousel/beach.jpg";
import { TagsCarouselDataType } from "@/types/types";

const tagsCarouselData: TagsCarouselDataType[] = [
	{
		title: "kids",
		code: "1",
		photo: kids,
		text: "Planning the perfect family getaway where kids and parents can both have an amazing time? Explore our curated selection of vacations designed with children in mind. From exciting activities and dedicated kids' clubs to moments of relaxation for adults, our destinations promise unforgettable memories for the whole family in a stress-free setting.",
	},
	{
		title: "families",
		code: "3",
		photo: families,
		text: "Discover our handpicked selection of family vacations with kids’ clubs! Enjoy a perfect getaway where both children and adults can have fun and relax in complete peace of mind. Our idyllic destinations offer a wide range of exciting activities to entertain the little ones, allowing parents to indulge in some well-deserved relaxation.",
	},
	{
		title: "couples",
		code: "2",
		photo: couples,
		text: "Dreaming of an escape with your partner to a tropical paradise where the sun meets the sea? Let yourself be captivated by our exclusive destinations, perfect for an unforgettable honeymoon. Whether you want to unwind on pristine sandy beaches, explore exotic islands, or discover cities brimming with romantic charm, we’ve handpicked exceptional locations just for you.",
	},
	{
		title: "mountains",
		code: "5",
		photo: mountains,
		text: "Dreaming of a getaway to the heart of the mountains, where nature's beauty takes your breath away? Discover our exclusive mountain destinations, perfect for an unforgettable escape. Whether you’re looking to relax in a cozy chalet, embark on thrilling outdoor adventures, or soak in panoramic views of majestic peaks, we’ve carefully selected exceptional locations to make your alpine dreams come true.",
	},
	{
		title: "beach",
		code: "6",
		photo: beach,
		text: "Longing for a seaside escape where golden sands meet crystal-clear waters? Explore our handpicked beach destinations, perfect for an unforgettable getaway. Whether you dream of lounging under the sun, diving into vibrant marine life, or enjoying the gentle sound of the waves, we’ve selected exceptional locations to make your coastal retreat truly magical.",
	},
];

export { tagsCarouselData };
