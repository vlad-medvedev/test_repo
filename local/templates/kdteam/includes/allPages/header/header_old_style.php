<link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=cyrillic"
      rel="stylesheet">
<?php
use Bitrix\Main\Page\Asset;
Asset::getInstance()->addCss("/local/templates/domvvidnom/css/general.css");
Asset::getInstance()->addCss("/local/templates/domvvidnom/css/landing.css");
//Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/jquery-ui.css");
//Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/promo.css");
Asset::getInstance()->addCss("/local/templates/domvvidnom/css/weekend.css");

if ($APPLICATION->GetCurPage(false) === '/protection/'):
    Asset::getInstance()->addCss("/local/templates/domvvidnom/css/protection.css");
endif;

if ($APPLICATION->GetCurPage(false) === '/commercial/'):
    Asset::getInstance()->addCss("/local/templates/domvvidnom/css/scrollbar.css");
    Asset::getInstance()->addCss("/local/templates/domvvidnom/css/timer.min.css");
endif;
if ($APPLICATION->GetCurPage(false) === '/escrow/'):
    Asset::getInstance()->addCss("/local/templates/domvvidnom/css/escrow.css");
endif;
Asset::getInstance()->addJs("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js");
Asset::getInstance()->addJs("https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
?>

<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=cyrillic" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/i18n/jquery-ui-i18n.min.js"></script>
<script src="/local/templates/domvvidnom/general.js"></script>
<link href="/local/templates/domvvidnom/css/timer.min.css" rel="stylesheet" type="text/css">
<link href="/local/templates/domvvidnom/css/perfect-scrollbar.css" rel="stylesheet" type="text/css">

<link href="/local/templates/domvvidnom/css/slick.css" rel="stylesheet" type="text/css">
<link href="/local/templates/domvvidnom/css/slick-theme.css" rel="stylesheet" type="text/css">
