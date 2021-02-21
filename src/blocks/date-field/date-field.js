import * as $ from "jquery";
import inputmaskjquery from "inputmask/dist/jquery.inputmask";

$(".date-field__item").inputmask({
  alias: "datetime",
  inputFormat: "dd.mm.yyyy",
  placeholder: "ДД.ММ.ГГГГ",
  clearMaskOnLostFocus: true,
});
