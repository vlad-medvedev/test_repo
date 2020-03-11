<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
$device = isMobileTabletDetect();
?><!doctype html>
<html class="<? if ($device == 'desktop') { ?>desktop<? } ?><? if ($device == 'tablet') { ?>tablet<? } ?><? if ($device == 'mobile') { ?>mobile<? } ?>">
<head>
    <?
    $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/header/head_includes.php", array(), array("MODE" => "html"));
    if ($APPLICATION->GetTemplatePath() == '/local/templates/kdteam/') { ?>
        <script src="/local/templates/kdteam/js/libs/jquery.min.js"></script>
        <script src="/local/templates/kdteam/js/libs/bx-core.js"></script>
        <script src="/local/templates/kdteam/js/libs/perfect-scrollbar.jquery.js"></script>
        <script src="/local/templates/kdteam/js/libs/magnificPopup.js"></script>
        <script src="/local/templates/kdteam/js/libs/jquery.inputmask.min.js"></script>
        <script src="/local/templates/kdteam/js/libs/cookie.js"></script>

        <link href="/local/templates/kdteam/css/pages/allPages/typography.css" rel="stylesheet" type="text/css">
        <?
    } else {
        $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/header/header_old_style.php", array(), array("MODE" => "html"));
    }

    ?>
 <? if ($device == 'desktop') { ?>
    <link href="/local/templates/kdteam/css/pages/allPages/aside_desktop.css" rel="stylesheet" type="text/css">
    <? } else { ?>
     <link href="/local/templates/kdteam/css/pages/allPages/aside_mobile.css" rel="stylesheet" type="text/css">
    <? } ?>

    <link href="/local/templates/kdteam/css/pages/allPages/breadcrumbs.css" rel="stylesheet" type="text/css">
    <link href="/local/templates/kdteam/css/pages/allPages/call_back.css" rel="stylesheet" type="text/css">

     <? if ($device != 'mobile') { ?>
    <link href="/local/templates/kdteam/css/pages/allPages/footer.css" rel="stylesheet" type="text/css">
     <? } ?>
    <link href="/local/templates/kdteam/css/pages/allPages/top_panel.css" rel="stylesheet" type="text/css">

    <script src="/local/templates/kdteam/js/pages/allPages.js"></script>
</head>

<body class="<? if ($APPLICATION->GetCurPage(false) === '/404.php'): ?>page-404<? endif; ?><? if ($APPLICATION->GetCurPage(false) === '/contacts/'): ?>page-contacts<? endif; ?><? if (CSite::InDir('/selection/') && empty($_GET['FLAT_ID'])): ?>page-paper<? endif; ?><? if (CSite::InDir('/selection/') && !empty($_GET['FLOOR_ID']) && empty($_GET['FLAT_ID'])): ?> page-paper-floor<? endif; ?>"
      id="body">

<?

$APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/header/body_includes.php", array(), array("MODE" => "html"));
?>

<? if ($USER->IsAdmin()) { ?>
    <div id="panel" class="hidden-print"><? $APPLICATION->ShowPanel() ?></div>
<? } ?>


<div class="wrapper">
    <main class="main">
        <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/top_panel.php", array(), array("MODE" => "html")); ?>
        <? if ($device == 'desktop') { ?>
            <aside class="aside_desktop hidden-print">

                <div class="aside_body">

                    <a class="aside_desktop__logo" <? if ($APPLICATION->GetCurPage(false) === '/'): ?> style="pointer-events: none;" <? endif; ?>
                       href="/"></a>
                    <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/aside/timer.php", array(), array("MODE" => "html")); ?>


                    <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/aside/callback.php", array(), array("MODE" => "html")); ?>


                    <div class="aside_btns">

                        <a class="slideup_button--js button button-primary aside_btns__link aside_btns__link--primary"
                           href="/selection/">Выбрать
                            на 3D-плане</a>
                        <a class="slideup_button--js button button-secondary aside_btns__link aside_btns__link--secondary"
                           href="/kvartiry/">Выбрать
                            по параметрам</a>
                    </div>

                </div>

                <div class="aside-footer">
                    <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/aside/aside_menu.php", array(), array("MODE" => "html")); ?>
                </div>
            </aside>
        <? } else { ?>

            <aside class="aside_mobile hidden-print">
                <a class="aside_mobile__logo" <? if ($APPLICATION->GetCurPage(false) === '/'): ?> style="pointer-events: none;" <? endif; ?>
                   href="/"></a>
                <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/aside/callback.php", array(), array("MODE" => "html")); ?>
                <div class="aside_btns">

                    <a class="slideup_button--js button button-secondary aside_btns__link" href="/kvartiry/">Выбрать
                        по параметрам</a>
                </div>
                <div class="aside_toggler">
                    <button class="aside_toggler__btn"><span class="aside_toggler__span"></span></button>
                </div>
                <div class="aside_body">


                    <a class="slideup_button--js button button-secondary aside_btns__link" href="/kvartiry/">Выбрать
                        по параметрам</a>

                    <? $APPLICATION->IncludeFile("/local/templates/kdteam/includes/allPages/aside/aside_menu.php", array(), array("MODE" => "html")); ?>
                </div>
            </aside>

        <? } ?>


<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/includes/meta/generate_seo_data_header.php'); ?>