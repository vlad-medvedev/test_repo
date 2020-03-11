<?
$APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/includes/meta/generate_seo_data.php');
?>
<? if ($device != 'mobile') { ?>
    <footer class="footer hidden-print">
        <div class="footer__section">
            <div class="footer__row">
                <? if ($device != 'tablet') { ?>
                <div class="footer__column">
                    <?
                    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_copyright.php", array(), array("MODE" => "html"));
                    ?>
                </div>
                <div class="footer__column">
                    <? $APPLICATION->IncludeComponent("bitrix:menu", "footer_menu", Array(
                        "ROOT_MENU_TYPE" => "footer_menu_first",
                        "MENU_CACHE_TYPE" => "N",
                        "MENU_CACHE_TIME" => "3600",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "MENU_CACHE_GET_VARS" => "",
                        "MAX_LEVEL" => "1",
                        "CHILD_MENU_TYPE" => "",
                        "USE_EXT" => "N",
                        "DELAY" => "N",
                        "ALLOW_MULTI_SELECT" => "N",
                    ),
                        false
                    ); ?>
                </div>
                <div class="footer__column">
                    <? $APPLICATION->IncludeComponent("bitrix:menu", "footer_menu", Array(
                        "ROOT_MENU_TYPE" => "footer_menu_second",
                        "MENU_CACHE_TYPE" => "N",
                        "MENU_CACHE_TIME" => "3600",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "MENU_CACHE_GET_VARS" => "",
                        "MAX_LEVEL" => "1",
                        "CHILD_MENU_TYPE" => "",
                        "USE_EXT" => "N",
                        "DELAY" => "N",
                        "ALLOW_MULTI_SELECT" => "N",
                    ),
                        false
                    ); ?>
                </div>
                <div class="footer__column">
                    <? $APPLICATION->IncludeComponent("bitrix:menu", "footer_menu", Array(
                        "ROOT_MENU_TYPE" => "footer_menu_third",
                        "MENU_CACHE_TYPE" => "N",
                        "MENU_CACHE_TIME" => "3600",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "MENU_CACHE_GET_VARS" => "",
                        "MAX_LEVEL" => "1",
                        "CHILD_MENU_TYPE" => "",
                        "USE_EXT" => "N",
                        "DELAY" => "N",
                        "ALLOW_MULTI_SELECT" => "N",
                    ),
                        false
                    ); ?>
                </div>
                <div class="footer__column">
                    <?
                    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_contacts.php", array(), array("MODE" => "html"));
                    ?>

                </div>

                <? } ?>
                <div class="footer__column">
                    <?
                    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_social.php", array(), array("MODE" => "html"));
                    ?>

                </div>

                <div class="footer__column">
                    <?
                    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_text.php", array(), array("MODE" => "html"));
                    ?>

                </div>

            </div>
        </div>
    </footer>
<? } ?>
</main>
</div>


<div class="mfp-hide popup" id="callback">
    <div class="call_back">
        <div class="call_back__title">Заказать звонок</div>
        <div class="num-mic-id mic-id" style="display: none"></div>
    </div>

    <form class="call_back__form" method="POST" enctype="multipart/form-data"
          onsubmit="ga('send','event', 'call_order_form', 'sendform');">

            <div class="call_back__form_item">
                <input class="call_back__form_field"
                       id="scb_call_name<? if ($APPLICATION->GetCurPage(false) === '/commercial/'): ?>_commercial<? endif; ?>"
                       type="text" name="name" autocomplete="off" placeholder="Имя" required>
            </div>


            <div class="call_back__form_item">
                <input class="call_back__form_field"
                       id="scb_call_phone<? if ($APPLICATION->GetCurPage(false) === '/commercial/'): ?>_commercial<? endif; ?>"
                       type="tel" name="phone" autocomplete="off" placeholder="+7 (___) ___-__-__" required>
            </div>

        <input type="hidden" name="utm_source" value="<?= $_COOKIE['utmSource']; ?>">
        <input type="hidden" name="utm_term" value="<?= $_COOKIE['utmTerm']; ?>">
        <input type="hidden" name="utm_campaign" value="<?= $_COOKIE['utmCampaign']; ?>">
        <input type="hidden" name="http_referer" value="<?= $_COOKIE['httpReferer']; ?>">
        <input type="hidden" class="input-mic-id" name="mic_id" value="">
        <?
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        ?>
        <input type="hidden" name="ip" value="<?= $ip ?>">
        <div class="call_back__form_privacy">
            Нажимая на кнопку «Отправить», Вы даете <a
                                href="/sogl/">согласие</a> на обработку
                        персональных данных.
                </div>
        <div class="call_back__form_error form-error-message"></div>


        <div class="form-group">

                <input class=" button button-primary call_back__form_submit"
                       id="scb_call_button<? if ($APPLICATION->GetCurPage(false) === '/commercial/'): ?>_commercial<? endif; ?>"
                       name="web_form_submit" type="submit" value="Отправить"/>

        </div>
    </form>

</div>

<div class="mfp-hide popup" id="callback-success">
        <div class="call_back_success">
        <div  class="call_back_success__title">Заказать звонок</div>
        <div class="call_back_success__text">Спасибо, Ваша заявка отправлена, в ближайшее время наши менеджеры свяжутся с Вами.</div>
        <a class="button button-primary call_back_success__btn" href="#" onclick="$.magnificPopup.close(); return false;">ОК</a>
    </div>
</div>


<?
$APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_includes.php", array(), array("MODE" => "html"));
if ($APPLICATION->GetTemplatePath() == '/local/templates/kdteam/') { ?>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,700&amp;subset=cyrillic"
          rel="stylesheet">


    <? if ($APPLICATION->GetCurPage(false) === '/vse-po-tvoemu/') { ?>
        <link href="/local/templates/kdteam/css/pages/vpt/vpt.css" rel="stylesheet" type="text/css">
        <script src="/local/templates/kdteam/js/pages/vpt.js"></script>
    <? } ?>

<? } else {
    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/footer/footer_old_style.php", array(), array("MODE" => "html"));
}
?>
</body>
</html>