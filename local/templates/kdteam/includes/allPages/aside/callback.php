<div class="callback">
    <?php if ($hypotecpage) { ?>
        <div class="callback-phone"><a class="ipoteka" href="tel:+74959664153">+7 (495) 966-41-53</a></div>
    <?php } else { ?>
        <div class="callback-phone"><a
                class="phone_number <? if ($APPLICATION->GetCurPage(false) === '/commercial/'): ?>com_phone<? endif; ?>"
                href="tel:+74959664153">+7 (495) 966-41-53</a></div>
    <?php } ?>
    <div class="callback-link"><a class="js-popup" href="#callback">Заказать
            звонок</a>
    </div>
    <div class="callback-link mic-id" style="display: none"></div>
</div>