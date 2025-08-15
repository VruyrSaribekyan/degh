import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляция отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Կապ մեզ հետ</h1>
          <p className={styles.heroSubtitle}>
            Մենք այստեղ ենք օգնելու ձեզ 24/7
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.contactIcon}>📞</div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📍</div>
                <h3 className={styles.cardTitle}>Հասցե</h3>
                <p className={styles.cardContent}>
                  Ծիծեռնակաբերդի 1-ին նրբ., տ. 15/1<br/>
                  Երևան 0082, Հայաստան
                </p>
                <div className={styles.cardExtra}>
                  <span>Գլխավոր գրասենյակ</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📞</div>
                <h3 className={styles.cardTitle}>Հեռախոս</h3>
                <p className={styles.cardContent}>
                  <a href="tel:+37410123456">+374 10 123 456</a><br/>
                  <a href="tel:+37410123457">+374 10 123 457</a>
                </p>
                <div className={styles.cardExtra}>
                  <span>Աշխատանքային ժամեր՝ 9:00-21:00</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📧</div>
                <h3 className={styles.cardTitle}>Էլ. փոստ</h3>
                <p className={styles.cardContent}>
                  <a href="mailto:info@pharmacy.am">info@pharmacy.am</a><br/>
                  <a href="mailto:support@pharmacy.am">support@pharmacy.am</a>
                </p>
                <div className={styles.cardExtra}>
                  <span>Արագ պատասխան 24 ժամվա ընթացքում</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>🕐</div>
                <h3 className={styles.cardTitle}>Աշխատանքային ժամեր</h3>
                <p className={styles.cardContent}>
                  Երկուշաբթի - Ուրբաթ: 8:00 - 22:00<br/>
                  Շաբաթ - Կիրակի: 9:00 - 20:00
                </p>
                <div className={styles.cardExtra}>
                  <span>Արտակարգ դեպքերի համար՝ 24/7</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Ուղարկեք հաղորդագրություն</h2>
                <p className={styles.formDescription}>
                  Լրացրեք ձեր տվյալները և մենք կապ կհաստատենք ձեզ հետ
                </p>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>Անուն Ազգանուն *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                        placeholder="Մուտքագրեք ձեր անունը"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>Հեռախոս *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                        placeholder="+374 XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Էլ. փոստ *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>Թեմա *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">Ընտրեք թեմա</option>
                      <option value="general">Ընդհանուր հարց</option>
                      <option value="order">Պատվեր</option>
                      <option value="delivery">Առաքում</option>
                      <option value="consultation">Խորհրդատվություն</option>
                      <option value="complaint">Բողոք</option>
                      <option value="partnership">Գործակցություն</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Հաղորդագրություն *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      rows={5}
                      required
                      placeholder="Նկարագրեք ձեր հարցը կամ խնդիրը..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Ուղարկվում է...
                      </>
                    ) : (
                      'Ուղարկել հաղորդագրությունը'
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✅ Ձեր հաղորդագրությունը հաջողությամբ ուղարկվեց։ Մենք կապ կհաստատենք ձեզ հետ 24 ժամվա ընթացքում։
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ❌ Սխալ է տեղի ունեցել։ Խնդրում ենք նորից փորձել։
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Մեր տեղակայությունը</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>🗺️</div>
              <p>Ինտերակտիվ քարտեզ</p>
              <span>Ծիծեռնակաբերդի 1-ին նրբ., տ. 15/1, Երևան</span>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className={styles.branchSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Մեր մասնաճյուղերը</h2>
          <div className={styles.branchGrid}>
            <div className={styles.branchCard}>
              <div className={styles.branchHeader}>
                <h3 className={styles.branchName}>Կենտրոնական մասնաճյուղ</h3>
                <span className={styles.branchStatus}>Բաց</span>
              </div>
              <div className={styles.branchInfo}>
                <p className={styles.branchAddress}>📍 Նալբանդյան 25, Երևան</p>
                <p className={styles.branchPhone}>📞 +374 10 111 111</p>
                <p className={styles.branchHours}>🕐 9:00 - 22:00 (Ամեն օր)</p>
              </div>
              <div className={styles.branchFeatures}>
                <span className={styles.feature}>24/7 Արտակարգ</span>
                <span className={styles.feature}>Առաքում</span>
                <span className={styles.feature}>Խորհրդատվություն</span>
              </div>
            </div>

            <div className={styles.branchCard}>
              <div className={styles.branchHeader}>
                <h3 className={styles.branchName}>Ավան մասնաճյուղ</h3>
                <span className={styles.branchStatus}>Բաց</span>
              </div>
              <div className={styles.branchInfo}>
                <p className={styles.branchAddress}>📍 Ավանի 5-րդ թաղ., 10/5</p>
                <p className={styles.branchPhone}>📞 +374 10 222 222</p>
                <p className={styles.branchHours}>🕐 8:00 - 21:00 (Ամեն օր)</p>
              </div>
              <div className={styles.branchFeatures}>
                <span className={styles.feature}>Պարկինգ</span>
                <span className={styles.feature}>Առաքում</span>
              </div>
            </div>

            <div className={styles.branchCard}>
              <div className={styles.branchHeader}>
                <h3 className={styles.branchName}>Մալաթիա մասնաճյուղ</h3>
                <span className={styles.branchStatus}>Բաց</span>
              </div>
              <div className={styles.branchInfo}>
                <p className={styles.branchAddress}>📍 Մալաթիա-Սեբաստիա, Մ. Մաշտոցի 33</p>
                <p className={styles.branchPhone}>📞 +374 10 333 333</p>
                <p className={styles.branchHours}>🕐 9:00 - 20:00 (Ամեն օր)</p>
              </div>
              <div className={styles.branchFeatures}>
                <span className={styles.feature}>Խորհրդատվություն</span>
                <span className={styles.feature}>Առաքում</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;