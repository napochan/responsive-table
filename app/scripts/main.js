(function () {
  var xmlhttp = new XMLHttpRequest();

  //Retrive Json data
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var i,
      myObj = JSON.parse(this.responseText),
      itemLength = myObj.length,
      htmlBuild = '<table cellspacing="0" cellpadding="0" border="0" class="mortgage-table"><thead><tr><th>Mortgage</th><th>Monthly Repayments</th><th>MaxLTV</th><th>Interest Rates</th><th>Overall cost</th><th>Product fee</th></tr></thead><tbody>';

      
      for (i = 0; i < itemLength; i++) {
        htmlBuild += '<tr><td class="product-name">' + myObj[i].name + '</td>';
        htmlBuild += '<td class="repayments">' + myObj[i].monthlyRepayments + '</td>';
        htmlBuild += '<td class="max-ltv">' + myObj[i].maxLtv + '</td>';
        htmlBuild += '<td class="rates">' + myObj[i].interestRate + '</td>';
        htmlBuild += '<td class="cost">' + myObj[i].overallCost + '</td>';
        htmlBuild += '<td class="product-fee">' + myObj[i].productFee + '</td></tr>';
      }

      htmlBuild += '</tbody></table>';

      document.getElementById('mortgage-table-wrapper').innerHTML = htmlBuild;
    }
  };

  xmlhttp.open('GET', 'table.json', true);
  xmlhttp.send();

})();
