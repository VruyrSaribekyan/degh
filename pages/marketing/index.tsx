/**
 * vendor
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import classNames from 'classnames'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'

/**
 * styles
 */
import '@nextcss/reset'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import globalStyle from './global.module.scss'
import introStyle from './intro.module.scss'
import btnStyle from './btn.module.scss'
import headerStyle from './header.module.scss'
import advaStyle from './adva.module.scss'
import suitStyle from './suit.module.scss'
import adva2Style from './adva2.module.scss'
import expertStyle from './expert.module.scss'
import programStyle from './program.module.scss'
import payStyle from './pay.module.scss'
import orderStyle from './order.module.scss'
import licenseStyle from './license.module.scss'
import reviewsStyle from './reviews.module.scss'
import qaStyle from './qa.module.scss'

const land_folder = `https://4businessmen.ru/wp-content/uploads/2024/08`;

const fontFace = `
@font-face {
  font-family: "Gilroy";
  src: url("/assets/fonts/Gilroy/Gilroy-Bold.eot");
  src: url("/assets/fonts/Gilroy/Gilroy-Bold.eot?#iefix") format("embedded-opentype"),
    url("/assets/fonts/Gilroy/Gilroy-Bold.woff2") format("woff2"),
    url("/assets/fonts/Gilroy/Gilroy-Bold.woff") format("woff"),
    url("/assets/fonts/Gilroy/Gilroy-Bold.ttf") format("truetype"),
    url("/assets/fonts/Gilroy/Gilroy-Bold.svg#Gilroy-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilroy";
  src: url("/assets/fonts/Gilroy/Gilroy-Medium.eot");
  src: url("/assets/fonts/Gilroy/Gilroy-Medium.eot?#iefix") format("embedded-opentype"),
    url("/assets/fonts/Gilroy/Gilroy-Medium.woff2") format("woff2"),
    url("/assets/fonts/Gilroy/Gilroy-Medium.woff") format("woff"),
    url("/assets/fonts/Gilroy/Gilroy-Medium.ttf") format("truetype"),
    url("/assets/fonts/Gilroy/Gilroy-Medium.svg#Gilroy-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilroy";
  src: url("/assets/fonts/Gilroy/Gilroy-Semibold.eot");
  src: url("/assets/fonts/Gilroy/Gilroy-Semibold.eot?#iefix") format("embedded-opentype"),
    url("/assets/fonts/Gilroy/Gilroy-Semibold.woff2") format("woff2"),
    url("/assets/fonts/Gilroy/Gilroy-Semibold.woff") format("woff"),
    url("/assets/fonts/Gilroy/Gilroy-Semibold.ttf") format("truetype"),
    url("/assets/fonts/Gilroy/Gilroy-Semibold.svg#Gilroy-Semibold") format("svg");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilroy";
  src: url("/assets/fonts/Gilroy/Gilroy-Regular.eot");
  src: url("/assets/fonts/Gilroy/Gilroy-Regular.eot?#iefix") format("embedded-opentype"),
    url("/assets/fonts/Gilroy/Gilroy-Regular.woff2") format("woff2"),
    url("/assets/fonts/Gilroy/Gilroy-Regular.woff") format("woff"),
    url("/assets/fonts/Gilroy/Gilroy-Regular.ttf") format("truetype"),
    url("/assets/fonts/Gilroy/Gilroy-Regular.svg#Gilroy-Regular") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`

interface Reviews {
  image: string
  name: string
  age: string
  content: string
}

