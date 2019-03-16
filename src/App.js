import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { IncomeTax } from "./IncomeTax";

let Tax = new IncomeTax();

export default class App extends React.Component {
  state = {
    TaxableIncome: "",
    DeductedTax: "0",
    OntarioTax: "",
    FederalTax: "",
    TotalTax: "",
    TotalOwing: ""
  };

  CalculateTax = amount => {
    this.setState(
      {
        OntarioTax: Tax.ontarioTax(amount),
        FederalTax: Tax.federalTax(amount)
      },
      () => {
        this.setState(
          {
            TotalTax: Number(
              parseFloat(this.state.OntarioTax) +
                parseFloat(this.state.FederalTax)
            ).toFixed(2)
          },
          () => {
            this.setState({
              TotalOwing: Number(
                parseFloat(this.state.TotalTax) -
                  parseFloat(this.state.DeductedTax)
              ).toFixed(2)
            });
          }
        );
      }
    );
  };

  render() {
    return (
      <View style={{ backgroundColor: "#eceff1" }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Personal Tax Calculator</Text>
          </View>

          <Text style={{ margin: 10 }}>Total Taxable Income($) :</Text>
          <TextInput
            ref="TotalTaxableIncome"
            style={styles.textInput}
            placeholder="Enter Total Taxable Income"
            value={this.state.todo}
            onChangeText={text => this.setState({ TaxableIncome: text })}
            onSubmitEditing={() => this.taxdeducted.focus()}
            autoFocus={true}
            blurOnSubmit={false}
          />

          <Text style={{ margin: 10 }}>Tax Deducted($) :</Text>
          <TextInput
            ref={input => {
              this.taxdeducted = input;
            }}
            style={styles.textInput}
            placeholder="Enter Tax Deducted By Employer"
            value={this.state.date}
            onChangeText={text => this.setState({ DeductedTax: text })}
            onSubmitEditing={() => this.calculate.click()}
            autoFocus={true}
            blurOnSubmit={false}
          />

          <Text style={{ margin: 10 }}>Ontario Tax($) :</Text>
          <Text
            style={{
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              margin: 10,
              padding: 10,
              backgroundColor: "white"
            }}
          >
            {this.state.OntarioTax}
          </Text>

          <Text style={{ margin: 10 }}>Federal Tax($) :</Text>
          <Text
            style={{
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              margin: 10,
              padding: 10,
              backgroundColor: "white"
            }}
          >
            {this.state.FederalTax}
          </Text>

          <Text style={{ margin: 10 }}>Total Tax($) :</Text>
          <Text
            style={{
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              margin: 10,
              padding: 10,
              backgroundColor: "white"
            }}
          >
            {this.state.TotalTax}
          </Text>

          <Text style={{ margin: 10 }}>Tax Owing/ Tax Refund($) :</Text>
          <Text
            style={{
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              margin: 10,
              padding: 10,
              backgroundColor: "white"
            }}
          >
            {this.state.TotalOwing}
          </Text>

          <View
            style={{
              margin: 10,
              height: 50,
              alignItems: "center"
            }}
          >
            <button
              ref={input => {
                this.calculate = input;
              }}
              style={{ height: 50, background: "#546e7a", width: 200 }}
              onClick={() => this.CalculateTax(this.state.TaxableIncome)}
            >
              <Text style={{ color: "white" }}>Calculate</Text>
            </button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    width: "50%",
    margin: "auto",
    justifyContent: "flex-start"
  },
  titleContainer: {
    padding: 10,
    height: 100,
    backgroundColor: "#546e7a",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  textInput: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "white"
  }
});
