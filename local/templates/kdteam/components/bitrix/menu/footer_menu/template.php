<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}?>

<?if (!empty($arResult)):?>
    <ul class="footer_menu">
        <?
        foreach ($arResult as $arItem):
            if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) {
                continue;
            }
            ?>
            <?if ($arItem["SELECTED"]):?>
            <li class="footer_menu__item">
                <a class="footer_menu__link footer_menu__link--selected" href="<?=$arItem["LINK"] ?>"><?=$arItem["TEXT"] ?></a>
            </li>
        <?else:?>
            <li class="footer_menu__item"><a class="footer_menu__link" href="<?=$arItem["LINK"] ?>"><?=$arItem["TEXT"] ?></a></li>
        <?endif?>
        <?endforeach?>
    </ul>
<?endif?>
