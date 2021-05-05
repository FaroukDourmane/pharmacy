import { readable } from 'svelte/store';
import { getCategories } from '../api/Categories';

// const articlesArray = {
//     1: [
//         {
//             title: "Growth Hormone: Patient and Parent/ Carer Agreement Letter Patient name",
//             content: ""
//         }
//     ]
// };

export const categories = readable(categoriesList, function start(set) {
    return function stop(){}
});