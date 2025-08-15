import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Մեր Մասին</h1>
          <p className={styles.heroSubtitle}>
            Վստահելի գործընկեր ձեր առողջության համար
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.medicIcon}>⚕️</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Մեր Առաքելությունը</h2>
              <p className={styles.missionDescription}>
                Մենք նվիրված ենք ապահովելու բարձրորակ բժշկական ծառայություններ և 
                դեղագործական արտադրանք մեր հաճախորդների համար: Մեր նպատակն է 
                դառնալ առողջապահության ոլորտում առաջատար ընկերությունը Հայաստանում:
              </p>
              <div className={styles.missionStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>տարվա փորձ</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>բավարարված հաճախորդ</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>դեղամիջոց</span>
                </div>
              </div>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageIcon}>🏥</span>
                  <p>Ժամանակակից բժշկական կենտրոն</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Մեր Արժեքները</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💊</div>
              <h3 className={styles.valueTitle}>Որակ</h3>
              <p className={styles.valueDescription}>
                Միայն սերտիֆիկացված և ստուգված դեղամիջոցներ՝ 
                միջազգային չափանիշներին համապատասխան:
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔬</div>
              <h3 className={styles.valueTitle}>Նորարարություն</h3>
              <p className={styles.valueDescription}>
                Կիրառում ենք ամենաժամանակակից տեխնոլոգիաները 
                և բժշկական նվաճումները:
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3 className={styles.valueTitle}>Հոգատարություն</h3>
              <p className={styles.valueDescription}>
                Յուրաքանչյուր հաճախորդի հետ անհատական մոտեցում 
                և մանրակրկիտ ուշադրություն:
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌟</div>
              <h3 className={styles.valueTitle}>Վստահություն</h3>
              <p className={styles.valueDescription}>
                15 տարի կազմում ենք մեր հաճախորդների 
                վստահությունը և հարգանքը:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Մեր Թիմը</h2>
          <p className={styles.teamDescription}>
            Մեր թիմը բաղկացած է փորձառու բժիշկներից, դեղագետներից և 
            առողջապահության ոլորտի մասնագետներից:
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.memberIcon}>👨‍⚕️</span>
              </div>
              <h4 className={styles.memberName}>Դր. Արմեն Սարգսյան</h4>
              <p className={styles.memberRole}>Գլխավոր բժիշկ</p>
              <p className={styles.memberExp}>20+ տարվա փորձ</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.memberIcon}>👩‍⚕️</span>
              </div>
              <h4 className={styles.memberName}>Դր. Անահիտ Ավագյան</h4>
              <p className={styles.memberRole}>Դեղագետ</p>
              <p className={styles.memberExp}>15+ տարվա փորձ</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.memberIcon}>👨‍💼</span>
              </div>
              <h4 className={styles.memberName}>Վահան Պետրոսյան</h4>
              <p className={styles.memberRole}>Վաճառքի մենեջեր</p>
              <p className={styles.memberExp}>12+ տարվա փորձ</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={styles.historyContent}>
              <h2 className={styles.sectionTitle}>Մեր Պատմությունը</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2009</div>
                  <div className={styles.timelineContent}>
                    <h4>Հիմնադրում</h4>
                    <p>Ընկերության հիմնադրումը և առաջին դեղատների բացումը</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2015</div>
                  <div className={styles.timelineContent}>
                    <h4>Ընդլայնում</h4>
                    <p>Գործունեության ընդլայնում և նոր մասնաճյուղերի բացում</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2020</div>
                  <div className={styles.timelineContent}>
                    <h4>Թվայնացում</h4>
                    <p>Օնլայն պլատֆորմի և առաքման ծառայության գործարկում</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2024</div>
                  <div className={styles.timelineContent}>
                    <h4>Ապագա</h4>
                    <p>Նոր նպատակներ և առողջապահության ոլորտի զարգացում</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.historyImage}>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageIcon}>📈</span>
                  <p>15 տարի անընդհատ զարգացում</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Միացեք մեր ընտանիքին</h2>
            <p className={styles.ctaDescription}>
              Դառնալու մեր հաճախորդ և ապահովեք ձեր առողջության համար 
              լավագույն որակի բժշկական ծառայություններ:
            </p>
            <button className={styles.ctaButton}>
              Կապ մեզ հետ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;