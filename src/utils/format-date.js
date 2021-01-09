import moment from "moment";

moment.locale("en");

export function formatDate(timestamp) {
  return moment(timestamp).format("dddd, MMMM D, YYYY");
}

export function formatDateTime(timestamp, preserveTimezone = false) {
  return preserveTimezone
    ? moment(timestamp).parseZone().format("MMMM D, YYYY, h:mm:ss A Z")
    : moment(timestamp).format("MMMM D, YYYY, h:mm:ss A Z");
}
