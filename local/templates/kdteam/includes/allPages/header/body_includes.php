<script type='text/javascript'>
    <?php
    //STAROSELE-279
    /*
     *
     */ ?>
    (function() {
      var id = 9;

      var w = document.createElement('script');
      w.type = 'text/javascript';
      w.src = document.location.protocol +
          '//data.gk-mic.ru/pixel/pixel.js?s=' + id;
      w.async = true;
      w.id = 'pixelcode';
      var body = document.getElementsByTagName('script')[0];
      body.parentNode.insertBefore(w, body);

    })();

</script>
<? $OgImage = 'https://www.domvstaroselie.ru/local/templates/domvvidnom/img/svg/logo-mobile.svg';
$APPLICATION->SetPageProperty('og-image', '<meta property="og:image" content="' . $OgImage . '">'); ?>
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD87Q9V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->


<div id="SCBCallTrackingBlock" style="display: none !important;"> +7 (495)320-81-44</div>

<!-- callback-->
<script>
    <?php

    //                                function callbackFunction() {
    //                                    var adperftrackobj = {
    //                                        fullhost : 'wcm-ru.frontend.weborama.fr'
    //                                        ,site : 6270
    //                                        ,conversion_page : 77
    //                                    };
    //                                    try{adperfTracker.track( adperftrackobj );}catch(err){}
    //                                }
    ?>
</script>

<?php
//STAROSELE-279
/*
<div class="c-button">
    <a class="zingayad9310fe12ca6cc2ef3b93d8ad19b4cb9 zingaya_kd " id="zingayaButtond9310fe12ca6cc2ef3b93d8ad19b4cb9" href="https://zingaya.com/widget/d9310fe12ca6cc2ef3b93d8ad19b4cb9" onclick="typeof(ga)=='undefined'?'':ga('send', 'event', 'Zingaya', 'ButtonClick');typeof(_gat)=='undefined'?'':_gat._getTrackerByName()._setAllowLinker(true); window.open(typeof(_gat)=='undefined'?this.href+'?referrer='+escape(window.location.href)+'':_gat._getTrackerByName()._getLinkerUrl(this.href+'?referrer='+escape(window.location.href)+''), '_blank', 'width=236,height=220,resizable=no,toolbar=no,menubar=no,location=no,status=no'); return false;"></a>
    <script>
        var ZingayaConfig = {"buttonLabel":"Интернет Звонок","labelColor":"#813a08","labelFontSize":15,"labelTextDecoration":"none","labelFontWeight":"bold","labelShadowDirection":"bottom","labelShadowColor":"#edd7a7","labelShadow":0,"buttonBackgroundColor":"#ffaa20","buttonGradientColor1":"#ffaa20","buttonGradientColor2":"#ff9d1c","buttonGradientColor3":"#ffa51e","buttonGradientColor4":"#ffa51d","buttonShadow":"true","buttonHoverBackgroundColor":"#69ad26","buttonHoverGradientColor1":"#ffbb00","buttonHoverGradientColor2":"#ffaa00","buttonHoverGradientColor3":"#ffae00","buttonHoverGradientColor4":"#ffb300","buttonActiveShadowColor1":"#000000","buttonActiveShadowColor2":"#985100","buttonCornerRadius":2,"buttonPadding":10,"iconColor":"#fff","iconOpacity":1,"iconDropShadow":0,"iconShadowColor":"#13487f","iconShadowDirection":"bottom","iconShadowOpacity":0.5,"callme_id":"d9310fe12ca6cc2ef3b93d8ad19b4cb9","poll_id":null,"analytics_id":"UA-130584699-1","zid":"802391e4d31fb7167cfa4f019ac8445d","type":"button","widgetPosition":"right","plain_html":false,"save":1};
        (function(d, t) {
            var g = d.createElement(t),s = d.getElementsByTagName(t)[0];g.src = '//d1bvayotk7lhk7.cloudfront.net/js/zingayabutton.js';g.async = 'true';
            g.onload = g.onreadystatechange = function() {
                if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
                try {Zingaya.load(ZingayaConfig, 'zingayad9310fe12ca6cc2ef3b93d8ad19b4cb9'); if (!Zingaya.SVG()) {
                    var p = d.createElement(t);p.src='//d1bvayotk7lhk7.cloudfront.net/PIE.js';p.async='true';s.parentNode.insertBefore(p, s);
                    p.onload = p.onreadystatechange = function() {
                        if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
                        if (window.PIE) PIE.attach(document.getElementById("zingayaButton"+ZingayaConfig.callme_id));
                    }}} catch (e) {}};
            s.parentNode.insertBefore(g, s);
        }(document, 'script'));

    </script>
</div>
*/
?>