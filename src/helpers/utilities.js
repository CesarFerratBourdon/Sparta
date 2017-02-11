var data = require('../../data.json');

export const parseInput = (input) => {
  var result = input.split(":");
  return [result[1], result[2], result[3]];
}

export const calculateDividends = (podium, commissionRates) => {
  var winTotal, placeTotal, exactTotal, quintellaTotal; winTotal = placeTotal = exactTotal = quintellaTotal = 0;
  var win, place1, place2, place3, exact, quintella; win = place1 = place2 = place3 = exact = quintella  = 0;
  var first = podium[0];
  var second = podium[1];
  var third = podium[2];

  for(let i = 0; i < data.length; i++) {
    var obj = data[i];
    var bet = (obj.bet).split(":");
      if (bet[0] === "W") {
        winTotal += parseInt(bet[2], 10);
          if (bet[1] === first) {
            win += parseInt(bet[2], 10);
          }
      } else if (bet[0] === "P") {
        placeTotal += parseInt(bet[2], 10);
          if (bet[1] === first) {
            place1 += parseInt(bet[2], 10);
          }
          if (bet[1] === second) {
            place2 += parseInt(bet[2], 10);
          }
          if (bet[1] === third) {
            place3 += parseInt(bet[2], 10);
          }
      } else if (bet[0] === "E") {
        exactTotal += parseInt(bet[2], 10);
        var winners = bet[1].split(",")
          if (winners[0] === first && winners[1] === second) {
            exact += parseInt(bet[2], 10);
          }
      }else {
        quintellaTotal += parseInt(bet[2], 10);
        var topPodium = bet[1].split(",")
          if ((topPodium[0] === first && topPodium[1] === second) || (topPodium[0] === second && topPodium[1] === first)) {
            quintella += parseInt(bet[2], 10);
          }
      }
  }
  var winningBetWin = +(((winTotal - (winTotal * commissionRates[0] / 100)) / win).toFixed(2));
  var winningBetPlace1 = +((((placeTotal - (placeTotal * commissionRates[1] / 100)) / 3) / place1).toFixed(2));
  var winningBetPlace2 = +((((placeTotal - (placeTotal * commissionRates[1] / 100)) / 3) / place2).toFixed(2));
  var winningBetPlace3 = +((((placeTotal - (placeTotal * commissionRates[1] / 100)) / 3) / place3).toFixed(2));
  var winningBetExact = +(((exactTotal - (exactTotal * commissionRates[2] / 100)) / exact).toFixed(2));
  var winningBetQuintella = +(((quintellaTotal - (quintellaTotal * commissionRates[3] / 100)) / quintella).toFixed(2));

return [[winningBetWin, winningBetPlace1, winningBetPlace2, winningBetPlace3, winningBetExact, winningBetQuintella],
        [winTotal, placeTotal, exactTotal, quintellaTotal]]
}
