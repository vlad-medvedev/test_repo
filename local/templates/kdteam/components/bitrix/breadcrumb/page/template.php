<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();



//delayed function must return a string
if(empty($arResult))
    return "";

$num_items = count($arResult);

$strJson = '
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [';

$strReturn = '<ul class="breadcrumbs">';
$i=1;
for($index = 0, $itemSize = $num_items; $index < $itemSize; $index++)
{

    $title = htmlspecialcharsex($arResult[$index]["TITLE"]);
    $_SERVER['HTTP_HOST'] = str_replace(':443','',$_SERVER['HTTP_HOST']);//NOVOGRADP-126
    if($arResult[$index]["LINK"] <> "" && $index != $itemSize-1)
        $strReturn .= '<li class="breadcrumbs__item"><a class="breadcrumbs__link" href="'.$arResult[$index]["LINK"].'" title="'.$title.'"><span>'.$title.'</span></a></li>';
    else
        $strReturn .= '<li class="breadcrumbs__item"><span class="breadcrumbs__current">'.$title.'</span></li>';

    $strJson .= '{ "@type": "ListItem", "position": "'.$i.'", "name": "'.$title.'", "item": "'.url().$arResult[$index]["LINK"].'" }';
    if($index != $itemSize-1){
        $strJson .= ',';
    }
    $i++;
}

$strJson .= '
]
}
</script>';
$strReturn .= '</ul>';
$strReturn .= $strJson;

return $strReturn;
?>


