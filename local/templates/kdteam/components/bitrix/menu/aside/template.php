<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<? if (!empty($arResult)): ?>
    <nav class="aside_menu">
        <ul class="aside_menu__inner">
            <?
            foreach ($arResult as $arItem):
                if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) {
                    continue;
                }
                ?>
                <? if ($arItem["SELECTED"]):?>
                <li class="aside_menu__item"><a class="aside_menu__link <? if($arItem["LINK"] === "/commercial/"): ?>aside_menu__link--commercial<? endif; ?> aside_menu__link--selected" href="<?= $arItem["LINK"] ?>"><?= $arItem["TEXT"] ?></a></li>
            <? else:?>
                <li class="aside_menu__item"><a class="aside_menu__link <? if($arItem["LINK"] === "/commercial/"): ?>aside_menu__link--commercial<? endif; ?>" href="<?= $arItem["LINK"] ?>"><?= $arItem["TEXT"] ?></a></li>
            <? endif ?>
            <? endforeach ?>
        </ul>
    </nav>
    <!-- navigation-->
<? endif ?>