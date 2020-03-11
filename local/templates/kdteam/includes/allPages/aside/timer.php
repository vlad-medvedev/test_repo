<?php //NOVOGRADP-483-start
$curdate = date('Y-m-d');
$curtime = date('H:i:s');
$date0 = new DateTime('2019-03-01T09:00:00');
$date1 = new DateTime($curdate.'T'.$curtime);
$date2 = new DateTime($curdate.'T21:00:00');
$curdiff = $date2->diff($date0);
$flat_timer = 179 - (12*$curdiff->days); //уменьшамем счетчик на 12 часов от даты
$diff = $date2->diff($date1);
$hours = 12 - $diff->h;
if (($hours >= 0) and ($hours < 13)) {
    $flat_timer = $flat_timer - $hours;
}
if ($flat_timer <= 0) {
    $ctimer_hours_style = 'display: none';
} else {
    $ctimer_hours_style = '';
}
//KLENALLEY-261
//$flat_timer = 59;
//$hours = $hours + ($diff->days*24);
//echo $curdate.'T'.$curtime;
/*
?>
<div class="cf-timer" style="<?=$ctimer_hours_style;?>"> <?php //style="display: none;"?>
    <div class="title">
        <div class="title_1">Ограниченный объём квартир</div>
        <div class="title_2">по специальной скидке!</div>
        <div class="title_3">Осталось
            <span id="flats-timer" data-hours="<?=$hours;?>"><?=$flat_timer;?></span>
            <?=declension_word($flat_timer ,
                array('квартира', 'квартиры', 'квартир'));?>
        </div>
    </div>
</div>
<?php */
//NOVOGRADP-483-end?>
<?php //NOVOGRADP-262
$ctimer_style = 'display: none;';
$ctimer_date = '';
$ctimer_timer = '1559865600000';
$ctimer_dates = array(['DATA'=>' 07.06.2019','TIMER'=>'1559865600000'],
);
$today = date("d.m.Y");
foreach ($ctimer_dates as $cdate){
    if (strtotime($today)< strtotime($cdate['DATA'])) {
        //echo $cdate['DATA'].' - '.$cdate['TIMER'];
        $ctimer_style = '';
        $ctimer_date = $cdate['DATA'];
        $ctimer_timer = $cdate['TIMER'];
        break;
    }
}
?>
<div class="cf-timer" style="<?=$ctimer_style;?>"> <?php //style="display: none;"?>
    <span class="title">с <?php echo $ctimer_date;?><br>Сезонное повышение цен!</span>
    <div id="timer">
        <script type="text/javascript">
          $(document).ready(function(){
          ( function () {
            var _id = "760aea2cc65145f3c2395e58a64c5550";
            while (document.getElementById("timer" + _id))_id = _id + "0";
            document.getElementById('timer').innerHTML = '<div id="timer' + _id + '"></div>';
            //document.write("<div id='timer" + _id + "' style='min-width:273px;height:50px;'></div>");
            var _t = document.createElement("script");
            _t.src = "/local/templates/kdteam/js/timer.min.js";
            var _f = function (_k) {
              var l = new MegaTimer(_id, {
                "view": [1, 1, 1, 1],
                "type": {
                  "currentType": "1",
                  "params": {"usertime": true, "tz": "3", "utc": <?=$ctimer_timer;?>}
                },
                "design": {
                  "type": "plate",
                  "params": {
                    "round": "6",
                    "background": "solid",
                    "background-color": "#f2f2f2",
                    "effect": "slide",
                    "space": "1",
                    "separator-margin": "2",
                    "number-font-size": "14",
                    "number-font-color": "#000",
                    "padding": "5",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,

                    "text-font-size": "12",
                    "text-font-color": "#000"
                  }
                },
                "designId": 2,
                "theme": "white",
                "width": 273,
                "height": 50
              });
              if (_k != null) l.run();
            };
            _t.onload = _f;
            _t.onreadystatechange = function () {
              if (_t.readyState == "loaded") _f(1);
            };
            var _h = document.head || document.getElementsByTagName("head")[0];
            _h.appendChild(_t);
          }).call(this);
          });
        </script>
    </div>
</div>