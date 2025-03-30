import credit from "../assets/images/whyus/credit-card-pay-visa-funds-svgrepo-com.svg";
import cards from "../assets/images/whyus/papers-stack-svgrepo-com.svg";
import man from "../assets/images/whyus/man-talking-avatar-svgrepo-com.svg";
import clock from "../assets/images/whyus/clock-two-svgrepo-com.svg";
import incident from "../assets/images/whyus/injury-2-svgrepo-com.svg";
import trip from "../assets/images/whyus/travel-suitcase-3-svgrepo-com.svg";
import tick from "../assets/images/whyus/tick-svgrepo-com.svg";

const headerText: string = "Simple and easy!";

const blocksText: { icon: string; text: string }[] = [
	{ icon: clock, text: "Because you would like to be there already, we save you from wasting time in your research." },
	{ icon: credit, text: "Pay with complete peace of mind and at your own pace: credit card, 4x or holiday vouchers." },
	{ icon: man, text: "Advisors available before, during and after your stay, it’s possible!" },
	{ icon: incident, text: "An unexpected event? Your advisor is there to handle it." },
	{ icon: trip, text: "Specialists for each of your escapes..." },
	{ icon: cards, text: "As many unique destinations and experiences as there are travel desires." },
];

const footerText: { icon: string; text: string } = { icon: tick, text: "And still  200 advisors in more than 20 agencies to welcome you near you !" };

export { headerText, blocksText, footerText };
