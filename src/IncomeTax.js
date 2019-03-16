let efederalTaxBracket = {
  FIRST: 45282,
  SECOND: 90563,
  THIRD: 140388,
  FORTH: 200000
};

let eOntarioTaxBracket = {
  FIRST: 40922,
  SECOND: 81847,
  THIRD: 150000,
  FORTH: 220000
};

export class IncomeTax {
  ontarioTax(nTaxableIncome) {
    let nontarioTax = 0;
    switch (true) {
      case nTaxableIncome <= eOntarioTaxBracket.FIRST:
        nontarioTax = 0.0505 * nTaxableIncome;
        break;
      case nTaxableIncome > eOntarioTaxBracket.FIRST &&
        nTaxableIncome <= eOntarioTaxBracket.SECOND:
        nontarioTax =
          0.0915 * (nTaxableIncome - eOntarioTaxBracket.FIRST) + 2067;
        break;
      case nTaxableIncome > eOntarioTaxBracket.SECOND &&
        nTaxableIncome <= eOntarioTaxBracket.THIRD:
        nontarioTax =
          0.1116 * (nTaxableIncome - eOntarioTaxBracket.SECOND) + 5811;
        break;
      case nTaxableIncome > eOntarioTaxBracket.THIRD &&
        nTaxableIncome <= eOntarioTaxBracket.FORTH:
        nontarioTax =
          0.1216 * (nTaxableIncome - eOntarioTaxBracket.THIRD) + 13417;
        break;
      case nTaxableIncome > eOntarioTaxBracket.FORTH:
        nontarioTax =
          0.1316 * (nTaxableIncome - eOntarioTaxBracket.FORTH) + 21929;
        break;
    }
    return Number(nontarioTax.toFixed(2));
  }

  federalTax(nTaxableIncome) {
    let nFederalTax = 0;
    switch (true) {
      case nTaxableIncome <= efederalTaxBracket.FIRST:
        nFederalTax = 0.15 * nTaxableIncome;
        break;
      case nTaxableIncome > efederalTaxBracket.FIRST &&
        nTaxableIncome <= efederalTaxBracket.SECOND:
        nFederalTax =
          0.205 * (nTaxableIncome - efederalTaxBracket.FIRST) + 6792;
        break;
      case nTaxableIncome > efederalTaxBracket.SECOND &&
        nTaxableIncome <= efederalTaxBracket.THIRD:
        nFederalTax =
          0.26 * (nTaxableIncome - efederalTaxBracket.SECOND) + 16075;
        break;
      case nTaxableIncome > efederalTaxBracket.THIRD &&
        nTaxableIncome <= efederalTaxBracket.FORTH:
        nFederalTax =
          0.29 * (nTaxableIncome - efederalTaxBracket.THIRD) + 29029;
        break;
      case nTaxableIncome > efederalTaxBracket.FORTH:
        nFederalTax =
          0.33 * (nTaxableIncome - efederalTaxBracket.FORTH) + 46317;
        break;
    }
    return Number(nFederalTax.toFixed(2));
  }
}
