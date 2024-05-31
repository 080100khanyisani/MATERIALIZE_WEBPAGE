import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

// const basicContext = {
//     name : "Khanyisani",
//     age : 0,
//     week_day : "Wednesday",
//     show: false,
//     fruits: [
//         "apples",
//         "oranges",
//         "bananas"
//     ],
//     isClient: true,
//     fruitSales: [
//         { day: "Monday", apples: 13, oranges: 34 },
//         { day: "Tuesday", apples: 17, oranges: 28 },
//         { day: "Thursday", apples: 7, oranges: 45 },
//     ]
// };

export default {
    base : '/responsive_cv/',   // <-- add this
    plugins: [handlebars({
        context : data   // add this
    })],
};
