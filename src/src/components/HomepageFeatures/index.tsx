import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy.svg").default,
    description: <>DynamoQL ensures simplicity in DynamoDB integration, with easy-to-manage schemas and an intuitive interface for a seamless developer experience.</>,
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus.svg").default,
    description: <>With a High-Level API, DynamoQL lets you focus on your application buisness logic, and we&apos;ll do the chores.</>,
  },
  {
    title: "First-class TypeScript support",
    Svg: require("@site/static/img/ts.svg").default,
    description: <>DynamoQL seamlessly integrates advanced type safety into DynamoDB workflows, ensuring a smooth development journey without compromise.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
