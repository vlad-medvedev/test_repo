<?

//start Last-Modified
$LastModified_unix = strtotime(date("D, d M Y H:i:s", filectime($_SERVER['SCRIPT_FILENAME']))); // время последнего изменения страницы
$LastModified = gmdate("D, d M Y H:i:s \G\M\T", $LastModified_unix);
$IfModifiedSince = false;
if (isset($_ENV['HTTP_IF_MODIFIED_SINCE']))
$IfModifiedSince = strtotime(substr($_ENV['HTTP_IF_MODIFIED_SINCE'], 5));
if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']))
$IfModifiedSince = strtotime(substr($_SERVER['HTTP_IF_MODIFIED_SINCE'], 5));
if ($IfModifiedSince && $IfModifiedSince >= $LastModified_unix) {
header($_SERVER['SERVER_PROTOCOL'] . ' 304 Not Modified');
exit;
}
header('Last-Modified: ' . $LastModified);

//end Last-Modified



function isMobile()
{
$iphone = strpos($_SERVER['HTTP_USER_AGENT'], "iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'], "Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'], "webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'], "BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'], "iPod");
$mobile = strpos($_SERVER['HTTP_USER_AGENT'], "Mobile");
$symb = strpos($_SERVER['HTTP_USER_AGENT'], "Symbian");
$operam = strpos($_SERVER['HTTP_USER_AGENT'], "Opera M");
$htc = strpos($_SERVER['HTTP_USER_AGENT'], "HTC_");
$fennec = strpos($_SERVER['HTTP_USER_AGENT'], "Fennec/");
$winphone = strpos($_SERVER['HTTP_USER_AGENT'], "WindowsPhone");
$wp7 = strpos($_SERVER['HTTP_USER_AGENT'], "WP7");
$wp8 = strpos($_SERVER['HTTP_USER_AGENT'], "WP8");
return $iphone || $android || $palmpre || $berry || $ipod ||
$mobile || $symb || $operam || $htc || $fennec || $winphone
|| $wp7 || $wp8;
}


/*START UTM*/

$refererLink = parse_url($_SERVER["HTTP_REFERER"]);
$hostLink = parse_url($_SERVER["HTTP_HOST"]);
$refererLink['host'] = str_replace(' ', '', $refererLink['host']);
$hostLink['path'] = str_replace(' ', '', $hostLink['path']);

if (isset($_GET['utm_source'])) {
setcookie('utmSource', $_GET['utm_source'], time() + 60 * 30);
setcookie('utmTerm', $_GET['utm_term'], time() + 60 * 30);
setcookie('utmCampaign', $_GET['utm_campaign'], time() + 60 * 30);
$_COOKIE['utmSource'] = $_GET['utm_source'];
$_COOKIE['utmTerm'] = $_GET['utm_term'];
$_COOKIE['utmCampaign'] = $_GET['utm_campaign'];
setcookie('httpReferer', '', time() - 60 * 30);
$_COOKIE['httpReferer'] = '';
} else {
if ($USER->IsAdmin()):
//echo "<pre>"; print_r($refererLink['host']); echo "</pre>";
//echo "<pre>"; print_r($hostLink['path']); echo "</pre>";
endif;
if (empty($_COOKIE['utmSource'])) {
if ($refererLink["host"] !== $hostLink["path"]) {
setcookie('httpReferer', $refererLink["host"], time() + 60 * 30);
$_COOKIE['httpReferer'] = $refererLink["host"];
}
}
}

/*END UTM*/

?>

    <!-- Anti-flicker snippet (recommended)  -->
    <style>.async-hide {
            opacity: 0 !important
        } </style>
    <script>(function(a, s, y, n, c, h, i, d, e) {
        s.className += ' ' + y;
        h.start = 1 * new Date;
        h.end = i = function() {
          s.className = s.className.replace(RegExp(' ?' + y), '');
        };
        (a[n] = a[n] || []).hide = h;
        setTimeout(function() {
          i();
          h.end = null;
        }, c);
        h.timeout = c;
      })(window, document.documentElement, 'async-hide', 'dataLayer', 4000,
          {'GTM-KZG9PGL': true});</script>

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title><? $APPLICATION->ShowTitle() ?></title>
    <meta name="keywords" content="">
    <!--<meta name="description" content="">-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">


<? $APPLICATION->ShowHead(); ?>
<? $APPLICATION->ShowProperty('og-image'); ?>


    <!-- Google Tag Manager -->
    <script>(function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push(
            {'gtm.start': new Date().getTime(), event: 'gtm.js'},
        );
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-TD87Q9V');</script>
    <!-- End Google Tag Manager -->

<?
$last_modified_time = getlastmod();
header("Cache-Control: public");
header("Expires: " . date("r", time() + 10800));

if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $last_modified_time) {
    header('HTTP/1.1 304 Not Modified');
    die; /* убили всё, что ниже */
}
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $last_modified_time) . ' GMT');
?>
    <script type="text/javascript" data-skip-moving="true">
      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-122871320-1', {'allowAnchor': true});
      ga('send', 'pageview', {'page': location.pathname + location.search + location.hash});
      //Optimize - GTM-W6S2TVQ
      ga('require','GTM-W6S2TVQ');

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-122871320-1']);
      _gaq.push(['_trackPageview']);
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122871320-1"></script>

    <script>

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', 'UA-122871320-1', {'optimize_id': 'GTM-KZG9PGL'});

    </script>


    <script type="text/javascript">

      var __cs = __cs || [];

      __cs.push(['setCsAccount', 'mlGSFNvMg0Nt9ofqY86iKBXMBSRxnYKK']);

    </script>

    <script type="text/javascript" async src="https://app.comagic.ru/static/cs.min.js"></script>
    <script>
        <?php
        //STAROSELE-279
        /*


           (function (){
               var tss = document.createElement('script');
               tss.type = 'text/javascript';
               tss.async = true;
               tss.onload = function () {
                   //* start customizable content /
                   if (typeof webouuid != 'undefined') {
                       console.log(webouuid);
                       Comagic.setProperty('Weborama_ID', webouuid);
                   } else {
                       // *errors appear here /
                   }
                   //* end customizable content /
               };

               //* format=script is the only option that works with this script! /
               var format = 'script';
               var url   = 'https://redirect.frontend.weborama.fr/redirect/standard?url=';
               var redir = 'https://cntr.adrcntr.com/sync/?format=' + format + '&webouuid={WEBO_CID}';
               tss.src   = url + '' + encodeURIComponent(redir);

               var ss = document.getElementsByTagName('head')[0];
               try {
                   ss.parentNode.insertBefore(tss, ss);
               } catch(e) {}
           })();
       */?>
    </script>

    <script type="text/javascript" async src="//smartcallback.ru/api/SmartCallBack.js?t=lOR9kIFT8yfZwuZ9Wxoa"
            charset="utf-8"></script>

<?php
//STAROSELE-158
if (!empty($_GET["HOUSE_ID"]) and empty($_GET["FLOOR_ID"])) {
    $Canonical = '/selection/house' . $_GET["HOUSE_ID"] . '/';
} else {
    $Canonical = $APPLICATION->GetCurDir();
}
?>

    <link rel="canonical" href="<?= LIVE_SITE_URL . $Canonical; ?>">

    <script type="text/javascript" async src="//smartcallback.ru/api/SmartCallBack.js?t=lOR9kIFT8yfZwuZ9Wxoa"
            charset="utf-8"></script>


<?php
//STAROSELE-279


//<script type="text/javascript" src="https://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js"></script>
    ?>
