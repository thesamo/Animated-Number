const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let startValue = 0;
  const endValue = counter.getAttribute("data-target");
  const increment = endValue / 100;

  const incrementCounter = () => {
    startValue += increment;
    counter.innerText = startValue;

    if (startValue < endValue) {
      setTimeout(incrementCounter, 7);
    }
  };
  incrementCounter();
});
