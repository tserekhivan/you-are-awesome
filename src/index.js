const createEnumerableProperty = (propertyName) => {
     return this;
};

const createNotEnumerableProperty = (propertyName) => {
    const property = propertyName;
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        value: 'value'
    });
    return property;
};

const createProtoMagicObject = () => {
    let magicObj = Function();
    magicObj.prototype = magicObj.__proto__;
    return magicObj;
};

const incrementor = () => {
    count++
    return incrementor;
};
let count = 0;
incrementor.toString = () => { return count;}


const asyncIncrementor = async () => {
    return await asyncCount++;
};
let asyncCount = 1;

const createIncrementer = () => {
    function* incrementor() {
        let count = 1;
        while(count) {
            yield count;
            count++;
        }
    }
    return incrementor();
};

const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(param), 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;
    const countObj = (obj) => {
        for (let property in obj) {
             if (typeof obj[property] === 'object') {
                 countObj(obj[property]);
             }
             count++;
        }
        return count;
    }
    return countObj(obj);
};

const createSerializedObject = () => {
    let obj = null;
    return obj;
};

const sortByProto = (array) => {
    return array.sort((a, b) => {
        let countProtoA = 0;
        let countProtoB = 0;
        while (a.__proto__ !== null) {
            countProtoA++;
            a = a.__proto__;
        }
        while (b.__proto__ !== null) {
            countProtoB++;
            b = b.__proto__;
        }
        return countProtoA - countProtoB;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;