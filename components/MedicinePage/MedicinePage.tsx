import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './MedicinePage.module.scss';
import { medicinesData } from '../../pages/reid/header/Header';

const MedicinePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('info');
  const [quantity, setQuantity] = useState(1);
//@ts-ignore
  const medicine = medicinesData.find(med => med.id === parseInt(id));

  if (!medicine) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>❓</div>
        <h1>Դեղը չի գտնվել</h1>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Հետ
        </button>
      </div>
    );
  }

  const handleOrder = () => {
    alert(`${medicine.name} պատվիրված է (${quantity} հատ)`);
  };

  return (
    <>
      <Head>
        <title>{medicine.name} - MedPharm</title>
        <meta name="description" content={medicine.description} />
      </Head>

      <div className={styles.medicinePage}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbs}>
            <span onClick={() => router.push('/')} className={styles.breadcrumbLink}>
              Գլխավոր
            </span>            
            <span className={styles.separator}>→</span>
            <span className={styles.breadcrumbCurrent}>{medicine.name}</span>
          </nav>

          <div className={styles.medicineContent}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.medicineIcon}>💊</span>
                  </div>
                </div>
                <div className={styles.imageLabel}>{medicine.name}</div>
              </div>
              
              <div className={styles.imageInfo}>
                <div className={styles.infoRow}>
                  <strong>Արտադրող:</strong>
                  <span>{medicine.manufacturer}</span>
                </div>
                <div className={styles.infoRow}>
                  <strong>Կատեգորիա:</strong>
                  <span>{medicine.category}</span>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.header}>
                <h1 className={styles.medicineName}>{medicine.name}</h1>
                <p className={styles.genericName}>{medicine.genericName}</p>
                <p className={styles.description}>{medicine.description}</p>
              </div>

              <div className={styles.priceSection}>
                <div className={styles.priceHeader}>
                  <div className={styles.price}>
                    <span className={styles.amount}>{medicine.price.toLocaleString()}</span>
                    <span className={styles.currency}>֏</span>
                  </div>
                  <div className={styles.availability}>
                    <span className={`${styles.status} ${medicine.inStock ? styles.inStock : styles.outOfStock}`}>
                      {medicine.inStock ? '✓ Առկա է' : '✗ Առկա չէ'}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🚚</span>
                  <span className={styles.featureText}>
                    {medicine.hasDelivery ? 'Առաքումը հասանելի է' : 'Միայն ինքնահավաք'}
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>📋</span>
                  <span className={styles.featureText}>Ռեցեպտ չի պահանջվում</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🔒</span>
                  <span className={styles.featureText}>Որակի երաշխիք</span>
                </div>
              </div>

              <div className={styles.orderSection}>
                <div className={styles.quantitySelector}>
                  <label>Քանակը:</label>
                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className={styles.quantityBtn}
                    >
                      −
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.totalPrice}>
                  <span className={styles.totalLabel}>Ընդհանուր:</span>
                  <strong>{(medicine.price * quantity).toLocaleString()}֏</strong>
                </div>

                <button 
                  className={styles.orderButton}
                  onClick={handleOrder}
                  disabled={!medicine.inStock}
                >
                  Պատվիրել
                  <span className={styles.phoneIcon}>📞</span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.tabsSection}>
            <div className={styles.tabsHeader}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'info' ? styles.active : ''}`}
                onClick={() => setActiveTab('info')}
              >
                <span className={styles.tabIcon}>📋</span>
                Տեղեկատու
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'instruction' ? styles.active : ''}`}
                onClick={() => setActiveTab('instruction')}
              >
                <span className={styles.tabIcon}>📖</span>
                Հրահանգ
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'delivery' ? styles.active : ''}`}
                onClick={() => setActiveTab('delivery')}
              >
                <span className={styles.tabIcon}>🚚</span>
                Առաքում
              </button>
            </div>

            <div className={styles.tabsContent}>
              {activeTab === 'info' && (
                <div className={styles.tabPanel}>
                  <h3>Հիմնական տեղեկատվություն</h3>
                  <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                      <strong>Ակտիվ նյութ:</strong>
                      <span>{medicine.genericName}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <strong>Արտադրող:</strong>
                      <span>{medicine.manufacturer}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <strong>Կատեգորիա:</strong>
                      <span>{medicine.category}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <strong>Թողարկման ձև:</strong>
                      <span>Հաբեր / Ամպուլներ</span>
                    </div>
                    <div className={styles.infoItem}>
                      <strong>Պահպանման պայմաններ:</strong>
                      <span>Ջերմաստիճանը չի գերազանցում 25°C</span>
                    </div>
                    <div className={styles.infoItem}>
                      <strong>Պիտանելիության ժամկետ:</strong>
                      <span>3 տարի</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'instruction' && (
                <div className={styles.tabPanel}>
                  <h3>Կիրառման հրահանգ</h3>
                  <div className={styles.instructionContent}>
                    <h4>Ցուցումներ</h4>
                    <p>{medicine.instruction}</p>
                    
                    <h4>Կիրառման եղանակ և դոզաներ</h4>
                    <p>Դոզան սահմանվում է բժշկի կողմից անհատապես՝ կախված հիվանդության ծանրությունից, հիվանդի տարիքից և դեղի հանդուրժողությունից:</p>
                    
                    <h4>Հակացուցումներ</h4>
                    <p>Բաղադրիչների նկատմամբ գերզգայունություն, հղիություն և կերակրում:</p>
                    
                    <h4>Կողմնակի ազդեցություններ</h4>
                    <p>Հազվադեպ դեպքերում հնարավոր են ալերգիկ ռեակցիաներ: Կողմնակի ազդեցությունների առաջացման դեպքում դիմեք բժշկի:</p>
                    
                    <div className={styles.warning}>
                      <strong>⚠️ Ուշադրություն:</strong> Մինչև կիրառելը պարտադիր խորհրդակցեք բժշկի հետ!
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className={styles.tabPanel}>
                  <h3>Առաքման պայմաններ</h3>
                  <div className={styles.deliveryInfo}>
                    <div className={styles.deliveryOption}>
                      <div className={styles.deliveryHeader}>
                        <span className={styles.deliveryIcon}>🚚</span>
                        <h4>Կուրիերային առաքում</h4>
                      </div>
                      <div className={styles.deliveryDetails}>
                        <p>Առաքում Երևանում - <strong>անվճար</strong> 5000֏-ից սկսած պատվերի դեպքում</p>
                        <p>Առաքման ժամանակը: 1-3 աշխատանքային օր</p>
                      </div>
                    </div>
                    
                    <div className={styles.deliveryOption}>
                      <div className={styles.deliveryHeader}>
                        <span className={styles.deliveryIcon}>📦</span>
                        <h4>Ինքնահավաք</h4>
                      </div>
                      <div className={styles.deliveryDetails}>
                        <p>Վերցրեք մեր ցանկացած դեղատնից</p>
                        <p>Պատրաստության ժամանակը: 2 ժամվա ընթացքում</p>
                      </div>
                    </div>
                    
                    <div className={styles.deliveryOption}>
                      <div className={styles.deliveryHeader}>
                        <span className={styles.deliveryIcon}>🏃</span>
                        <h4>Էքսպրես առաքում</h4>
                      </div>
                      <div className={styles.deliveryDetails}>
                        <p>Առաքում 2 ժամվա ընթացքում - <strong>1000֏</strong></p>
                        <p>Հասանելի է Երևանի կենտրոնում</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicinePage;