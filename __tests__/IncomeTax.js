import { IncomeTax } from "../src/IncomeTax.js";

let oIncomeTax = new IncomeTax();

// Tests for Ontario Tax Calculations
it("checks for Ontario Tax Bracket 1 with value $40000", () => {
  expect(oIncomeTax.ontarioTax(40000)).toBe(2020);
});

it("checks for Ontario Tax Bracket 2 with value $70000", () => {
  expect(oIncomeTax.ontarioTax(70000)).toBe(4727.64);
});

it("checks for Ontario Tax Bracket 3 with value $100000", () => {
  expect(oIncomeTax.ontarioTax(100000)).toBe(7836.87);
});

it("checks for Ontario Tax Bracket 4 with value $210000", () => {
  expect(oIncomeTax.ontarioTax(210000)).toBe(20713);
});

it("checks for Ontario Tax Bracket 5 with value $300000", () => {
  expect(oIncomeTax.ontarioTax(300000)).toBe(32457);
});

//Tests for Federal Tax Calculations

it("checks for Federal Tax Bracket 1 with value $42000", () => {
  expect(oIncomeTax.federalTax(42000)).toBe(6300);
});

it("checks for Federal Tax Bracket 2 with value $80000", () => {
  expect(oIncomeTax.federalTax(80000)).toBe(13909.19);
});

it("checks for Federal Tax Bracket 3 with value $110000", () => {
  expect(oIncomeTax.federalTax(110000)).toBe(21128.62);
});

it("checks for Federal Tax Bracket 4 with value $160000", () => {
  expect(oIncomeTax.federalTax(160000)).toBe(34716.48);
});

it("checks for Federal Tax Bracket 5 with value $210000", () => {
  expect(oIncomeTax.federalTax(210000)).toBe(49617);
});
