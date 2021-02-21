import air from "air-datepicker";
import inputmaskjquery from "inputmask/dist/jquery.inputmask";

$(".date-dropdown__item").inputmask({
  alias: "datetime",
  inputFormat: "dd.mm.yyyy",
  placeholder: "ДД.ММ.ГГГГ",
  clearMaskOnLostFocus: true,
});

$(".date-dropdown__datepicker").datepicker({
  multipleDates: 3,
  range: true,
  toggleSelected: false,
  onSelect: function (formattedDate, date, inst) {
    let d = new Date(date[0]);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    $(".date-dropdown__arrival").val(`${da}.${mo}.${ye}`);
    if (date[1]) {
        let d_next = new Date(date[1]);
        const ye_n = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d_next);
        const mo_n = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d_next);
        const da_n = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d_next);
        $(".date-dropdown__departure").val(`${da_n}.${mo_n}.${ye_n}`);
    }
  }
});




