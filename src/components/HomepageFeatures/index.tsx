import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built for Scalability',
    Svg: require('@site/static/img/scalable_feature.svg').default,
    description: (
      <>
          Microservices architecture with NATS and Cassandra ensures high availability and efficient scaling.
      </>
    ),
  },
  {
    title: 'Privacy & Security First',
    Svg: require('@site/static/img/privacy_feature.svg').default,
    description: (
      <>
          End-to-end encryption, private cloud deployment, and full administrative control over infrastructure.
      </>
    ),
  },
  {
    title: 'Cross-Platform Experience',
    Svg: require('@site/static/img/flutter_feature.svg').default,
    description: (
      <>
          Flutter-powered clients provide a unified experience across mobile, desktop, and web platforms.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): ReactNode {
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


