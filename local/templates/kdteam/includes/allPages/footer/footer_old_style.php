<!-- JS-->
<script src="/local/templates/domvvidnom/js/jquery.ba-throttle-debounce.js"></script>
<script src="/local/templates/domvvidnom/js/slick.min.js"></script>
<script src="/local/templates/domvvidnom/js/contacts_call.js"></script>
<script src="/local/templates/domvvidnom/js/scrollbar.js"></script>
<script src="/local/templates/domvvidnom/js/bundle.min.js"></script>
<script src="/local/templates/domvvidnom/js/perfect-scrollbar.jquery.js"></script>
<script src="/local/templates/domvvidnom/js/common.js"></script>
<? if ($APPLICATION->GetCurPage(false) === '/'): ?>
    <script src="/local/templates/domvvidnom/js/cookie.js"></script>
    <script src="/local/templates/domvvidnom/js/mosaic.js"></script>
    <!--<script src="/local/templates/domvvidnom/js/promo.js"></script>-->
<? endif; ?>

<? if ($APPLICATION->GetCurPage(false) === '/hypotec/'): ?>
    <script src="/local/templates/domvvidnom/bundle/fileupload.js"></script>
    <script src="/local/templates/domvvidnom/bundle/validate.js"></script>
    <script src="/local/templates/domvvidnom/bundle/messages_ru.js"></script>
    <script src="/local/templates/domvvidnom/bundle/calculator.js"></script>
<? endif; ?>