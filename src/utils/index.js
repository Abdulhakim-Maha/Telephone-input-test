const phoneNumberAutoFormat = (phoneNumber) => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, "");

  if (number.length > 0 && number[0] !== "0") {
    if (number.length < 3) return number;
    if (number.length < 6) return number.replace(/(\d{2})(\d{1})/, "$1-$2");
    if (number.length < 10)
      return number.replace(/(\d{2})(\d{3})(\d{1})/, "$1-$2-$3");
  } else {
    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  }
  return number;
};

export default phoneNumberAutoFormat;
