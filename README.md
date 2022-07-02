# Getting Started with React-Select-Hybrid

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
React Select Hybrid is a react component build for accessibility based on this [article](https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/)

## Installation and usage

you can install it from npm
`npm i react-select-hybrid`

then use it in your app : 
```
import React from 'react';
import { HybridSelect } from 'react-select-hybrid';

function Select() {
    const options = [
    { value: 'banana', label: 'banana' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'apple', label: 'apple' },
    ];

    return (
        <HybridSelect title="choose your fruit" options={options} />
    );
}
```

### Props

the select component accepts two props : 
options - specify the options the user can select from 
an array of objects with two properties : value(string) and label(string)

title - specify the title of the select
a string