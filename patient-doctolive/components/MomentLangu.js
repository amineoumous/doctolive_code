let MomentLangue ={
    fr: {
    invalidDate : "Date non précisée",
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
       LT : 'HH:mm',
       LTS : 'HH:mm:ss',
       L : 'DD/MM/YYYY',
       LL : 'D MMMM YYYY',
       LLL : 'D MMMM YYYY à HH:mm',
       LLLL : 'dddd D MMMM YYYY HH:mm'
   },
   calendar : {
       sameDay : '[Aujourd’hui à] LT',
       nextDay : '[Demain à] LT',
       nextWeek : 'dddd [à] LT',
       lastDay : '[Hier à] LT',
       lastWeek : 'dddd [dernier à] LT',
       sameElse : 'LLL'
   },
   relativeTime : {
       future : 'dans %s',
       past : 'il y a %s',
       s : 'quelques secondes',
       m : 'une minute',
       mm : '%d minutes',
       h : 'une heure',
       hh : '%d heures',
       d : 'un jour',
       dd : '%d jours',
       M : 'un mois',
       MM : '%d mois',
       y : 'un an',
       yy : '%d ans'
   },
   dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
   ordinal : function (number) {
       return number + (number === 1 ? 'er' : 'e');
   },
   meridiemParse : /PD|MD/,
   isPM : function (input) {
       return input.charAt(0) === 'M';
   },
   // In case the meridiem units are not separated around 12, then implement
   // this function (look at locale/id.js for an example).
   // meridiemHour : function (hour, meridiem) {
   //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
   // },
   meridiem : function (hours, minutes, isLower) {
       return hours < 12 ? 'PD' : 'MD';
   },
   week : {
       dow : 1, // Monday is the first day of the week.
       doy : 4  // Used to determine first week of the year.
   }
},
ma:  {
   invalidDate : "تاريخ غير محدد",
   months : ["يناير" ,"فبراير" ,"مارس" ,"ابريل" ,"مايو", "يونيو" ,"يوليو", "أغسطس" ,"سبتمبر", "أكتوبر", "نوفمبر","ديسمبر"],
   monthsShort : ["يناير" ,"فبراير" ,"مارس" ,"ابريل" ,"مايو", "يونيو" ,"يوليو", "أغسطس" ,"سبتمبر", "أكتوبر", "نوفمبر","ديسمبر"],
   monthsParseExact : true,
   weekdays :  ["َالأَحَدِ","الاثْنَيْنِ","الثُّلاَثَاءِ","الأَرْبِعَاءِ" ,"الْخَمِيسِ","الْجُمُعَةِ", "السَّبْتِ"],
   weekdaysShort : ["َالأَحَدِ","الاثْنَيْنِ","الثُّلاَثَاءِ","الأَرْبِعَاءِ" ,"الْخَمِيسِ","الْجُمُعَةِ", "السَّبْتِ"],
   weekdaysMin : ["َالأَحَدِ","الاثْنَيْنِ","الثُّلاَثَاءِ","الأَرْبِعَاءِ" ,"الْخَمِيسِ","الْجُمُعَةِ", "السَّبْتِ"],
   weekdaysParseExact : true,
   longDateFormat : {
       LT : 'HH:mm',
       LTS : 'HH:mm:ss',
       L : 'DD/MM/YYYY',
       LL : 'D MMMM YYYY',
       LLL : 'dddd D MMMM YYYY على الساعة HH:mm',
       LLLL : 'dddd D MMMM YYYY HH:mm'
   },
   calendar : {
       sameDay : '[اليوم على الساعة] LT',
       nextDay : '[غدا على الساعة] LT',
       nextWeek : 'dddd [على الساعة] LT',
       lastDay : '[الامس على الساعة] LT',
       lastWeek : 'dddd [الماضي على الساعة] LT',
       sameElse : 'LLL'
   },
   relativeTime : {
       future : 'خلال %s',
       past : 'قبل %s',
       s : 'غضون ثواني',
       m : 'دقيقة',
       mm : '%d دقائق',
       h : 'ساعة',
       hh : '%d ساعات',
       d : 'يوم',
       dd : '%d أَيَّام',
       M : 'أَيَّام',
       MM : '%d شهور',
       y : 'سنة',
       yy : '%d سنوات'
   },
   dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
   ordinal : function (number) {
       return number + (number === 1 ? 'er' : 'e');
   },
   meridiemParse : /PD|MD/,
   isPM : function (input) {
       return input.charAt(0) === 'M';
   },
   // In case the meridiem units are not separated around 12, then implement
   // this function (look at locale/id.js for an example).
   // meridiemHour : function (hour, meridiem) {
   //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
   // },
   meridiem : function (hours, minutes, isLower) {
       return hours < 12 ? 'PD' : 'MD';
   },
   week : {
       dow : 1, // Monday is the first day of the week.
       doy : 4  // Used to determine first week of the year.
   }
},
en:{
    invalidDate : "Invalide date",
    
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    

}
}
export default MomentLangue