const reviews: Reviews[] = [
  {
    image: `${land_folder}/rev1.png`,
    name: 'Меркулов Александр',
    age: '22 года',
    content:
      'Хотелось найти доп заработок, но чтобы с минимумом вложений времени, так сказать. Решил попробовать маркетплейсы, но понял, что самому разбираться неохота и лучше пойти на курс, где уже все по полочкам разложено. И да, все четко и понятно, уже, даже, продал первую партию. ',
  },
  {
    image: `${land_folder}/rev2.png`,
    name: 'Ульянов Дмитрий',
    age: '39 лет',
    content:
      'Интернет-магазин у меня был несколько лет назад, но тогда что-то то одно, то второе, прибыли особо не было. Как-то не хотел толком вникать и в итоге забросил, а тут с ковидом, как раз,  времени полно. И в итоге, пока учился на программе, уже понял, в чем раньше были ошибки, спасибо ребятам, реально помогло.',
  },
  {
    image: `${land_folder}/rev3.png`,
    name: 'Маркелова София',
    age: '26 года',
    content:
      'В декрете сложно самоорганизоваться, но работать все хочется, так что дошли руки до маркетплейсов) Часто заказываю что-то на вайлдберис и хотела попробовать сделать свой магазин, но непонятно было, с чего начинать и как, вообще, это сделать. Курс очень помог, сейчас продаю чай, все счастливы!)',
  },
  {
    image: `${land_folder}/rev4.png`,
    name: 'Ромашев Иван',
    age: '31 года',
    content:
      'Получил от курса все, что хотел. Разобрался, и с регистрацией бизнеса, и с брендом, и как аналитику вести. И удобно, что можно с телефона смотреть, время экономит.',
  },
  {
    image: `${land_folder}/rev5.png`,
    name: 'Анохин Стас',
    age: '28 года',
    content:
      'Курс помог разобраться, как работать с отзывам, чтобы повысить продажи и поддерживать спрос. Интересно было узнать про логистику поставок, думаю, пригодится скоро, как раз. Спасибо.',
  },
]

interface FAQ {
  question: string
  answer: string
}

const questions: FAQ[] = [
  {
    question: 'Как часто Маркетплейс выплачивает деньги?',
    answer: 'Раз в неделю, по понедельникам.',
  },
  {
    question: 'Сколько нужно денег, чтобы начать продавать на Маркетплейсе?',
    answer:
      'Бюджет может быть разным. На свою первую партию наш эксперт потратил 6000 руб., но лучше ориентироваться на 20-40 тыс. руб.',
  },
  {
    question: 'Можно продавать товар, который уже продается на Маркетплейсе?',
    answer:
      'Да, конечно. Главное, чтобы ваша карточка товара была оформлена в вашем стиле, с уникальным названием и изображением товара.',
  },
  {
    question: 'Я не из Москвы, как доставить товар до склада Маркетплейса?',
    answer:
      'Всё проще чем кажется: оформите поставку до склада в Москве любой транспортной компанией.',
  },
]

interface Suit {
  image: string
  content: string
}

const suit: Suit[] = [
  {
    image: `${land_folder}/ic1.svg`,
    content: 'Дополнительный доход \n при минимальной \n затрате времени',
  },
  {
    image: `${land_folder}/ic2.svg`,
    content: 'Стабильную работу \n с зарплатой \n от 120 000 ₽',
  },
  {
    image: `${land_folder}/ic3.svg`,
    content: 'Увеличение продаж \n в текущем бизнесе \n на 70–90%',
  },
  {
    image: `${land_folder}/ic4.svg`,
    content: 'Свой бизнес \n на растущем рынке',
  },
  {
    image: `${land_folder}/ic5.svg`,
    content: 'Зарабатывать \n удалённо в свободном \n графике',
  },
]

