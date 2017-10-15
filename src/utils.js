const utils = {
  // Receives one- or two-digit number and returns a two-character string,
  // padded with '0'.
  padNumber: value => value.toString().padStart(2, '0'),

  // Recieves Date object and returns formatted string ('YYYY-MM-DD_hh-mm-ss').
  formatDate: (date) => {
    const year = date.getFullYear();
    const month = utils.padNumber(date.getMonth() + 1);
    const day = utils.padNumber(date.getDate());

    const hours = utils.padNumber(date.getHours());
    const minutes = utils.padNumber(date.getMinutes());
    const seconds = utils.padNumber(date.getSeconds());

    const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

    return formattedDate;
  },
};

module.exports = utils;
