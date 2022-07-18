import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";
import WhyChooseUsCard from "./WhyChooseUsCard";

const items = [
  {
    title: "Highly experienced Team",
    description:
      "Great ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
  {
    title: "Large Client Networks",
    description:
      "Awesome ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
  {
    title: "Face-to-face interviews",
    description:
      "Super ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
  {
    title: "Legal Services",
    description:
      "Intelligent ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
  {
    title: "Accounting Servies",
    description:
      "Smart ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
  {
    title: "Design & Build Services",
    description:
      "Great ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-6xl mx-auto space-y-16 pt-16">
      <div className="text-center">
        <Heading>Why choose us</Heading>
        <Paragraph>
          We have decades of experience, having successfully recruited across
          the globle for many years.
        </Paragraph>
      </div>
      <ul className="grid grid-cols-3 gap-16">
        {items.map((item) => {
          return <WhyChooseUsCard item={item} />;
        })}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
