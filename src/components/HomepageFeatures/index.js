import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gammasoft is...',
    description: (
      <>
      • The nickname of <a href="https://github.com/yfiumefreddo">Yves Fiumefreddo</a>.
      <br/>• More than thirty years of passion for high technology especially in development (C++, C#, objective-c, ...).
      <br/>• Object-oriented programming is more than a mindset.
      </>
    ),
  },
  {
    description: (
      <>
      <a href="."><img src="pictures/gammasoft_256.png" alt="gammasoft"/></a>
      <br/>
      </>
    ),
  },
  {
    title: '... also',
    description: (
      <>
      • The C++ is my favorite language, naturaly followed by C#.
      <br/>• I like Apple products for their simplicity of use but I also admire the technologies of Microsoft for their efficiency as for example the .Net Framework.
      <br/>• The name Gammasoft was created by analogy with Microsoft. I know... but I was young at this time.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('row')}>
      <div className="text--center">
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
