import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <View>
            <Text>Hello from countries</Text>
            <Text>Countries length: {countries.length} </Text>
        </View>
    )
}