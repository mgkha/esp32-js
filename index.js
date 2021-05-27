var status = false;

setInterval(() => {
  status = !status;
  D2.write(status);
}, 1000);
