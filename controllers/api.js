exports.getTimestamp = (req, res, next) => {
  const dateString = req.params.date_string;
  const date = new Date(dateString);
  const isContainsLetters = /[a-z]/i.test(dateString);
  let utcString;
  let unix;
  if(date.toString() === 'Invalid Date') {
    if(isContainsLetters) {
      return res.json({"error": "Invalid Date"})
    }
    const parseUnix = parseInt(dateString);
    const newDate = new Date(parseUnix);
    utcString = newDate.toUTCString();
    unix = dateString;
    return res.json({"unix": unix, "utc": utcString})
  }
  utcString = date.toUTCString();
  unix = date.getTime()
  return res.json({"unix": unix, "utc": utcString})
}