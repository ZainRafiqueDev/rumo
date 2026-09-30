interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 49,
        title: "Rumo Pro",
        benefits: [
            "Predictive lead scoring",
            "Automated content creation",
            "Personalized messaging at scale",
            "Customer retention tools",
        ],
        id: 1,
        oneliner: "AI-powered sales tools for focused revenue growth"
    },
    {
        price: 99,
        title: "Rumo Enterprise",
        benefits: [
            "Everything In Pro Tier, and:",
            "Data-driven recommendations",
            "Customizable sales workflows",
            "Real-time alerts and notifications",
        ],
        id: 2,
        oneliner: "Comprehensive sales optimization for accelerated revenue gains"
    },
]

export const comparisonRows: { feature: string; pro: boolean | string; enterprise: boolean | string }[] = [
    { feature: "Predictive lead scoring", pro: true, enterprise: true },
    { feature: "Automated content creation", pro: true, enterprise: true },
    { feature: "Personalized messaging at scale", pro: true, enterprise: true },
    { feature: "Customer retention tools", pro: true, enterprise: true },
    { feature: "CRM integrations", pro: "2 CRMs", enterprise: "Unlimited" },
    { feature: "Data-driven recommendations", pro: false, enterprise: true },
    { feature: "Customizable sales workflows", pro: false, enterprise: true },
    { feature: "Real-time alerts and notifications", pro: false, enterprise: true },
    { feature: "Conversation intelligence", pro: "Basic", enterprise: "Advanced" },
    { feature: "AI forecasting", pro: false, enterprise: true },
    { feature: "SSO & SCIM", pro: false, enterprise: true },
    { feature: "API access", pro: "Standard limits", enterprise: "Extended limits" },
    { feature: "EU data residency", pro: false, enterprise: true },
    { feature: "Support", pro: "Email & chat", enterprise: "Dedicated CSM + Slack" },
]

export default pricingCards
