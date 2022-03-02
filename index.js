function hexToRGB(hex) {
  var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!validHEXInput) {
    return false;
  }
  var output = [
    {
      red: parseInt(validHEXInput[1], 16),
      green: parseInt(validHEXInput[2], 16),
      blue: parseInt(validHEXInput[3], 16),
    },
  ];
  return output;
}

module.exports = hexToRGB;
