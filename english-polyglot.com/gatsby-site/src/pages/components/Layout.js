import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix, Link, navigate } from "gatsby"

import "../../styles/style.css"

export default function Layout({ children, breadcrumbs }) {
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          to="apple-touch-icon.png?v=Kmng6z9J5E"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          to="favicon-32x32.png?v=Kmng6z9J5E"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          to="favicon-194x194.png?v=Kmng6z9J5E"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          to="android-chrome-192x192.png?v=Kmng6z9J5E"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          to="favicon-16x16.png?v=Kmng6z9J5E"
        />
        <link rel="manifest" to="site.webmanifest?v=Kmng6z9J5E" />
        <link
          rel="mask-icon"
          to="safari-pinned-tab.svg?v=Kmng6z9J5E"
          color="#5c5c5c"
        />
        <link rel="shortcut icon" to="favicon.ico?v=Kmng6z9J5E1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Polyglot: English in 16 hours"
        />
        <meta name="application-name" content="Polyglot: English in 16 hours" />
        <meta name="msapplication-TileColor" content="#560909" />
        <meta
          name="msapplication-TileImage"
          content="../english-polyglot.com/mstile-144x144.png?v=Kmng6z9J5E"
        />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta
          name="msapplication-starturl"
          content="https://www.english-polyglot.com"
        />
        <meta name="theme-color" content="#560909" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="English in 16 hours"
          to="https://feeds.feedburner.com/poliglott"
        />

        <meta property="fb:app_id" content="107859652683773" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:site_name"
          content="Полиглот английский язык за 16 часов"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@MrPoligloto" />

        <meta
          name="Keywords"
          content="1 урок Полиглот, текст первого урока Полиглот, таблица глаголов Петрова, изучаем английский язык, выучим за 16 часов телеканал Культура, 16 уроков Дмитрия Петрова, как сказать по английски, самые употребляемые глаголы, фрагмент фильма Аватар"
        />

        <link rel="canonical" to="https://www.english-polyglot.com" />
        <meta
          property="og:url"
          itemprop="url"
          content="https://www.english-polyglot.com"
        />

        <title>
          Материалы уроков Полиглот | 1 урок Полиглот английский язык за 16
          часов | Как построить предложение на английском языке
        </title>

        <meta
          property="og:title"
          itemprop="name"
          content="Материалы уроков Полиглот. 1 урок Полиглот английский язык за 16 часов: Как построить предложение на английском языке"
        />

        <meta property="og:image:width" content="247" />
        <meta property="og:image:height" content="370" />
        <meta
          property="og:image"
          content="https://www.english-polyglot.com/img/dmitry-petrov-image-247x370.jpg"
        />
        <link
          itemprop="image"
          to="//www.english-polyglot.com/img/dmitry-petrov-image-247x370.jpg"
        />

        <meta
          name="Description"
          content="Скорая помощь в изучении английского языка. Практическое пособие для изучения английского языка, на основе сверхкомпактной Базовой таблицы глагола лингвиста переводчика полиглота Дмитрия Петрова. В 1 уроке мы научимся строить фразы на английском языке."
        />
        <meta
          property="og:description"
          itemprop="description"
          content="Практическое пособие для изучения английского языка, на основе сверхкомпактной Базовой таблицы глагола лингвиста полиглота Дмитрия Петрова"
        />
        <link rel="stylesheet" type="text/css" to="/assets/style.css" />
        {/* <script src="/assets/all.js" />
        <script src="/assets/lazysizes.min.js" /> */}
        <script src={withPrefix("/assets/all.js")} type="text/javascript" />
      </Helmet>
      <header>
        <hgroup>
          <a href="/">
            <div className="ambulance">
              <h1 className="one-1">
                <div className="strip"></div>
                <div className="line_1_2">ПОЛИГЛОТ</div>
                <div className="line_3_4">
                  Выучим АНГЛИЙСКИЙ ЯЗЫК ЗА 16 ЧАСОВ
                </div>
              </h1>
              <div className="hh1">
                <strong></strong>
              </div>
              <h3 className="two-2">
                <div className="strip"></div>
                <div className="line_1_2">Полиглот Дмитрий Петров</div>
                <div className="line_3_4">телеканал Культура Полиглот</div>
              </h3>
            </div>
          </a>
          <h2>16 уроков Полиглот Дмитрий Петров канал Культура</h2>
        </hgroup>
        <div>
          {/* <!-- google search -->
            <gcse:searchbox-only></gcse:searchbox-only> */}
        </div>
        <nav id="header" className="menu">
          <ul>
            <li>
              <a id="m1" href="generator-fraz.html">
                Генератор фраз
              </a>
            </li>
            <li>
              <a id="m2" href="tablicy.html">
                Таблицы Полиглот
              </a>
            </li>
            <li>
              <a id="m3" href="filmy.html">
                Фрагменты фильмов
              </a>
            </li>
            <li>
              <a id="m4" href="#menu_uroki">
                16 Уроков Полиглот
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="top_doc" className="container">
        <div className="container_inner">
          <div className="first">
            <div className="top-content"></div>
            <div id="top_scroll" className="content">
              <div className="content_inner">
                <article>{children}</article>
              </div>
            </div>
            <div className="bottom-content"></div>
          </div>

          <section id="stop_content">
            <div className="dawn">
              <div className="share_center">
                <div id="share">
                  <a
                    className="lkr-v"
                    href="javascript:void(0)"
                    onclick="return Share.go(this, 'vkontakte')"
                  ></a>
                  <a
                    className="lkr-o"
                    href="javascript:void(0)"
                    onclick="return Share.go(this, 'odnoklassniki')"
                  ></a>
                  <a
                    className="lkr-f"
                    href="javascript:void(0)"
                    onClick="return Share.go(this, 'facebook')"
                  ></a>
                  <a
                    className="lkr-t"
                    href="javascript:void(0)"
                    onclick="return Share.go(this, 'twitter')"
                  ></a>
                  <a
                    className="lkr-m"
                    href="javascript:void(0)"
                    onclick="return Share.go(this, 'mailru')"
                  ></a>
                </div>
                <div className="delitsa">
                  Поделитесь этой страничкой с друзьями!
                </div>
              </div>

              <div className="hz">
                <div className="hz2">
                  <div className="okno">
                    Подпишитесь на рассылку сообщений о готовых уроках и новых
                    возможностях сайта
                  </div>
                  <form
                    action="https://feedburner.google.com/fb/a/mailverify"
                    method="post"
                    target="popupwindow"
                    onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=poliglott', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true"
                  >
                    <input
                      name="email"
                      type="text"
                      value="Введите Ваш e-mail"
                      className="subscribe_textieldpost"
                      onfocus="if (this.value == 'Введите Ваш e-mail') {this.value = ''}"
                      onblur="if (this.value == '') {this.value = 'Введите Ваш e-mail'}"
                    />
                    <input type="hidden" value="poliglott" name="uri" />
                    <input type="hidden" value="poliglott-narod" name="title" />
                    <input type="hidden" name="loc" value="ru_RU" />
                    <input
                      type="image"
                      className="subscribepost pixel"
                      value="Subscribe"
                      src="img/subscribe-button-4.png"
                      alt="Subscribe button"
                      title="Когда будет готов новый урок,  на вашу почту придет письмо"
                      align="top"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="subscribe">
            <div className="sub_top">или</div>
            <h3>Подпишитесь</h3>
            <div className="sub_top">на рассылку в соцсетях</div>

            <div className="sub_center">
              <div className="sub_col">
                <a
                  className="lkr-rss"
                  href="https://feeds.feedburner.com/poliglott"
                  rel="me nofollow"
                  target="_blank"
                ></a>
                <a
                  className="lkr-f"
                  href="https://www.facebook.com/poliglott"
                  rel="me nofollow"
                  target="_blank"
                ></a>
                <a
                  className="lkr-t"
                  href="https://twitter.com/MrPoligloto"
                  rel="me nofollow"
                  target="_blank"
                ></a>
                <a
                  className="lkr-v"
                  href="https://vk.com/poliglott"
                  rel="me nofollow"
                  target="_blank"
                ></a>
                <a
                  className="lkr-m"
                  href="https://my.mail.ru/mail/poliglot.kultura2012/"
                  rel="me nofollow"
                  target="_blank"
                ></a>
                <a
                  className="lkr-o"
                  href="https://ok.ru/mrpoligloto/statuses"
                  rel="me nofollow"
                  target="_blank"
                ></a>
              </div>
            </div>

            <div className="sub_bottom"></div>
          </section>

          <aside className="second">
            <nav className="top-sidebar">
              <ul id="new-back" className="nav">
                <li>
                  <a href="poligloto.html" title="Оставьте своё  пожелание">
                    Обратная
                    <br />
                    связь
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="sidebar">
              <div className="sidebar_inner">
                <h3>
                  <strong>16 уроков Полиглот:</strong>
                </h3>
                <ul id="menu_uroki" className="nav" name="menu_uroki">
                  <li>
                    <a id="a1" href="/">
                      1 урок Полиглот
                      <em>Базовая таблица глаголов Дмитрия Петрова</em>
                    </a>
                  </li>
                  <li>
                    <a id="a2" href="urok-2.html">
                      2 урок Полиглот<em>Соединяем местоимения и предлоги</em>
                    </a>
                  </li>
                  <li>
                    <a id="a3" href="urok-3.html">
                      3 урок Полиглот<em>Таблица глагола to be</em>
                    </a>
                  </li>
                  <li>
                    <a id="a4" href="urok-4.html">
                      4 урок Полиглот<em>Как сказать по-английски о себе</em>
                    </a>
                  </li>
                  <li>
                    <a id="a5" href="urok-5.html">
                      5 урок Полиглот
                      <em>Прилагательные и промежутки времени в английском</em>
                    </a>
                  </li>
                  <li>
                    <a id="a6" href="urok-6.html">
                      6 урок Полиглот
                      <em>Как поддержать диалог на английском</em>
                    </a>
                  </li>
                  <li>
                    <a id="a7" href="urok-7.html">
                      7 урок Полиглот<em>Упрощенная таблица глаголов</em>
                    </a>
                  </li>
                  <li>
                    <a id="a8" href="urok-8.html">
                      8 урок Полиглот<em>Предлоги места и направления</em>
                    </a>
                  </li>
                  <li>
                    <a id="a9" href="urok-9.html">
                      9 урок Полиглот<em>Четыре истории на английском</em>
                    </a>
                  </li>
                  <li>
                    <a id="a10" href="urok-10.html">
                      10 урок Полиглот<em>За кулисами культурной жизни</em>
                    </a>
                  </li>
                </ul>
                <ul className="nav notready">
                  <li>
                    <a
                      id="a11"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      11 урок Полиглот
                    </a>
                  </li>
                  <li>
                    <a
                      id="a12"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      12 урок Полиглот
                    </a>
                  </li>
                  <li>
                    <a
                      id="a13"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      13 урок Полиглот
                    </a>
                  </li>
                  <li>
                    <a
                      id="a14"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      14 урок Полиглот
                    </a>
                  </li>
                  <li>
                    <a
                      id="a15"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      15 урок Полиглот
                    </a>
                  </li>
                  <li>
                    <a
                      id="a16"
                      href="javascript:void(0)"
                      title="Извините, материалы  готовятся к публикации"
                    >
                      16 урок Полиглот
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="bottom-sidebar">
              <section className="adsense">
                <div id="prog2"></div>

                <div id="ad_2" className="ad_block">
                  {/* <!-- mobile-adaptive-17-11-2014 --> */}
                  <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-4595809153827928"
                    data-ad-slot="1257560926"
                    data-ad-format="auto"
                  ></ins>
                  <script>
                    ;(adsbygoogle = window.adsbygoogle || []).push({})
                  </script>
                </div>
              </section>
            </nav>
          </aside>

          {/* <!-- InstanceBeginEditable name="footer" --> */}

          {/* <!-- InstanceEndEditable --> */}
        </div>
        <span id="dummy"></span>
      </main>

      <footer>
        <section id="dbt" className="donateButton">
          <div className="donate_cap">Помогите сайту</div>

          <div
            className="embed-container"
            style={{
              paddingBottom: "45%",
              margin: "0",
              backgroundColor: "#fff",
            }}
          >
            <img
              id="donate_img"
              className="lazyload"
              data-src="img/pomosh.gif"
              alt="Помощь сайту"
              width="680"
              height="370"
            />
          </div>

          <div className="donate_cap">&nbsp;</div>

          <form
            id="yandex-dengi"
            method="POST"
            action="https://money.yandex.ru/quickpay/confirm.xml"
          >
            <input type="hidden" name="receiver" value="41001681930150" />
            <input
              type="hidden"
              name="formcomment"
              value="Полиглот английский за 16 часов"
            />
            <input
              type="hidden"
              name="short-dest"
              value="Полиглот английский за 16 часов"
            />
            <input type="hidden" name="label" value="$order_id" />
            <input type="hidden" name="quickpay-form" value="donate" />
            <input type="hidden" name="targets" value="транзакция {order_id}" />
            <input
              className="sum"
              type="number"
              name="sum"
              data-type="number"
              placeholder="Сумма"
              autocomplete="off"
              size="7"
            />
            <strong> руб</strong>
            <input type="hidden" name="comment" value="Поддержка проекта" />
            <input type="hidden" name="need-fio" value="false" />
            <input type="hidden" name="need-email" value="false" />
            <input type="hidden" name="need-phone" value="false" />
            <input type="hidden" name="need-address" value="false" />
            {/* <!--<input className="submit" type="submit" value="Оплатить" />--> */}
            <input
              type="image"
              className="submit pixel"
              value="Оплатить"
              src="img/oplatit-button-1.png"
              alt="Кнопка оплатить"
            />

            <label>
              <input type="radio" name="paymentType" value="AC" checked />
              Банковской картой
            </label>
            <label>
              <input type="radio" name="paymentType" value="MC" />C баланса
              мобильного
            </label>
            <label>
              <input type="radio" name="paymentType" value="PC" />
              Яндекс.Деньгами
            </label>
          </form>

          <div>
            <img
              id="yan-dengi_img"
              className="lazyload"
              data-src="img/yandex_dengi-logo-04.05.2016.png"
              alt=""
            />
          </div>

          <div>
            <img
              id="paypal_img"
              className="lazyload"
              data-src="img/paypal-logo-04.05.2016.png"
              alt=""
            />
          </div>

          <form
            id="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="ATYY6CHJYAW5W"
            />
            <input
              type="hidden"
              name="item_name"
              value="www.english-polyglot.com"
            />
            <input
              type="image"
              className="submit"
              src="img/btn_donate_LG.gif"
              border="0"
              name="submit"
              alt="Donate button"
            />
          </form>
        </section>
        <h3>Полиглот английский язык за 16 часов</h3>
      </footer>

      <div className="extra"></div>
      <script src="assets/lazysizes.min.js" async></script>
      <script src="assets/all.js" type="text/javascript"></script>
      {/* <!-- Images End --> */}
    </>
  )
}
