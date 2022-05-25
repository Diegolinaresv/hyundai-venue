simplyCountdown('#cuenta-global', {
  year: 2022, // required
  month: 6, // required
  day: 10, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 1, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('novena').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s1', {
  year: 2022, // required
  month: 6, // required
  day: 2, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('primera').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s2', {
  year: 2022, // required
  month: 6, // required
  day: 3, // required
  hours:0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('segunda').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s3', {
  year: 2022, // required
  month: 6, // required
  day: 4, // required
  hours:0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('tercera').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s4', {
  year: 2022, // required
  month: 6, // required
  day: 5, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('cuarta').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s5', {
  year: 2022, // required
  month: 6, // required
  day: 6, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('quinta').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s6', {
  year: 2022, // required
  month: 6, // required
  day: 7, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('sexta').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s7', {
  year: 2022, // required
  month: 6, // required
  day: 8, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('septima').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s8', {
  year: 2022, // required
  month: 6, // required
  day: 9, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('octava').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('#s9', {
  year: 2022, // required
  month: 6, // required
  day: 10, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes:0, // Default is 0 [0-59] integer
  seconds: 1, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'día', plural: 'Días' },
      hours: { singular: 'Hora', plural: 'Horas' },
      minutes: { singular: 'Minuto', plural: 'Minutos' },
      seconds: { singular: 'Segundo', plural: 'Segundos' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { document.getElementById('novena').classList.add('oculta'); return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});