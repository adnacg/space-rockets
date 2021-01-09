import moment from 'moment';

moment.locale('en');

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp, preserveTimezone = false) {
  return preserveTimezone ?
    moment(timestamp).parseZone().format("MMMM D, YYYY, h:mm:ss A Z") :
    moment(timestamp).format("MMMM D, YYYY, h:mm:ss A Z")
}