<?

ini_set("display_errors", "On");

CModule::IncludeModule("iblock");

// Подключаем константы

require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/mobiledetect/mobiledetectlib/Mobile_Detect.php");
// Подключаем агента генерации xml подбора квартир


/**
 * Агент. Обновление Жилой
 */
function updateLive($exportUrl)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $exportUrl);
    curl_setopt($ch, CURLOPT_FAILONERROR, 1);
    curl_setopt($ch, CURLOPT_USERAGENT,
        'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 360);
    $val = curl_exec($ch);
    curl_close($ch);

    return "updateLive('".$exportUrl."');";
}
/**
 * Агент. Обновление коммерции
 */
function updateCommercial($exportUrl)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $exportUrl);
    curl_setopt($ch, CURLOPT_FAILONERROR, 1);
    curl_setopt($ch, CURLOPT_USERAGENT,
        'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);
    $val = curl_exec($ch);
    curl_close($ch);

    return "updateCommercial('".$exportUrl."');";
}


function url(){
    if(isset($_SERVER['HTTPS'])){
        $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    }
    else{
        $protocol = 'http';
    }
    return $protocol . "://" . $_SERVER['SERVER_NAME'];
}

/**
 * Подключаем необходимые бибилиотеки
 */




function bytesToSize($bytes, $precision = 2) {
    $kilobyte = 1024;
    $megabyte = $kilobyte * 1024;
    $gigabyte = $megabyte * 1024;
    $terabyte = $gigabyte * 1024;

    if (($bytes >= 0) && ($bytes < $kilobyte)) {
        return $bytes . 'Б';
    } elseif (($bytes >= $kilobyte) && ($bytes < $megabyte)) {
        return round($bytes / $kilobyte, $precision) . 'Кб';

    } elseif (($bytes >= $megabyte) && ($bytes < $gigabyte)) {
        return round($bytes / $megabyte, $precision) . 'Мб';
    } elseif (($bytes >= $gigabyte) && ($bytes < $terabyte)) {
        return round($bytes / $gigabyte, $precision) . 'Гб';
    } elseif ($bytes >= $terabyte) {
        return round($bytes / $terabyte, $precision) . 'Тб';
    } else {
        return $bytes . 'Б';
    }
}

/*Проверка If-Modified-Since и вывод 304 Not Modified */
/*AddEventHandler('main', 'OnEpilog', array('CBDPEpilogHooks', 'CheckIfModifiedSince'));
class CBDPEpilogHooks
{
    function CheckIfModifiedSince()
    {
        GLOBAL $LastModified;
        
        if ($LastModified)
        {
            header("Cache-Control: public");
            header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $LastModified) . ' GMT');
            if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $LastModified) {
                $GLOBALS['APPLICATION']->RestartBuffer();CHTTP::SetStatus('304 Not Modified');
                exit();
                /*header('HTTP/1.1 304 Not Modified');
				exit;*/
		/*}
        }
    }
}*/
AddEventHandler("main", "OnEndBufferContent", "OnEndBufferContentHandler");
//Уникализация исходного кода - замена данных выделение Н1 для og:title
function OnEndBufferContentHandler(&$content)
{
    Global $APPLICATION;
    preg_match_all('/<h1.*?>(.*)<\/h1>/msi', $content, $h1);
    $h1[1][0] = str_replace('"', "&quot;", $h1[1][0]);
    if (!empty($h1[1][0])) {
        $content = str_replace('<meta property="og:title" content="','<meta property="og:title" content="'.$h1[1][0], $content);
    } else if(!empty($APPLICATION->GetPageProperty("title"))) {
        $content = str_replace('<meta property="og:title" content="','<meta property="og:title" content="'.$APPLICATION->GetPageProperty("title"), $content);
    } else {
        $content = str_replace('<meta property="og:title" content="','<meta property="og:title" content="'."ЖК Зелёные Аллеи", $content);

    }
}

