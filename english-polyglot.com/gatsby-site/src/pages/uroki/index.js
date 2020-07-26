import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Uroki() {
  return (
    <Layout breadcrumbs={["Уроки"]}>
      {/* <!-- InstanceBeginEditable name="content2" --> */}

      <figure className="tableCase">
        <hgroup className="bb">
          <h2 id="base_verbs_table">
            <div>1 урок Полиглот</div>
            Базовая таблица глаголов Дмитрия Петрова
          </h2>
        </hgroup>
        <div
          id="urok_tab"
          className="abm tp lp bp px680"
          style={{ display: "none" }}
        >
          <form autocomplete="off">
            <label for="tableL">Вариант:</label>

            <input
              type="radio"
              name="table-choice"
              id="tableA"
              className="radio_table"
              onClick="change_table(0)"
              checked="checked"
            />
            <label for="tableA">A</label>

            <input
              type="radio"
              name="table-choice"
              id="tableB"
              className="radio_table"
              onClick="change_table(1)"
            />
            <label for="tableB">B</label>

            <input
              type="radio"
              name="table-choice"
              id="tableC"
              className="radio_table"
              onClick="change_table(2)"
            />
            <label for="tableC">C</label>

            <input
              type="radio"
              name="table-choice"
              id="tableD"
              className="radio_table"
              onClick="change_table(3)"
            />
            <label for="tableD">D</label>
          </form>
        </div>

        <figure className="video_center">
          <img
            id="t"
            data-src="img/tablica-glagolov-petrova-image.gif"
            alt="Базовая таблица глаголов Дмитрий Петров Полиглот"
            title="Базовая таблица глаголов Дмитрий Петров Полиглот"
            className="foto_hero px680 lazyload"
          />
          <figcaption id="c" className="wrap_txt_center">
            <strong>Базовая таблица глаголов Петрова</strong>
          </figcaption>
        </figure>

        <script>
          document.getElementById("urok_tab").style.display = "block"
          document.getElementById("tableA").checked = true
        </script>
      </figure>

      <section className="history">
        <div className="wrap_txt">
          <div style={{ float: "left", width: "110px" }}>
            <a href="https://feeds.feedburner.com/poliglott" rel="nofollow">
              <img
                data-src="https://feeds.feedburner.com/~fc/poliglott?bg=99CCFF&amp;fg=444444&amp;anim=0&amp;label=readers"
                alt="Подпишись на рассылку по e-mail"
                className="lazyload"
              />
            </a>
          </div>
          <div>
            Одна из&nbsp;характернейших особенностей английского языка –
            короткое слово. Такие слова как
            <a
              className="red"
              href="javascript:void(0)"
              title="индивидьюлайзейшн"
              onClick="playSound(this);"
            >
              individualisation
            </a>
            хоть и&nbsp;попадают в&nbsp;словари, но&nbsp;редко употребляются
            в&nbsp;разговорной речи.
          </div>

          <div>
            Вот и&nbsp;мы&nbsp;начнем со&nbsp;слов, которые состоят всего лишь
            из&nbsp;одного слога:
          </div>

          <div className="round">
            наведите курсор или кликните английское слово, выделенное
            <a className="red">красным цветом</a>, чтобы увидеть или услышать
            его произношение
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:;"
                  title="лив"
                  onClick={props => props.playSound.bind(this)}
                >
                  live
                </a>
                – <em>жить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="спик"
                  onClick="playSound(this);"
                >
                  speak
                </a>
                – <em>говорить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ду"
                  onClick="playSound(this);"
                >
                  do
                </a>
                – <em>делать</em>
              </li>
            </ul>
          </div>
          <div>
            Все три слова – глаголы. Глаголы обозначают действие или состояние
            и&nbsp;отвечают на&nbsp;вопросы:
            <em>Что делать?</em> <em>Что сделать?</em>
          </div>
          <div>
            У&nbsp;многих знакомство с&nbsp;языком заканчивается именно
            на&nbsp;глаголах, поскольку в&nbsp;английском языке,
            по&nbsp;сравнению с&nbsp;русским, более разветвленная и&nbsp;сложная
            система времён. И&nbsp;тут без упрощения не&nbsp;обойтись.
          </div>

          <div>
            Именно в&nbsp;этом месте Петров отходит от&nbsp;традиционной формы
            подачи английского.
          </div>

          <div className="quote green">
            Во-первых, он&nbsp;решает отделить глаголы от&nbsp;причастий, а,
            во-вторых, объединяет глаголы по&nbsp;грамматической категории время
            (прошедшее, настоящее, будущее). Такой способ, по&nbsp;мысли автора,
            дает возможность увидеть объемную структуру языка.
          </div>
          <div>Итак, как&nbsp;же построить фразу на&nbsp;английском?</div>
          <div>
            Возьмем один из&nbsp;самых распространенных английских глаголов:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="лав"
                  onClick="playSound(this);"
                >
                  love{" "}
                </a>
                – <em>любить</em>
              </li>
            </ul>
          </div>

          <div>и добавим к&nbsp;нему группу местоимений:</div>
        </div>
        <div className="wrap_txt">
          <div className="hardtab onecol white">
            <div className="row top blue">
              <div className="tre upper cond">Местоимения</div>
            </div>
            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="ай"
                      onClick="playSound(this);"
                    >
                      I
                    </a>
                    – <em>я</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="ю"
                      onClick="playSound(this);"
                    >
                      you
                    </a>
                    – <em>ты, вы</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="хи"
                      onClick="playSound(this);"
                    >
                      he
                    </a>
                    – <em>он</em>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="ши"
                      onClick="playSound(this);"
                    >
                      she
                    </a>
                    – <em>она</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="ви"
                      onClick="playSound(this);"
                    >
                      we
                    </a>
                    – <em>мы</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="tretiya">
                <ul>
                  <li>
                    <a
                      className="red"
                      href="javascript:void(0)"
                      title="зей"
                      onClick="playSound(this);"
                    >
                      they
                    </a>
                    – <em>они</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            Чтобы сказать по-английски <em>Я&nbsp;люблю</em> нужно определить
            время, в&nbsp;котором действие происходит (<em>прошедшее</em>,{" "}
            <em>настоящее</em>, <em>будущее</em>) и&nbsp;форму предложения{" "}
            <em>(утверждение</em>,<em>отрицание</em>, <em>вопрос</em>).
          </div>
          <div>
            В&nbsp;нашем случае это
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-love-image.gif', 690, 624,  'Утверждение в настоящем времени')"
            >
              утверждение в&nbsp;настоящем времени
            </a>
            .
          </div>

          <h4 className="espresso">Утвердительные предложения</h4>
          <div className="quote">
            <div>
              В&nbsp;английском предложении, в&nbsp;отличие от&nbsp;русского,
              твёрдый порядок слов. Значение слова часто определяется местом
              в&nbsp;предложении. Для утвердительного предложения характерен
              прямой порядок слов:
            </div>
            <div>
              <em>Подлежащее</em> – <em>сказуемое</em> –
              <em>второстепенные члены предложения</em>.
            </div>
            <div>
              <a
                className="red"
                href="javascript:void(0)"
                title="ай лав ю"
                onClick="playSound(this);"
              >
                I love you
              </a>
              – <em>я&nbsp;люблю тебя</em>
            </div>
          </div>
          <div>
            Смотрим на&nbsp;пересечение <em>утверждение</em> и&nbsp;
            <em>настоящее</em>
            в&nbsp;таблице глагола. Получается, что по-английски нужно сказать:
            <a
              className="red"
              href="javascript:void(0)"
              title="ай лав"
              onClick="playSound(this);"
            >
              I love
            </a>
            . Точно так&nbsp;же следует строить фразу с&nbsp;местоимениями:
            <a
              className="red"
              href="javascript:void(0)"
              title="ю"
              onClick="playSound(this);"
            >
              you,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="ви"
              onClick="playSound(this);"
            >
              we,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="зей"
              onClick="playSound(this);"
            >
              they
            </a>
            .
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю лав"
                  onClick="playSound(this);"
                >
                  you love
                </a>
                – <em>ты&nbsp;любишь, Вы&nbsp;любите</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ви лав"
                  onClick="playSound(this);"
                >
                  we love
                </a>
                – <em>мы&nbsp;любим</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="зей лав"
                  onClick="playSound(this);"
                >
                  they love
                </a>
                – <em>они любят</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfloat"></div>
      </section>

      {/* <!-- InstanceEndEditable --> */}
      <section className="adsense">
        <div id="prog3"></div>

        <div id="ad_3" className="ad_block">
          {/* <!-- mobile-adaptive-17-11-2014 --> */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4595809153827928"
            data-ad-slot="1257560926"
            data-ad-format="auto"
          ></ins>
          <script>;(adsbygoogle = window.adsbygoogle || []).push({})</script>
        </div>
      </section>

      {/* <!-- InstanceBeginEditable name="content3" --> */}

      <section className="history">
        <div className="wrap_txt">
          <div className="quote">
            <div>
              В&nbsp;английском языке отсутствует различие между обращением
              к&nbsp;другому человеку на&nbsp;
              <em>ты</em>&nbsp;и&nbsp;<em>Вы</em>, используется только одна
              форма –
              <a
                className="red"
                href="javascript:void(0)"
                title="ю"
                onClick="playSound(this);"
              >
                you
              </a>
              .
            </div>
          </div>
          <div>Теперь, если лицо третье:</div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи"
                  onClick="playSound(this);"
                >
                  he
                </a>
                – <em> он </em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши"
                  onClick="playSound(this);"
                >
                  she
                </a>
                – <em>она</em>
              </li>
            </ul>
          </div>
          <div>
            то&nbsp;к&nbsp;глаголу добавляется буква –
            <a
              className="red"
              href="javascript:void(0)"
              title="эс"
              onClick="playSound(this);"
            >
              s
            </a>
            .
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи лавс"
                  onClick="playSound(this);"
                >
                  he loves
                </a>
                – <em> он любит</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши лавс"
                  onClick="playSound(this);"
                >
                  she loves
                </a>
                – <em>она любит</em>
              </li>
            </ul>
          </div>
          <div>И&nbsp;получается:</div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши лавс хим"
                  onClick="playSound(this);"
                >
                  she loves him
                </a>
                – <em>она любит его</em>
              </li>
            </ul>
          </div>
          <div>
            На&nbsp;первом месте – подлежащее (местоимение
            <a
              className="red"
              href="javascript:void(0)"
              title="ши"
              onClick="playSound(this);"
            >
              she
            </a>
            отвечающее на&nbsp;вопрос<em> кто?</em>) потом сказуемое (глагол –
            <a
              className="red"
              href="javascript:void(0)"
              title="лавc"
              onClick="playSound(this);"
            >
              loves
            </a>
            ) и&nbsp;дополнение (местоимение
            <a
              className="red"
              href="javascript:void(0)"
              title="хим"
              onClick="playSound(this);"
            >
              him
            </a>
            , отвечающее на&nbsp;вопрос <em>кого?</em>)
          </div>

          <div>
            Для того, чтобы образовать
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-loved-image.gif', 690, 624,  'Утверждение в прошедшем времени')"
            >
              утверждение прошедшего времени
            </a>
            , к&nbsp;глаголу добавляется буква –
            <a
              className="red"
              href="javascript:void(0)"
              title="ди"
              onClick="playSound(this);"
            >
              d:
            </a>
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай лавд"
                  onClick="playSound(this);"
                >
                  I loved
                </a>
                – <em>я любил</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю лавд"
                  onClick="playSound(this);"
                >
                  you loved
                </a>
                – <em>ты любил</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи лавд"
                  onClick="playSound(this);"
                >
                  he loved
                </a>
                – <em>он любил</em>
              </li>
            </ul>
          </div>
          <div>
            И&nbsp;так далее.
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-will-love-image.gif', 690, 624, 'Утверждение в будущем времени')"
            >
              Будущее время в&nbsp;утвердительном предложении
            </a>
            образуется добавлением вспомогательного глагола
            <a
              className="red"
              href="javascript: void(0"
              title="вил"
              onClick="playSound(this);"
            >
              will:
            </a>
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил лав"
                  onClick="playSound(this);"
                >
                  I will love
                </a>
                – <em>я буду любить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю вил лав"
                  onClick="playSound(this);"
                >
                  you will love
                </a>
                – <em>ты будешь любить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи вил лав"
                  onClick="playSound(this);"
                >
                  he will love
                </a>
                – <em>он будет любить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши вил лав"
                  onClick="playSound(this);"
                >
                  she will love
                </a>
                – <em>она будет любить</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap_txt">
          <div>
            Те, кто изучал английский в&nbsp;школах помнят еще один
            вспомогательный глагол –
            <a
              className="red"
              href="javascript:void(0)"
              title="шэл"
              onClick="playSound(this);"
            >
              shall
            </a>
            .
          </div>
          <div className="quote">
            <div>
              В&nbsp;Новом Оксфордском словаре английского языка говорится, что
              замена
              <a
                className="red"
                href="javascript:void(0)"
                title="вил"
                onClick="playSound(this);"
              >
                will
              </a>
              на&nbsp;
              <a
                className="red"
                href="javascript:void(0)"
                title="шэл"
                onClick="playSound(this);"
              >
                shall
              </a>
              является допустимой. Однако, в&nbsp;некоторых диалектах
              английского слово
              <a
                className="red"
                href="javascript:void(0)"
                title="шэл"
                onClick="playSound(this);"
              >
                shall{" "}
              </a>
              считается
              <a
                className="blue"
                href="javascript:void(0)"
                title="скриншот статьи из Википедии"
                onclick="popup('img/shall.gif', 418, 350, 'Вспомогательный глагол Shall')"
              >
                архаизмом
              </a>
              .
            </div>
            <div>
              Петров к&nbsp;этому добавляет, что &laquo;последние 30&nbsp;лет
              вспомогательное слово
              <a
                className="red"
                href="javascript:void(0)"
                title="шэл"
                onClick="playSound(this);"
              >
                shall
              </a>
              используется только в&nbsp;юридической и&nbsp;канцелярской
              деятельности&raquo;.
            </div>
            <div>
              В&nbsp;целях экономии нашей памяти, будем использовать только
              форму
              <a
                className="red"
                href="javascript:void(0)"
                title="вил"
                onClick="playSound(this);"
              >
                will
              </a>
              .
            </div>
          </div>
          <div>
            Если мы&nbsp;подставим на&nbsp;место
            <a
              className="red"
              href="javascript:void(0)"
              title="лав"
              onClick="playSound(this);"
            >
              love
            </a>
            аналогичный глагол из&nbsp;базового списка, например:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="лив"
                  onClick="playSound(this);"
                >
                  live{" "}
                </a>
                – <em>жить</em>
              </li>
            </ul>
          </div>
          <div>мы&nbsp;будем иметь:</div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай лив"
                  onClick="playSound(this);"
                >
                  I live
                </a>
                – <em>я живу</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю лив"
                  onClick="playSound(this);"
                >
                  you live
                </a>
                – <em>ты живешь</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи ливз"
                  onClick="playSound(this);"
                >
                  he lives
                </a>
                – <em>он живет</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши ливз"
                  onClick="playSound(this);"
                >
                  she lives
                </a>
                – <em>она живет</em>
              </li>
            </ul>
          </div>
          <div>
            В&nbsp;прошедшем времени добавляется буква –
            <a
              className="red"
              href="javascript:void(0)"
              title="ди"
              onClick="playSound(this);"
            >
              d:
            </a>
          </div>

          <div>
            <ul>
              <div id="vk_like">&nbsp;</div>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай ливд"
                  onClick="playSound(this);"
                >
                  I lived
                </a>
                – <em>я жил</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи ливд"
                  onClick="playSound(this);"
                >
                  he lived
                </a>
                – <em>он жил </em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ви ливд"
                  onClick="playSound(this);"
                >
                  we lived
                </a>
                – <em>мы жили</em>
              </li>
            </ul>
          </div>
          <div>
            В&nbsp;будущем времени перед глаголом добавляется вспомогательное
            слово
            <a
              className="red"
              href="javascript:void(0)"
              title="вил"
              onClick="playSound(this);"
            >
              will:
            </a>
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил лив"
                  onClick="playSound(this);"
                >
                  I will live
                </a>
                – <em>я буду жить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши вил лив"
                  onClick="playSound(this);"
                >
                  she will live
                </a>
                – <em>она будет жить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="зей вил лив"
                  onClick="playSound(this);"
                >
                  they will live
                </a>
                – <em>они будут жить</em>
              </li>
            </ul>
          </div>
          <div>
            А&nbsp;теперь о&nbsp;том, почему в&nbsp;таблицу не&nbsp;попало
            местоимение
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            .
          </div>
        </div>
        <div className="clearfloat"></div>
      </section>

      <div className="separator">&nbsp;</div>

      <section className="history">
        <div className="wrap_txt">
          <div>
            Правила английского языка (википедия:
            <a
              className="blue"
              href="javascript:void(0)"
              title="статья в Википедии"
              onclick="popup('img/system-differences.png', 749, 522, 'Английский язык'); return true;"
              rel="nofollow"
            >
              системные отличия от&nbsp;русского языка
            </a>
            ) гласят:
          </div>

          <div className="quote">
            <div>
              &quot;В&nbsp;третьем лице для (обозначения) людей используются
              местоимения:
            </div>

            <div>
              <ul>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="хи"
                    onClick="playSound(this);"
                  >
                    he
                  </a>
                  – <em>он</em>
                </li>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ши"
                    onClick="playSound(this);"
                  >
                    she
                  </a>
                  – <em>она</em>
                </li>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="зей"
                    onClick="playSound(this);"
                  >
                    they
                  </a>
                  – <em>они</em>
                </li>
              </ul>
            </div>
            <div>
              ... Большинство других существительных (в&nbsp;том числе, названия
              животных) заменяется местоимением:
            </div>

            <div>
              <ul>
                <div className="mlru">
                  <a
                    href="https://connect.mail.ru/share?url=http%3A%2F%2Fwww.english-polyglot.com"
                    target="_blank"
                    className="mrc__plugin_uber_like_button"
                    data-mrc-config="{'cm' : '1', 'sz' : '20', 'st' : '2', 'tp' : 'combo'}"
                  >
                    Нравится
                  </a>
                </div>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ит"
                    onClick="playSound(this);"
                  >
                    it
                  </a>
                  – <em>оно</em>
                </li>
              </ul>
            </div>
            <div>
              ... Нередко местоимения
              <a
                className="red"
                href="javascript:void(0)"
                title="хи"
                onClick="playSound(this);"
              >
                he
              </a>
              &nbsp;и&nbsp;
              <a
                className="red"
                href="javascript:void(0)"
                title="ши"
                onClick="playSound(this);"
              >
                she
              </a>
              используются для обозначения животных – персонажей сказок или
              домашних любимцев&quot;.
            </div>
          </div>
          <div>
            То&nbsp;есть, по&nbsp;правилам, местоимение
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            необходимо использовать, в&nbsp;том числе, и&nbsp;для обозначения
            животных. Однако, <em>нередко</em> эти правила не&nbsp;соблюдаются.
          </div>

          <div>
            Петров вообще не&nbsp;рассматривает местоимение
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            как <em>оно</em>:
          </div>
          <div>
            &laquo;Слово
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            обозначает просто <em>это</em>. Никакого отношения
            к&nbsp;местоимению <em>оно</em> слово
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            не&nbsp;имеет. К&nbsp;сожалению, многие, еще со&nbsp;школы
            помнят&nbsp;
            <a
              className="red"
              href="javascript:void(0)"
              title="хи"
              onClick="playSound(this);"
            >
              he,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="ши"
              onClick="playSound(this);"
            >
              she,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="ит"
              onClick="playSound(this);"
            >
              it
            </a>
            как три рода: <em>он, она, оно</em>. Это не&nbsp;верно&raquo;.
          </div>
        </div>
        <div className="wrap_txt">
          <div>
            А&nbsp;всё потому, что в&nbsp;английском языке нет понятия рода.
            По-русски мы&nbsp;можем сказать:
            <em>большой, большая, большое</em>. В&nbsp;английском языке есть
            одно слово:
            <a
              className="red"
              href="javascript:void(0)"
              title="биг"
              onClick="playSound(this);"
            >
              big.
            </a>
            Падежные отношения передаются позицией слов в&nbsp;предложении
            и&nbsp;предложными конструкциями.
          </div>

          <h4 className="espresso">Отрицательные предложения</h4>
          <div className="quote">
            Для отрицательного предложения также характерен прямой порядок слов.
          </div>
          <div>
            В&nbsp;
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-dont-love-image.gif', 690, 624,  'Отрицание настоящего времени')"
            >
              настоящем времени
            </a>
            к&nbsp;глаголу добавляется
            <a
              className="red"
              href="javascript:void(0)"
              title="ду нот"
              onClick="playSound(this);"
            >
              do not
            </a>
            (сокращенно
            <a
              className="red"
              href="javascript:void(0)"
              title="донт"
              onClick="playSound(this);"
            >
              don't
            </a>
            ):
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай донт лав"
                  onClick="playSound(this);"
                >
                  I don't love
                </a>
                – <em>я не люблю</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю донт лав"
                  onClick="playSound(this);"
                >
                  you don't love
                </a>
                – <em>ты не любишь</em>
              </li>
            </ul>
          </div>
          <div>
            И&nbsp;так далее. Когда
            <em>он</em>&nbsp;и&nbsp;<em>она</em>, то&nbsp;есть третья форма
            единственного числа, структура имеет форму
            <a
              className="red"
              href="javascript:void(0)"
              title="даз нот"
              onClick="playSound(this);"
            >
              does not
            </a>
            (сокращенно
            <a
              className="red"
              href="javascript:void(0)"
              title="дазнт"
              onClick="playSound(this);"
            >
              doesn't
            </a>
            ).
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи дазнт лав"
                  onClick="playSound(this);"
                >
                  he doesn't love
                </a>
                – <em>он не любит</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши дазнт лав"
                  onClick="playSound(this);"
                >
                  she doesn't love
                </a>
                – <em>она не любит</em>
              </li>
            </ul>
          </div>
          <div>
            Если
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-didnt-not-love-image.gif', 690, 624,  'Отрицание в прошедшем времени')"
            >
              отрицание в&nbsp;прошедшем времени
            </a>
            то&nbsp;к&nbsp;местоимениям добавляется
            <a
              className="red"
              href="javascript:void(0)"
              title="дид нот"
              onClick="playSound(this);"
            >
              did not
            </a>
            .
          </div>

          <div>
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-will-not-love-image.gif', 690, 624,  'Отрицание в будущем времени')"
            >
              Отрицание в&nbsp;будущем
            </a>
            –
            <a
              className="red"
              href="javascript:void(0)"
              title="вил нот"
              onClick="playSound(this);"
            >
              will not{" "}
            </a>
            (cокращенно
            <a
              className="red"
              href="javascript:void(0)"
              title="воунт"
              onClick="playSound(this);"
            >
              won't
            </a>
            ).
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил нот лав"
                  onClick="playSound(this);"
                >
                  I will not love
                </a>
                – <em>я не буду любить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ю вил нот лав"
                  onClick="playSound(this);"
                >
                  you will not love
                </a>
                – <em>ты не будешь любить</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfloat"></div>
      </section>

      <div className="separator">&nbsp;</div>
      <section className="history">
        <div className="wrap_txt">
          <div>
            По&nbsp;словам Дмитрия Петрова, базовая таблица глагола –
            &laquo;самая трудная и&nbsp;самая главная в&nbsp;английском языке.
            Освоил&nbsp;ее, считай освоил половину языка&raquo;.
          </div>
          <div className="quote blue">
            В&nbsp;финальной части каждого урока&nbsp;Вы найдете
            <a
              href="generator-fraz.html"
              title="Перейти на страницу  генератора фраз"
              target="_blank"
              className="red bold cap"
            >
              генератор фраз
            </a>
            . С&nbsp;его помощью освоить базовую таблицу глагола будет проще.
            Сложность фраз, выдаваемых генератором, с&nbsp;каждым уроком будет
            возрастать, и&nbsp;Вы можете, перемещаясь по&nbsp;урокам, выбирать
            необходимый уровень сложности.
          </div>
          <h4 className="espresso">Вопросительные предложения</h4>
          <div className="quote">
            <div>
              Для вопросительного предложения характерен обратный порядок слов:
            </div>
            <div>
              <em>глагол</em> (обычно вспомогательный) –<em>подлежащее</em> –{" "}
              <em>глагол</em> –<em>второстепенные члены предложения</em>.
            </div>
          </div>
          <div>
            В&nbsp;
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-do-i-love-image.gif', 690, 624,  'Вопрос в настоящем времени')"
            >
              настоящем времени
            </a>
            появляется вспомогательный глагол –
            <a
              className="red"
              href="javascript:void(0)"
              title="ду"
              onClick="playSound(this);"
            >
              do:
            </a>
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ду ай лав"
                  onClick="playSound(this);"
                >
                  do I love?
                </a>
                – <em>люблю ли я?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ду ю лав"
                  onClick="playSound(this);"
                >
                  do you love?
                </a>
                – <em>любишь ли ты?</em>
              </li>
            </ul>
          </div>
          <div>
            Если <em>он</em>&nbsp;или <em>она</em>, то –
            <a
              className="red"
              href="javascript:void(0)"
              title="даз"
              onClick="playSound(this);"
            >
              does:
            </a>
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="даз хи лав"
                  onClick="playSound(this);"
                >
                  does he love?
                </a>
                – <em>любит ли он?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="даз ши лав"
                  onClick="playSound(this);"
                >
                  does she love?
                </a>
                – <em>любит ли она?</em>
              </li>
            </ul>
          </div>
          <div>
            В
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-did-i-love-image.gif', 690, 624,  'Вопрос в прошедшем времени')"
            >
              &nbsp;прошедшем времени
            </a>
            добавляется слово
            <a
              className="red"
              href="javascript:void(0)"
              title="дид"
              onClick="playSound(this);"
            >
              did:
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="дид ай лав"
                  onClick="playSound(this);"
                >
                  did I love?
                </a>
                – <em>любил ли я?</em>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="дид ю лав"
                  onClick="playSound(this);"
                >
                  did you love?
                </a>
                – <em> любила ли ты?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="дид хи лав"
                  onClick="playSound(this);"
                >
                  did he love?
                </a>
                – <em> любил ли он?</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap_txt">
          <div>
            И&nbsp;
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-will-i-love-image.gif', 690, 624,  'Вопрос в будущем времени')"
            >
              вопрос в&nbsp;будущем
            </a>
            – впереди ставится
            <a
              className="red"
              href="javascript:void(0)"
              title="вил"
              onClick="playSound(this);"
            >
              will.
            </a>
          </div>

          <div>
            <ul>
              <div
                className="fb-like fb-not-like"
                data-href="http://www.english-polyglot.com"
                data-send="false"
                data-layout="button_count"
                data-width="200"
                data-show-faces="true"
                data-font="arial"
              ></div>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вил ай лав"
                  onClick="playSound(this);"
                >
                  will I love?
                </a>
                – <em>полюблю ли я?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вил ю лав"
                  onClick="playSound(this);"
                >
                  will you love?
                </a>
                – <em>полюбишь ли ты?</em>
              </li>
            </ul>
          </div>
          <div>
            &laquo;Исторически так сложилось, что слова&nbsp;
            <a
              className="red"
              href="javascript:void(0)"
              title="ду"
              onClick="playSound(this);"
            >
              do,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="даз"
              onClick="playSound(this);"
            >
              does,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="дид"
              onClick="playSound(this);"
            >
              did{" "}
            </a>
            сами по&nbsp;себе означают <em>делать</em>. Носитель языка, который
            может быть вообще неграмотным и&nbsp;может не&nbsp;знать этих
            таблиц, при этом будет говорить правильно. Поскольку
            он&nbsp;воспринимает эти слова как
            <em>делает</em>. <em>Делал&nbsp;ли ты&nbsp;это?</em>
            &raquo;
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="даз хи лав"
                  onClick="playSound(this);"
                >
                  does he love?
                </a>
                – <em>делает ли он любовь?</em>
              </li>
            </ul>
          </div>
          <div>
            Поначалу такая форма быстрого перевода может облегчить понимание.
          </div>
          <div>
            Итак, по&nbsp;оси икс у&nbsp;нас форма высказывания:
            <em>утверждение, вопрос</em> или <em>отрицание</em>. По&nbsp;оси
            игрек время: <em>происходит сейчас?</em>
            <em>происходило в&nbsp;прошлом?</em> или
            <em>произойдет в&nbsp;будущем?</em>
          </div>

          <div className="round">
            Если Вам удобнее воспринимать время по&nbsp;оси&nbsp;икс, Вам
            поможет
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/table-base.gif', 690, 624, 'Транспонированная таблица глагола')"
            >
              транспонированная таблица глагола
            </a>
            , в&nbsp;которой столбцы и&nbsp;строки переставлены местами
          </div>

          <div>
            Идем дальше. В&nbsp;словарном запасе среднестатистического носителя
            не&nbsp;более 50-60&nbsp;глаголов, которыми он&nbsp;пользуется
            регулярно. Остальные глаголы, общим числом в&nbsp;несколько тысяч,
            употребляются изредка – в&nbsp;10% речи.
          </div>
          <div>
            Среди самых употребимых глаголов основную массу составляют
            неправильные глаголы, поскольку именно частое употребление приводит
            к&nbsp;их&nbsp;искажению.
          </div>
          <div>
            Другая часть – правильные глаголы, такие как
            <a
              className="red"
              href="javascript:void(0)"
              title="лав"
              onClick="playSound(this);"
            >
              love
            </a>
            или
            <a
              className="red"
              href="javascript:void(0)"
              title="лив"
              onClick="playSound(this);"
            >
              live
            </a>
            или, например:
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вёк"
                  onClick="playSound(this);"
                >
                  work
                </a>
                – <em>работать</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="оупен"
                  onClick="playSound(this);"
                >
                  open
                </a>
                – <em>открыть</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="клоуз"
                  onClick="playSound(this);"
                >
                  close
                </a>
                – <em>закрыть</em>
              </li>
            </ul>
          </div>
        </div>

        <div className="clearfloat"></div>
      </section>

      <div className="separator">&nbsp;</div>

      <section className="history">
        <div className="wrap_txt">
          <div>
            Но&nbsp;без неправильных глаголов – никуда. Одно радует
            их&nbsp;будет не&nbsp;так много: 20-30. Вот один
            из&nbsp;неправильных глаголов:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="си"
                  onClick="playSound(this);"
                >
                  see
                </a>
                – <em>видеть</em>
              </li>
            </ul>
          </div>
          <div>Как&nbsp;же он&nbsp;видоизменяется?</div>
          <div className="tweet">
            <a
              href="https://twitter.com/share"
              rel="nofollow"
              className="twitter-share-button"
            >
              Tweet
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай си"
                  onClick="playSound(this);"
                >
                  I see
                </a>
                – <em>я вижу</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи сис"
                  onClick="playSound(this);"
                >
                  he sees
                </a>
                – <em>он видит</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил си"
                  onClick="playSound(this);"
                >
                  I will see
                </a>
                – <em>я увижу</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил нот си"
                  onClick="playSound(this);"
                >
                  I will not see
                </a>
                – <em>я не увижу</em>
              </li>
            </ul>
          </div>
          <div>Вроде всё точно по&nbsp;таблице:</div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай донт си"
                  onClick="playSound(this);"
                >
                  I don't see
                </a>
                – <em>я не вижу</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи дазнт си"
                  onClick="playSound(this);"
                >
                  he doesn't see
                </a>
                – <em>он не видит</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ви диднт си"
                  onClick="playSound(this);"
                >
                  we didn't see
                </a>
                – <em>мы не видели</em>
              </li>
            </ul>
          </div>
          <div>И&nbsp;тут, кажется, без изменений:</div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="дид ю си"
                  onClick="playSound(this);"
                >
                  did you see?
                </a>
                – <em> ты видел?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ду ю си"
                  onClick="playSound(this);"
                >
                  do you see?
                </a>
                – <em> ты видишь?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вил ю си"
                  onClick="playSound(this);"
                >
                  will you see?
                </a>
                – <em>а ты увидишь?</em>
              </li>
            </ul>
          </div>
          <div>
            И&nbsp;только в&nbsp;одном месте из&nbsp;девяти
            в&nbsp;утвердительном предложении прошедшего времени появляется
            &laquo;искаженная веками&raquo; форма:
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай соу"
                  onClick="playSound(this);"
                >
                  I saw
                </a>
                – <em>я видел</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши соу"
                  onClick="playSound(this);"
                >
                  she saw
                </a>
                – <em>она видела</em>
              </li>
            </ul>
          </div>
          <div>
            И&nbsp;так далее... Запомнить просто: в&nbsp;одном месте
            из&nbsp;девяти:
            <strong>утвердительное предложение прошедшего времени</strong>.
          </div>
          <div>С&nbsp;базовой таблицей глагола – всё. Можно перевести дух.</div>
          <div>
            Многих может удивить петровский подход к&nbsp;подаче теоретической
            базы. Глаголы – отдельно, причастия – отдельно.
          </div>
        </div>
        <div className="wrap_txt">
          <div>
            Однако он&nbsp;уверен, что &laquo;причастия не&nbsp;надо валить
            в&nbsp;кучу с&nbsp;формами глагола&raquo;. А&nbsp;причастие как
            мы&nbsp;помним, это значит
            <em>сделанное, увиденное, построенное</em> и&nbsp;так далее.
          </div>
          <div>
            Чтобы было видно неправильный глагол, мы&nbsp;его записываем вот
            так:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="си"
                  onClick="playSound(this);"
                >
                  see
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="соу"
                  onClick="playSound(this);"
                >
                  (saw)
                </a>
                – <em>видеть</em>
              </li>
            </ul>
          </div>
          <div>
            В&nbsp;скобках - вторая форма глагола, которая употребляется только
            в&nbsp;одном месте: в
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/tablica-glagolov-petrova-i-saw-image.gif', 690, 624, 'Утвердительная форма в прошедшем времени')"
            >
              утвердительном предложении прошедшего времени
            </a>
            . Во&nbsp;всех остальных случаях обычное:
            <a
              className="red"
              href="javascript:void(0)"
              title="си"
              onClick="playSound(this);"
            >
              see
            </a>
            . Например:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="кам"
                  onClick="playSound(this);"
                >
                  come
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="кэйм"
                  onClick="playSound(this);"
                >
                  (came)
                </a>
                – <em>приходить</em>
              </li>
            </ul>
          </div>
          <div>
            Глагол – неправильный. Он&nbsp;во&nbsp;всех формах ведет себя
            стандартно:
          </div>

          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай кам"
                  onClick="playSound(this);"
                >
                  I come
                </a>
                – <em>я прихожу</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай вил кам"
                  onClick="playSound(this);"
                >
                  I will come
                </a>
                – <em>я буду приходить</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вил ю кам"
                  onClick="playSound(this);"
                >
                  will you come?
                </a>
                – <em>ты будешь приходить?</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ши диднт кам"
                  onClick="playSound(this);"
                >
                  she didn't come
                </a>
                – <em>она не приходила</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="дид хи кам"
                  onClick="playSound(this);"
                >
                  did he come?
                </a>
                – <em>он приходил?</em>
              </li>
            </ul>
          </div>
          <div>
            И&nbsp;так далее. И&nbsp;только в&nbsp;одном месте – при утверждении
            в&nbsp;прошедшем времени будет:
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ай кэйм"
                  onClick="playSound(this);"
                >
                  I came
                </a>
                – <em>я приходил</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="хи кэйм"
                  onClick="playSound(this);"
                >
                  he came
                </a>
                – <em>он приходил</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ви кэйм"
                  onClick="playSound(this);"
                >
                  we came
                </a>
                – <em>мы приходили</em>
              </li>
            </ul>
          </div>

          <div>
            И помните, каким бы ни был вспомогательный глагол:
            <a
              className="red"
              href="javascript:void(0)"
              title="вил"
              onClick="playSound(this);"
            >
              will,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="даз"
              onClick="playSound(this);"
            >
              does,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="дид"
              onClick="playSound(this);"
            >
              did
            </a>
            после них всегда идет только основная форма глагола.
            <a
              className="red"
              href="javascript:void(0)"
              title="лив"
              onClick="playSound(this);"
            >
              Live,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="лав"
              onClick="playSound(this);"
            >
              love,
            </a>
            <a
              className="red"
              href="javascript:void(0)"
              title="кам"
              onClick="playSound(this);"
            >
              come{" "}
            </a>
            и так далее. Вне зависимости от того, какой глагол – правильный или
            неправильный.
          </div>
        </div>
        <div className="clearfloat"></div>
      </section>

      <div className="separator">&nbsp;</div>
      <section className="history">
        <div className="wrap_txt">
          <div className="quote">
            <div>
              За небольшим исключением, каждый глагол русского языка принадлежит
              либо к совершенному, либо к несовершенному виду. Большинство
              глаголов образуют пары совершенного и несовершенного вида с тем же
              значением:
            </div>
            <div>
              <ul>
                <div>Что делать? – Что сделать?</div>
                <li>
                  <em>видеть</em> (несов.) – <em>увидеть</em> (сов.)
                </li>
                <li>
                  <em>приходить</em> (несов.) – <em>прийти</em> (сов.)
                </li>
              </ul>
            </div>

            <div>
              Английский язык не имеет такой грамматической категории как
              совершенный/несовершенный вид. Поэтому, при переводе пары русских
              глаголов совершенного и несовершенного видов используются либо
              совсем разные английские глаголы, либо фразовые обороты. Например:
            </div>

            <div>
              <ul>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай нью"
                    onClick="playSound(this);"
                  >
                    I knew
                  </a>
                  – <em>я знал</em>,
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай фаунд аут"
                    onClick="playSound(this);"
                  >
                    I found out
                  </a>
                  – <em>я узнал</em>
                </li>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай выз эйбл ту"
                    onClick="playSound(this);"
                  >
                    I was able to
                  </a>
                  – <em>я мог</em>,
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай сакси́дид"
                    onClick="playSound(this);"
                  >
                    I succeeded
                  </a>
                  – <em>я смог</em>
                </li>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай вонтид ту"
                    onClick="playSound(this);"
                  >
                    I wanted to
                  </a>
                  – <em>я хотел</em>,
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай трайд ту"
                    onClick="playSound(this);"
                  >
                    I tried to
                  </a>
                  – <em>я захотел</em>
                </li>
                <li>
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай дид нот вонтэ"
                    onClick="playSound(this);"
                  >
                    I did not want to
                  </a>
                  – <em>я не хотел</em>,
                  <a
                    className="red"
                    href="javascript:void(0)"
                    title="ай рифъю́зд"
                    onClick="playSound(this);"
                  >
                    I refused
                  </a>
                  – <em>я расхотел</em>
                </li>
              </ul>
            </div>
            <div>Вариант перевода будет зависеть от контекста.</div>
          </div>
          <div className="odk" id="ok_shareWidget"></div>
          <div>Подробнее об этом в 11 уроке.</div>
        </div>
        <div className="wrap_txt">
          <div>Рассмотрим еще два неправильных глагола:</div>
          <div>
            <ul>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="гоу"
                  onClick="playSound(this);"
                >
                  go{" "}
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вент"
                  onClick="playSound(this);"
                >
                  (went)
                </a>
                – <em>идти</em>
              </li>
              <li>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ноу"
                  onClick="playSound(this);"
                >
                  know{" "}
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="нью"
                  onClick="playSound(this);"
                >
                  (knew)
                </a>
                – <em>знать</em>
              </li>
            </ul>
          </div>
          <div>
            Схема работы с&nbsp;ними та&nbsp;же. Вы&nbsp;берете глагол
            и&nbsp;&laquo;прокручиваете&raquo; его по&nbsp;всем девяти клеткам.
            Занимает это от&nbsp;20&nbsp;до&nbsp;30&nbsp;секунд. Потом берете
            другой глагол.
          </div>

          <div>
            Подведем итог 1 урока. У нас есть первые
            <a
              className="blue"
              href="javascript:void(0)"
              title="увеличить"
              onclick="popup('img/first-9-most-used-English-verbs.gif', 526, 650,  'Первые 9 глаголов')"
            >
              9 глаголов
            </a>
            из разряда самых употребляемых:
          </div>
          <div className="hardtab white">
            <div className="row top-bottom blue">
              <div className="tre upper cond">Самые употребляемые глаголы</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">1</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="лав"
                  onClick="playSound(this);"
                >
                  love
                </a>
              </div>
              <div className="tr50 tre">любить</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">2</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="лив"
                  onClick="playSound(this);"
                >
                  live
                </a>
              </div>
              <div className="tr50 tre">жить</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">3</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вёк"
                  onClick="playSound(this);"
                >
                  work
                </a>
              </div>
              <div className="tr50 tre">работать</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">4</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="оупен"
                  onClick="playSound(this);"
                >
                  open
                </a>
              </div>
              <div className="tr50 tre">открыть</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">5</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="клоуз"
                  onClick="playSound(this);"
                >
                  close
                </a>
              </div>
              <div className="tr50 tre">закрывать</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">6</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="си"
                  onClick="playSound(this);"
                >
                  see
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="соу"
                  onClick="playSound(this);"
                >
                  (saw)
                </a>
              </div>
              <div className="tr50 tre">видеть</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">7</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="кам"
                  onClick="playSound(this);"
                >
                  come
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="кэйм"
                  onClick="playSound(this);"
                >
                  (came)
                </a>
              </div>
              <div className="tr50 tre">приходить</div>
            </div>

            <div className="row top-bottom">
              <div className="od10 tre">8</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="гоу"
                  onClick="playSound(this);"
                >
                  go
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="вент"
                  onClick="playSound(this);"
                >
                  (went)
                </a>
              </div>
              <div className="tr50 tre">идти</div>
            </div>

            <div className="row top">
              <div className="od10 tre">9</div>
              <div className="dv40 tre">
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="ноу"
                  onClick="playSound(this);"
                >
                  know
                </a>
                <a
                  className="red"
                  href="javascript:void(0)"
                  title="нью"
                  onClick="playSound(this);"
                >
                  (knew)
                </a>
              </div>
              <div className="tr50 tre">знать</div>
            </div>
          </div>
          <div>
            А&nbsp;теперь немного упражнений. Вооружитесь базовой таблицей
            глагола и&nbsp;попробуйте перевести на&nbsp;английский язык
            следующие фразы. А&nbsp;потом, кликая по&nbsp;ним, проверьте
            правильность перевода. Возьмем два глагола:
          </div>
          <ul>
            <li>
              <a
                className="red"
                href="javascript:void(0)"
                title="оупен"
                onClick="playSound(this);"
              >
                open{" "}
              </a>
              – <em>открывать</em>
            </li>
            <li>
              <a
                className="red"
                href="javascript:void(0)"
                title="клоуз"
                onClick="playSound(this);"
              >
                close{" "}
              </a>
              – <em>закрывать</em>
            </li>
          </ul>
        </div>

        <div className="clearfloat"></div>
      </section>

      <div className="separator">&nbsp;</div>

      <section className="history">
        <div className="wrap_txt">
          <details id="dragObjects">
            <div id="d1" className="fixedImg">
              <div className="leftBtn">
                <div>
                  <span onClick="plusImage('d1')" title="увеличить">
                    +
                  </span>
                  <span onClick="minusImage('d1')" title="уменьшить">
                    &minus;
                  </span>
                </div>
              </div>
              <img
                data-src="img/tablica-glagolov-petrova-image.gif"
                name="imgd1"
                width="100%"
                height="100%"
                id="imgd1"
                border="0"
                alt="Базовая таблица глаголов Петрова"
                className="lazyload"
              />
              <div className="rightBtn">
                <span onClick="closeObject('d1')" title="закрыть">
                  ×
                </span>
              </div>
            </div>

            <div id="d2" className="fixedImg">
              <div className="leftBtn">
                <div>
                  <span onClick="plusImage('d2')" title="увеличить">
                    +
                  </span>
                  <span onClick="minusImage('d2')" title="уменьшить">
                    &minus;
                  </span>
                </div>
              </div>
              <img
                id="imgd2"
                data-src="img/table-base.gif"
                width="100%"
                height="100%"
                alt="Транспонированная базовая таблица глаголов Петрова"
                className="lazyload"
              />
              <div className="rightBtn">
                <span onClick="closeObject('d2')" title="закрыть">
                  ×
                </span>
              </div>
            </div>
          </details>

          <div className="round">
            чтобы иметь перед глазами таблицу глаголов, откройте её и отодвиньте
            в сторону
            <br />(
            <a
              className="green bold cap"
              href="javascript:void(0)"
              title="открыть"
              onclick="showObject('d1');"
            >
              обычная
            </a>
            или&nbsp;
            <a
              className="green bold cap"
              href="javascript:void(0)"
              title="открыть"
              onclick="showObject('d2')"
            >
              транспонированная
            </a>
            &nbsp;– время по&nbsp;оси&nbsp;Х). При прокрутке страницы таблица
            будет оставаться на месте.
          </div>

          <div className="round white">
            кликнув по&nbsp;<a className="green">реплике</a>, Вы&nbsp;откроете
            её&nbsp;перевод и&nbsp;упрощенную транскрипцию
          </div>

          <ul>
            <li>
              <a
                id="gree"
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I will open', 'Ай вил оупен'); return false"
              >
                <em>Я открою</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I opened', 'Ай оупенд'); return false"
              >
                <em>Я открыл</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Do you open?', 'Ду ю оупен'); return false"
              >
                <em>Ты открываешь?</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Does she open?', 'Даз ши оупен'); return false"
              >
                <em>Она открывает?</em>
              </a>
            </li>

            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Did you open?', 'Дид ю оупен'); return false"
              >
                <em>Ты открыл?</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Will you open?', 'Вил ю оупен'); return false"
              >
                <em>Ты откроешь?</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I will not open', 'Ай вил нот оупен'); return false"
              >
                <em>Я не буду открывать</em>
              </a>
            </li>
            <li>
              <a
                className="green"
                href="javascript:void(0)"
                title="перевести"
                onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'We&nbsp;didn&rsquo;t open', 'Ви диднт оупен'); return false"
              >
                <em>Мы не открывали</em>
              </a>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I close', 'Ай клоуз'); "
                >
                  <em>Я закрываю</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I will close', 'Ай вил клоуз'); return false"
                >
                  <em>Я закрою</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Will you close?', 'Вил ю клоуз'); return false"
                >
                  <em>Ты закроешь?</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I will not close', 'Ай вил нот клоуз'); return false"
                >
                  <em>Я не закрою</em>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrap_txt">
          <div>
            <ul>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I closed', 'Ай клоузд'); return false"
                >
                  <em>Я закрыл</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'She didn&rsquo;t close', 'Ши диднт клоуз'); return false"
                >
                  <em>Она не закрыла</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Did you close?', 'Дид ю клоуз'); return false"
                >
                  <em>А ты закрыл?</em>
                </a>
              </li>
              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'I&nbsp;don&rsquo;t close', 'Ай донт клоуз'); return false"
                >
                  <em>Я не закрываю</em>
                </a>
              </li>

              <li>
                <a
                  className="green"
                  href="javascript:void(0)"
                  title="перевести"
                  onclick="this.style.textDecoration='line-through';popup('', null, null, 'Перевод', 'Не&nbsp;doesn&rsquo;t close', 'Хи дазнт клоуз'); return false"
                >
                  <em>Он не закрывает</em>
                </a>
              </li>
            </ul>
          </div>
          <div>
            Забегая вперед скажу, что помимо этой самой первой и&nbsp;самой
            сложной таблицы, есть несколько других, меньших по&nbsp;объему
            и&nbsp;легче запоминаемых. Но&nbsp;все последующие схемы базируются
            именно на&nbsp;первой таблице глагола.
          </div>
          <div>
            Если Вы&nbsp;сумеете довести работу по&nbsp;этой таблице
            до&nbsp;автоматизма, Вы&nbsp;сильно облегчите себе жизнь. Ведь при
            попытке заговорить по-английски Вам сначала нужно вспомнить
            правильную глагольную форму.
          </div>
          <div>
            А&nbsp;после того как&nbsp;Вы научитесь быстро строить простые
            фразы, Вы&nbsp;сможете легко добавлять к&nbsp;ним подробности
            и&nbsp;другие структуры.
          </div>
          <div></div>
          <div className="quote blue">
            А&nbsp;теперь закройте базовую таблицу глагола и&nbsp;откройте
            {/* <!--<a href="generator-fraz.html" title="Перейти к генератору фраз" target="_blank" className="black-stroke">генератор&nbsp;фраз</a>-->*/}
            <a
              className="black-stroke"
              href="javascript:void(0)"
              onclick="popup('generator-fraz.html#page1?urok_num=1&urok_title=9&nbsp;verbs',
                          743, 617, 'Генератор фраз'); return false"
              title="Запустить генератор фраз"
            >
              упражнения для 1 урока
            </a>
            в генераторе фраз. Задача на&nbsp;сегодня – научиться,
            не&nbsp;заглядывая в&nbsp;таблицу, переводить фразы с&nbsp;девятью
            глаголами из&nbsp;первого урока. Первый клик по&nbsp;кнопке
            <span className="arrow-r ui-icon-arrow-r rotate"></span>
            &laquo;вперед&raquo; выводит фразу, второй – показывает ответ.
            Сначала попробуйте переводить фразы с&nbsp;английского
            на&nbsp;русский, а&nbsp;затем в&nbsp;обратном порядке.
          </div>
          <div>
            И&nbsp;в&nbsp;заключении поговорим о&nbsp;погружении в&nbsp;среду
            английского языка.
          </div>
        </div>

        <div className="clearfloat"></div>
      </section>

      <section className="history">
        <hgroup className="bb">
          <h2>Фрагмент фильма Аватар</h2>
        </hgroup>
        <section className="wrap_txt">
          <p>
            Так&nbsp;же как и&nbsp;ребенок, оказываясь один на&nbsp;один
            со&nbsp;взрослой речью, люди, изучающие английский язык, рано или
            поздно сталкиваются с&nbsp;речью носителей языка. Такая встреча
            может испугать из-за отсутствия навыка восприятия английской речи
            на&nbsp;слух. Однако, этот навык приобретается только с&nbsp;опытом.
            Поэтому, чем раньше&nbsp;Вы начнете погружаться в&nbsp;английскую
            языковую среду, тем лучше. И&nbsp;так&nbsp;же как и&nbsp;ребенку Вам
            нужно научиться распознавать и&nbsp;выхватывать из&nbsp;языка
            готовые конструкции, которые&nbsp;Вы сможете применить позднее.
          </p>
          <p>
            А&nbsp;лучший способ погрузиться в&nbsp;среду языка
            с&nbsp;бесконечным количеством расхожих фраз, идиоматических
            выражений и&nbsp;разнообразной лексики – посмотреть фильм
            на&nbsp;английском языке. Воспринимайте каждый предлагаемый фильм
            как учебное пособие. Посмотрите фрагмент один или несколько раз
            и&nbsp;попробуйте распознать английские фразы на&nbsp;слух,
            не&nbsp;заглядывая в&nbsp;субтитры.
          </p>
        </section>
        <section className="wrap_txt">
          <p>
            И&nbsp;первый отрывок – это
            <a
              className="black-stroke"
              href="javascript:void(0)"
              title="Посмотреть отрывок из фильма"
              onclick="popup('fragment-avatar.html', 970, 545, 'Аватар'); return true;"
            >
              фрагмент из&nbsp;фильма Аватар
            </a>
            . Обратите внимание каким простым может быть английский язык.
            Несложные реплики, подкрепленные визуальными средствами фильма, как
            будто специально созданы для изучения английского.
          </p>
          <p>
            Напоследок замечу, что художественный перевод иногда искажает
            правильное значение некоторых слов. Например, слово:
          </p>
          <p>
            <a
              className="red"
              href="javascript:void(0)"
              title="грэндфазэ"
              onClick="playSound(this);"
            >
              grandfather
            </a>
            – <em>дедушка, дед</em>
          </p>
          <p>
            в&nbsp;русской озвучке фильма переведено как
            <em>прадедушка</em>. Кто-то увидит в&nbsp;этом ошибку, кто-то –
            усиление эффекта.
          </p>
        </section>

        <div className="clearfloat"></div>
      </section>
      {/* <!-- InstanceEndEditable --> */}
    </Layout>
  )
}
