export const sendEvent = (eventName, eventProps = {}) => {
  if (!window.plausible || process.env.NODE_ENV === "development") {
    return console.log({
      event_name: eventName,
      event_data: eventProps,
    });
  }

  plausible(eventName, {
    props: eventProps,
  });
}