//Склонение окончаний слова
//declension_word($flat_timer , array('квартира', 'квартиры', 'квартир'));
function declension_word($number, $word) {
    $ar= array (2, 0, 1, 1, 1, 2);
    return $word[ ($number%100 > 4 && $number%100 < 20) ? 2 : $ar[min($number%10, 5)] ];
}

//Расчет платежа ипотеки
//    ПВ 0% ставка 14,2%
//
//    ПВ от 15% ставка 10,5%
//
//    ПВ от 10% ставка 10,35%
//
//    ПВ от 20% ставка 9,75%
/*
t— количество периодов оплаты;
Кр — сумма кредита;
k — процентная ставка, начисляемая на задолженность за период;
BK — размер платежа за i — й период (i принимает значения от 1 до t);
BK=Кр * k * (1+k)^t / ((1+k)^t — 1)
 */
// hypotec_calc (цена квартиры, % Первоначального взноса от стоимсоти квартиры)
function hypotec_calc($calc_flat_price, $calcPercent, $calc_period_year_value) {
    $CALC['calc_flat_price'] = (int)preg_replace('/\s+/', '',$calc_flat_price); //Общая цена квартиры
    $CALC['calcPercent'] = (int)$calcPercent; //% Первоначального взноса от стоимсоти квартиры
    $CALC['calc_period_value'] = (int)$calc_period_year_value; //Срок кредита в Годах
    $CALC['calc_hypotec_flat_price'] = $CALC['calc_flat_price'] - ($CALC['calc_flat_price']*($CALC['calcPercent']/100));
    switch ($CALC['calcPercent']) {
        case $CALC['calcPercent'] == 0:
            $CALC['percent_PV'] = 14.2;
            break;
        case $CALC['calcPercent'] >= -1 && $CALC['calcPercent'] <= 9:
            $CALC['percent_PV'] = 14.2;
            break;
        case $CALC['calcPercent'] >= 10 && $CALC['calcPercent'] <= 14:
            $CALC['percent_PV'] = 10.5;
            break;
        case $CALC['calcPercent'] >= 15 && $CALC['calcPercent'] <= 19:
            $CALC['percent_PV'] = 10.35;
            break;
        case $CALC['calcPercent'] >= 20 && $CALC['calcPercent'] <= 90:
            $CALC['percent_PV'] = 9.8;
            break;
        default:
            $CALC['percent_PV'] = 14.2; //по-умолчанию
    }
    if ($CALC['calc_invoice_price'] == 0) {
        $CALC['percent_PV'] = 14.2;
    }

    // ставка в месяц
    $i = ($CALC['percent_PV'] / 12) / 100;

    // коэффициент аннуитета
    $koef = ($i * (pow(1 + $i,  $CALC['calc_period_value']  * 12))) / (pow(1 + $i,  $CALC['calc_period_value']  * 12) - 1);

    // итоговый платеж
    $CALC['payment'] = round($CALC['calc_hypotec_flat_price'] * $koef);

    //Сколько всего платить
    $CALC['payment_all'] = $CALC['payment']*12*$CALC['calc_period_value'];

    return $CALC;
}

function isMobileDetect() {

    $useragent = $_SERVER['HTTP_USER_AGENT'];

    $result = preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|
    hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/
    |plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',
            $useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|
            ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|
            bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|
            da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|
            os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|
            hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|
            idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|
            kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|
            mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|
            mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|
            nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|
            po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|
            ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|
            sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|
            sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|
            tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|
            81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',
            substr($useragent,0,4));

    return $result;
}

function isMobileTabletDetect() {

    $detect = new Mobile_Detect;
    $result = 'desktop';
    // Any mobile device (phones or tablets).
    if ( $detect->isMobile() ) {
        $result = 'mobile';
    }

    // Any tablet device.
    if( $detect->isTablet() ){
        $result = 'tablet';
    }

    return $result;
}

?>