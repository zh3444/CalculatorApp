import { Text, View } from 'react-native';
import React, { useState } from 'react';
import Buttons from './Buttons';
import { Styles } from './Styles';


function Calculator() {
    const [firstNum, setFirstNum] = useState("");
    const [operator, setOperator] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [result, setResult] = useState(null);


    const handleNumber = (value) => {
        setFirstNum(firstNum + value);
    };


    const handleOperator = (opValue) => {
        setOperator(opValue);
        setSecondNum(firstNum);
        setFirstNum("");
    };


    const handleClear = () => {
        setFirstNum("");
        setSecondNum("");
        setOperator("");
        setResult(null);
    };

    const numberDisplay = () => {
        if (result != null) {
            return (
                <Text style={Styles.number}> {result} </Text>
            );
        }
        if (firstNum === "") {
            return (
                <Text style={Styles.number}> {"0"} </Text>
            )
        }
        return (
            <Text style={Styles.number}> {firstNum} </Text>
        )
    }

    const getResult = () => {
        switch (operator) {
            case "+":
                handleClear();
                setResult(parseFloat(secondNum) + parseFloat(firstNum));
                break;
            case "-":
                handleClear();
                setResult(parseFloat(secondNum) - parseFloat(firstNum));
                break;
            case "*":
                handleClear();
                setResult(parseFloat(secondNum) * parseFloat(firstNum));
                break;
            case "/":
                handleClear();
                setResult((parseFloat(secondNum) / parseFloat(firstNum)).toFixed(5));
                break;
            case "+/-":
                handleClear();
                setResult(parseFloat(secondNum) * -1);
                break;
            case "%":
                handleClear();
                setResult(parseFloat(secondNum) * 0.01);
                break;
            default:
                handleClear();
                setResult(0);
                break;
        };
    }

    return (
        <View style={Styles.viewBottom}>
            <View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center", }}>
                <Text style={Styles.number}>
                    {secondNum}
                    <Text style={{ fontSize: 50, fontWeight: '500' }}> {operator} </Text>
                </Text>
                {numberDisplay()}
            </View>


            <View style={Styles.row}>
                <Buttons title="AC" onPress={handleClear} />
                <Buttons title="+/-" onPress={() => handleOperator("+/-")} />
                <Buttons title="%" onPress={() => handleOperator("%")} />
                <Buttons title="÷" onPress={() => handleOperator("/")} />
            </View>


            <View style={Styles.row}>
                <Buttons title="7" onPress={() => handleNumber("7")} />
                <Buttons title="8" onPress={() => handleNumber("8")} />
                <Buttons title="9" onPress={() => handleNumber("9")} />
                <Buttons title="X" onPress={() => handleOperator("*")} />
            </View>


            <View style={Styles.row}>
                <Buttons title="4" onPress={() => handleNumber("4")} />
                <Buttons title="5" onPress={() => handleNumber("5")} />
                <Buttons title="6" onPress={() => handleNumber("6")} />
                <Buttons title="-" onPress={() => handleOperator("-")} />
            </View>


            <View style={Styles.row}>
                <Buttons title="1" onPress={() => handleNumber("1")} />
                <Buttons title="2" onPress={() => handleNumber("2")} />
                <Buttons title="3" onPress={() => handleNumber("3")} />
                <Buttons title="+" onPress={() => handleOperator("+")} />
            </View>


            <View style={Styles.row}>
                <Buttons title="0" onPress={() => handleNumber("0")} />
                <Buttons title="." onPress={() => handleNumber(".")} />
                <Buttons title="=" onPress={() => getResult()} />
            </View>
        </View>
    );
}

export default Calculator;