const Page: NextPage = () => {
  return (
    <IntlProvider locale='ru' defaultLocale='ru'>
      <div>
          <Head>
              <title>
                  Օնլայն կուրս Մարքետպլեյսների մենեջեր՝ վկայագրով WillSkill-ում
              </title>

              <meta
                  name='description'
                  content='Предлагаем вашему вниманию онлайн курс менеджер маркетплейсов для каждого на WillSkill.ru. После прохождения обучения мы выдаем сертификат и помогаем с трудоустройством.'
              />
              <meta name='format-detection' content='telephone=no'/>
              <style dangerouslySetInnerHTML={{__html: fontFace}}/>
          </Head>
          <div className={classNames(globalStyle['menedger-marketpleysov-a'])}>
          {/* header */}
          <header className={classNames(headerStyle.header)}>
            <div className='header__container container'>
              <a className='header__logo'>
                <picture>
                  <img
                      data-src={`${land_folder}/logo.svg`}
                      alt='logo'
                      className='lazyload'
                      width={329}
                      height={66}
                  />
                </picture>
              </a>
              <a href='/' className='header__logo'>
                <picture>
                  <img
                      data-src={`${land_folder}/logo.svg`}
                      alt='logo'
                      className='lazyload'
                      width={329}
                      height={66}
                  />
                </picture>
              </a>
            </div>
          </header>
          {/* main */}
            <main>
                {/* intro */}
                <section className={introStyle.intro}>
                    <div className='container'>
                        <div className='intro__body'>
                            {/* ներածություն ձախ */}
                            <div className='intro__content intro__content--mobile'>
                                <h1 className='section__title section__title_main'>
                                    Մարկետփլեյսների մենեջեր դասընթաց
                                </h1>
                                <p>Կրթություն՝ հասանելի յուրաքանչյուրին</p>
                            </div>
                            <div className='intro__content intro__content--left'>
                                <div className='intro__content-row'>
                                    <div className='intro__content-item'>
                                        Կօգնենք աշխատանքի տեղավորել
                                    </div>
                                    <div className='intro__content-item'>
                                        Կվերադարձնենք եկամտահարկը ուսման վճարից
                                    </div>
                                </div>
                                <div className='intro__content-row'>
                                    <div className='intro__content-item intro__content-item--black'>
                                        22 ժամ պրակտիկա իրական փորձագետների հետ
                                    </div>
                                </div>
                            </div>
                            {/* ներածություն աջ */}
                            <div className='intro__content intro__content--right'>
                                <div className='intro__content--desc'>
                                    <h1 className='section__title section__title_main'>
                                        Մարկետփլեյսների մենեջեր դասընթաց
                                    </h1>
                                    <p>Կրթություն՝ հասանելի յուրաքանչյուրին</p>
                                </div>
                                <div className='row'>
                                    <p>
                                        <span> 1620</span> գործող թափուր աշխատատեղեր շուկայում
                                    </p>
                                    <p>
                        <span>
                            <FormattedMessage
                                id='weeks'
                                defaultMessage='{count, plural, one {# неделя} few {# недели} many {# недель} other {# недель}}'
                            />
                        </span>
                                        {' '}
                                        մարկետփլեյսների ուսուցում
                                    </p>
                                    <p>
                                        Աշխատավարձը սկսած&nbsp;70&nbsp;000{' '}
                                        <span>մինչև&nbsp;154&nbsp;000 </span> ռուբլի
                                    </p>
                                </div>
                                <a
                                    href='#order-section'
                                    className={classNames(btnStyle.btn, btnStyle.red)}
                                >
                                    Փորձել
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* adva */}
                <section className={advaStyle.adva}>
                    <div className='container'>
                        <h2 className='section__title'>
                            Արդեն բոլորը լսել են
                            <br/>
                            մարկետփլեյսների մասին, բայց ի՞նչ դա կտա ձեզ:
                        </h2>
                        <div className='adva__body'>
                            <div className='adva__item'>
                                <p>
                                    Կկարողանաք սկսել ձեր բիզնեսը՝ ապրանքների վաճառքով, որի եկամուտը կկազմի
                                    սկսած 200 հազարից
                                </p>
                            </div>
                            <div className='adva__item'>
                                <p>
                                    Մասնագետների պահանջարկը շարունակում է աճել, ինչը նշանակում է, որ դուք հաստատ
                                    չեք մնա առանց աշխատանքի
                                </p>
                            </div>
                            <div className='adva__item'>
                                <p>
                                    Մեր քայլ առ քայլ ուղեցույցի օգնությամբ դուք կդառնաք ոչ միայն մենեջեր,
                                    այլև բարձր վարձատրվող մասնագետ՝ աշխատավարձով սկսած 120 հազարից
                                </p>
                            </div>
                            <div className='adva__item'>
                                <p>
                                    Եվ այս ամենը՝ բացարձակ զրոյից: Առանց փորձի, առանց բարձրագույն կրթության և
                                    առանց որևէ հմտությունների: Դուք պարզապես կանեք 1-2-3 և կստանաք արդյունք
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* suit */}
                <section className={suitStyle.suit}>
                    <div className='container'>
                        <div className='suit__body'>
                            <h2 className='section__title'>
                                Այս դասընթացը ձեզ համար է,
                                <br/> եթե ցանկանում եք՝
                            </h2>
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView='auto'
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.suit-pagination',
                                    type: 'bullets',
                                }}
                                breakpoints={{
                                    520: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {suit.map((suit, idx) => (
                                    <SwiperSlide className='suit__item' key={idx.toString()}>
                                        <picture>
                                            <img
                                                data-src={suit.image}
                                                width={26}
                                                height={26}
                                                className='lazyload'
                                                alt='նկար'
                                            />
                                        </picture>
                                        <p>{suit.content}</p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='suit-pagination swiper-pagination'/>
                            <a
                                href='#order-section'
                                className={classNames(btnStyle.btn, btnStyle.red)}
                            >
                                Սկսել 1 ₽-ով
                            </a>
                        </div>
                    </div>
                </section>

                {/* adva2 */}
                <section className={adva2Style.adva2}>
                    <div className='container'>
                        <h2 className='section__title'>
                            Արժեքը <span>10 անգամ ավելի</span>
                            <br/> բարձր է
                        </h2>
                        <div className='adva2__body'>
                            <div className='adva2__block block'>
                                <div className='block__text-content block__text-content--pic'>
                                    <div className='block__text-row'>
                                        <div className='block__text-item'>
                                            <span>22&nbsp;ժամ</span>
                                            <br/>
                                            Պրակտիկա
                                        </div>
                                    </div>
                                    <div className='block__text-row'>
                                        <div className='block__text-item'>
                                            <span>5&nbsp;ամիս</span>
                                            <br/> Ուսուցման տևողություն
                                        </div>
                                    </div>
                                </div>
                                <div className='block__text-content'>
                                    <h3>Հասկանալուն հեշտ տեսազրույցներ</h3>
                                    <p>
                                        Մենք մանրամասն աշխատել ենք դասընթացի մեթոդաբանության վրա, որպեսզի յուրաքանչյուր
                                        ցանկացող,
                                        նույնիսկ առանց հատուկ կրթության և փորձի, կարողանա հասկանալ, թե ինչ են
                                        մարկետփլեյսները և ինչպես
                                        ստանալ հարյուր հազարներ նրանց վրա:
                                    </p>
                                </div>
                            </div>
                            <div className='adva2__block block'>
                                <div className='block__text-content block__text-content--pic'></div>
                                <div className='block__text-content'>
                                    <h3>Եկամտային հարկի վերադարձ</h3>
                                    <p>
                                        Դուք կարող եք վերադարձնել հարկային արտոնությունը ուսման վճարի համար, քանի որ մեզ
                                        մոտ
                                        կա կրթական լիցենզիա: Ուստի ուսման արժեքը կլինի ավելի ցածր:
                                    </p>
                                    <a
                                        href='#order-section'
                                        className={classNames(btnStyle.btn, btnStyle.red)}
                                    >
                                        Սկսել 1 ₽-ով
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* expert */}
                <section className={expertStyle.expert}>
                    <div className='container'>
                        <h2 className='section__title'>
                            Առաջատար փորձագետներ <br/> հիանալի արդյունքների համար
                        </h2>
                        <Swiper
                            className='expert__slider'
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView='auto'
                            loop={false}
                            navigation={{
                                nextEl: '.expert__btn--next',
                                prevEl: '.expert__btn--prev',
                            }}
                        >
                            <SwiperSlide className='expert__slide'>
                                <div className='expert__image'>
                                    <img
                                        data-src={`${land_folder}/expert-1.png`}
                                        alt='փորձագետ'
                                        className='lazyload'
                                        width={590}
                                        height={692}
                                    />
                                </div>
                                <div className='expert__content'>
                                    <div className='expert__name'>Եկատերինա Կորոլյովա</div>
                                    <ul className='expert__features'>
                                        <li className='expert__features-item'>
                                            Աշխատանքային փորձ հաշվապահության, հարկային
                                            և կառավարման հաշվետվությունների ոլորտում 2009&nbsp; թվականից
                                        </li>
                                        <li className='expert__features-item'>
                                            Մագիստրոսի աստիճան «Հաշվետվություն, վերլուծություն,
                                            աուդիտ» մասնագիտությամբ
                                        </li>
                                        <li className='expert__features-item'>
                                            Գլխավոր հաշվապահի վկայագիր
                                        </li>
                                        <li className='expert__features-item'>
                                            Դասավանդող կրթական օնլայն նախագծերում
                                        </li>
                                        <li className='expert__features-item'>
                                            Որպես ձեռնարկատեր և բիզնեսի սեփականատեր
                                        </li>
                                        <li className='expert__features-item'>
                                            Բիզնեսի հաշվապահական աջակցություն
                                            2020&nbsp; թվականից
                                        </li>
                                        <li className='expert__features-item'>
                                            Իրականացման հեղինակային ծրագիր՝ անհատական
                                            ղեկավարության համար
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='expert__slide'>
                                <div className='expert__image'>
                                    <img
                                        data-src={`${land_folder}/expert-2.png`}
                                        alt='փորձագետ'
                                        className='lazyload'
                                        width={590}
                                        height={649}
                                    />
                                </div>
                                <div className='expert__content'>
                                    <div className='expert__name'>Յուլիա Դոնսկայա</div>
                                    <ul className='expert__features'>
                                        <li className='expert__features-item'>
                                            Համագործակցում եմ մատակարարների հետ WILDBERRIES
                                            և Ozon 2021&nbsp; թվականից
                                        </li>
                                        <li className='expert__features-item'>
                                            Աշխատում եմ ավելի քան 10 մատակարարների հետ
                                        </li>
                                        <li className='expert__features-item'>
                                            Հինգ&nbsp; շաբաթում արտադրանքի քարտը
                                            «չի դասակարգվում» կարգավիճակից 4-րդ
                                            դիրքին է բարձրացրել հիմնական հիմնական
                                            բանալի հարցերով
                                        </li>
                                        <li className='expert__features-item'>
                                            2&nbsp; ամիս աշխատանքի ընթացքում վաճառքները
                                            բարձրացրել եմ 130&nbsp; հազար / ամսական
                                            մինչև 900&nbsp; հազար / ամսական
                                        </li>
                                        <li className='expert__features-item'>
                                            Բարձրագույն մանկավարժական կրթություն
                                        </li>
                                        <li className='expert__features-item'>
                                            7&nbsp; տարվա մանկավարժական գործունեություն
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='expert__slide'>
                                <div className='expert__image'>
                                    <img
                                        data-src={`${land_folder}/expert-3.png`}
                                        alt='փորձագետ'
                                        className='lazyload'
                                        width={590}
                                        height={676}
                                    />
                                </div>
                                <div className='expert__content'>
                                    <div className='expert__name'>Օլգա Ռոդինա</div>
                                    <ul className='expert__features'>
                                        <li className='expert__features-item'>
                                            Մարկետփլեյսների մենեջեր ավելի քան 2&nbsp; տարի
                                        </li>
                                        <li className='expert__features-item'>
                                            Աշխատել եմ տեքստիլ ապրանքների բրենդների
                                            գովազդի հետ
                                        </li>
                                        <li className='expert__features-item'>
                                            Վաճառքների և մարքեթինգի մարզիչ ավելի քան 6&nbsp; տարի
                                            օֆլայն և օնլայն
                                        </li>
                                        <li className='expert__features-item'>
                                            Ապահովել եմ սեփական հեղինակային դասընթաց
                                            սառը վաճառքների համար
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <div className='expert__btn-wrapper'>
                                <div className='expert__btn expert__btn--prev swiper-button-prev'></div>
                                <div className='expert__btn expert__btn--next swiper-button-next'></div>
                            </div>
                        </Swiper>
                    </div>
                </section>

                {/* program */}
                <section className={programStyle.program}>
                    <div className='container'>
                        <div className='program__body'>
                            <h2 className='program__title'>Որո՞նք են կուրսի բաղադրիչները:</h2>
                            <h3 className='modules'>
                                <FormattedMessage
                                    id='modules'
                                    defaultMessage='{count, plural, one {# модуль} few {# модуля} many {# модулей} other {# модулей}}'
                                />
                            </h3>
                        </div>
                    </div>
                </section>

                {/* pay */}
                <section className={payStyle.pay}>
                    <div className='container'>
                        <div className='pay__body'>
                            <div className='pay__content'>
                                <h2 className='section__title'>
                                    Մեր կուրս-ը ավելի էժան է, քան մրցակիցների!
                                </h2>
                                <div className='md'>
                                    <img
                                        data-src={`${land_folder}/img5m.png`}
                                        width={410}
                                        height={530}
                                        className='lazyload'
                                        alt='money'
                                    />
                                </div>
                                <div className='lg picture'>
                                    <img
                                        data-src={`${land_folder}/img5.png`}
                                        width={721}
                                        height={531}
                                        className='lazyload'
                                        alt='money'
                                    />
                                </div>
                                <p>
                                    Մասնագետների պահանջարկը, ովքեր աշխատում են մարկետպլեյսների հետ, աճում է, ինչպես նաև
                                    աշխատավարձերը: Միաժամանակ, բազմաթիվ ընկերություններ դա օգտագործում են և պահանջում
                                    շատ
                                    բարձր վճարեր այն տեղեկատվության համար, որը պետք է լինի հասանելի բոլորին առանց
                                    վարկերի
                                    և խնայողությունների կոտրելու։
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* order-1 */}
                <section className={orderStyle.order}>
                    <div className='container'>
                        <div className='order__body'>
                            <div className='order__col order__col--text'>
                                <h2 className='section__title'>
                                    Ի՞նչ կստանաք:
                                </h2>
                                <ul>
                                    <li>
                                        Ակցես անձնական հաշիվ։ Պարգև — մատակարարների բազա և ստուգողական ցուցակներ:
                                    </li>
                                    <li>
                                        Որակյալ տեսանյութեր պրոֆեսիոնալ մանկավարժ-փորձագետի կողմից։
                                        Ուսումնասիրությունները բաժանված են օրերի, որպեսզի ավելի հարմար լինի սովորելը:
                                    </li>
                                    <li>
                                        Ակցես հարթակին ցանկացած ժամանակ և ցանկացած վայրում, նույնիսկ հեռախոսով։ Եվ 24/7
                                        աջակցություն:
                                    </li>
                                </ul>
                            </div>
                            <div
                                className='order__col order__col--form'
                                id='order-section'
                            >
                                <h2 className='section__title'>Մարկետպլեյսներ զեղչով</h2>
                                <div className='row'>
                                    <div className='order__item'>
                                        <FormattedMessage
                                            id='lessons'
                                            defaultMessage='{count, plural, one {# урок} few {# урока} many {# уроков} other {# уроков}}'
                                        />
                                        {' '}
                                    </div>
                                    <div className='order__item'>
                                        <FormattedMessage
                                            id='weeks'
                                            defaultMessage='{count, plural, one {# неделя} few {# недели} many {# недель} other {# недель}}'
                                        />
                                        {' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* license */}
                <section className={licenseStyle.license}>
                    <div className='container'>
                        <div className='license__body'>
                            <div className='license__content'>
                                <h2 className='section__title'>
                                    Մեզ մոտ կա կրթական լիցենզիա
                                </h2>
                                <picture>
                                    <img
                                        data-src={`${land_folder}/img6.png`}
                                        width={601}
                                        height={605}
                                        className='lazyload'
                                        alt='license'
                                    />
                                </picture>
                                <p>
                                    Մեր ընկերությունը գրանցված է որպես իրավաբանական անձ։
                                    Լիցենզիա և այլ փաստաթղթերի մասին տեղեկությունները կարող եք ստուգել
                                    <a href='https://www.nalog.gov.ru/'>
                                        պաշտոնական nalog.ru կայքում
                                    </a>
                                </p>
                                <ul className='license__list'>
                                    <div className='license__list-item'>
                                        ООО “ЦДО”
                                        <br/>
                                        ԻՆՆ 7838099424
                                        <br/>
                                        ՕԳՌՆ 1217800181928
                                        <br/>
                                        Լիցենզիա № 4724
                                    </div>
                                </ul>
                                <div className='license__warning'>
                                    <h3>Գիտակցեք խաբեություններից!</h3>
                                    <p>
                                        Կրթական ծառայությունների պահանջարկի աճի հետ մեկտեղ
                                        բազմաթիվ անկիրթ «փորձագետներ» են հայտնվել,
                                        ովքեր տրամադրում են անորակ պարունակություն և
                                        տեղեկություններ, որոնք չունեն արժեք կամ
                                        ընդհանրապես исчезают курса վճարումից հետո։
                                        Դա հաճախ տեղի է ունենում սոցիալական ցանցերում
                                        բլոգերների շրջանում։
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* reviews */}
                <section className={reviewsStyle.reviews}>
                    <div className='container'>
                        <h2 className='section__title'>
                            Իրական պատմություններ <br/>
                            ուսանողների
                        </h2>
                        <Swiper
                            className='reviews__body'
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView='auto'
                            loop={true}
                            pagination={{
                                clickable: true,
                                el: '.reviews-pagination',
                                type: 'bullets',
                            }}
                            navigation={{
                                nextEl: '.reviews-button--next',
                                prevEl: '.reviews-button--prev',
                            }}
                            breakpoints={{
                                650: {
                                    slidesPerView: 2,
                                },
                                998: {
                                    slidesPerView: 3,
                                    spaceBetween: 45,
                                },
                            }}
                        >
                            {reviews.map((reviews, idx) => (
                                <SwiperSlide
                                    className='reviews__item review'
                                    key={idx.toString()}
                                >
                                    <picture>
                                        <img
                                            data-src={reviews.image}
                                            width={130}
                                            height={130}
                                            className='lazyload'
                                            alt='expert'
                                        />
                                    </picture>
                                    <h3>{reviews.name}</h3>
                                    <p>{reviews.age}</p>
                                    <p>{reviews.content}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='swiper-button-prev reviews-button--prev'></div>
                        <div className='swiper-button-next reviews-button--next'></div>
                        <div className='reviews-pagination swiper-pagination'></div>
                    </div>
                </section>

                {/* qa */}
                <section className={qaStyle.qa}>
                    <div className='qa__container container'>
                        <div className='qa__header'>
                            <h2 className='section__title'>Պիտակներ և պատասխաններ</h2>
                        </div>
                        <div className='qa__body'>
                            <QaAccordion/>
                        </div>
                    </div>
                </section>

                {/* order-2 */}
                <section
                    className={classNames(orderStyle.order, orderStyle.order2)}
                >
                    <div className='container'>
                        <div className='order__body'>
                            <div className='order__col order__col--pic'>
                                <div className='md'>
                                    <img
                                        data-src={`${land_folder}/img7m.png`}
                                        width={320}
                                        height={354}
                                        className='lazyload'
                                        alt='happy-girl'
                                    />
                                </div>
                                <div className='lg picture'>
                                    <img
                                        data-src={`${land_folder}/img7.png`}
                                        width={402}
                                        height={445}
                                        className='lazyload'
                                        alt='happy-girl'
                                    />
                                </div>
                            </div>
                            <div className='order__col order__col--form'>
                                <h2 className='section__title'>Մարքետպլեյսներ զեղչով</h2>
                                <div className='row'>
                                    <div className='order__item'>
                                        <FormattedMessage
                                            id='lessons'
                                            defaultMessage='{count, plural, one {# урок} few {# урока} many {# уроков} other {# уроков}}'
                                        />
                                        {' '}
                                    </div>
                                    <div className='order__item'>
                                        <FormattedMessage
                                            id='weeks'
                                            defaultMessage='{count, plural, one {# неделя} few {# недели} many {# недель} other {# недель}}'
                                        />
                                        {' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Page

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()
    if (process.env.EXPORT === 'true') {
        return {
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        }
    }
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const QaAccordion = () => {
    const [clicked, setClicked] = React.useState('0')
    const handleToggle = (index: string) => {
        if (clicked === index) {
            return setClicked('')
        }
        setClicked(index)
    }
    return (
        <ul className='qa__list'>
            {questions.map((question, idx) => (
                <QaAccordionItem
                    key={idx.toString()}
                    question={question.question}
                    answer={question.answer}
                    onToggle={() => handleToggle(idx.toString())}
                    active={clicked === idx.toString()}
                />
            ))}
        </ul>
    )
}

interface QaAccordionItemProps extends FAQ {
    onToggle: () => void
    active: boolean
}

const QaAccordionItem = ({
                             question,
                             answer,
                             onToggle,
                             active,
                         }: QaAccordionItemProps) => {
    return (
        <li className={classNames('qa__list-item qa-item', {active})}>
            <div className='qa-item__header' onClick={onToggle}>
                <h3>{question}</h3>
                <span/>
            </div>
            <div className='qa-item__body'>
                <p>{answer}</p>
            </div>
        </li>
    )
}
