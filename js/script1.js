'use strict';
// http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript

const options = {
    name: 'test',
    color:'red',
    makeTest: function(){
        return 'Test';
    }
};
console.log(Object.keys(options).length);
console.log(options.makeTest());


