function task1() {
    (async() => {
        function goObject(obj, deepLevel = 0) {
            if (deepLevel > deepUserLevel - 1) return "";
            let result = "";
            for (let keyObj in obj) {
                result += printFileName(keyObj, deepLevel) + "\n";
                if (typeof obj[keyObj] === "object") result += goObject(obj[keyObj], deepLevel + 1);
                else if (deepLevel < deepUserLevel - 1) result += printFileName(obj[keyObj], deepLevel + 1) + "\n";
            }
            return result;
        }
        function printFileName(fileName, deepLevel) {
            let str = "";
            for (let i = 0; i < deepLevel; i++) str += "-";
            str += `'${fileName}'`;
            return str
        };
        function searchFile(obj, fileName, path = "") {
            for (let keyObj in obj) {

                let currentPath = `${path}/${keyObj}`;

                if (typeof obj[keyObj] === "object") searchFile(obj[keyObj], fileName, currentPath);

                if (obj[keyObj].toString().includes(fileName)) 
                searchOutput += `${currentPath}/${obj[keyObj]}\n----------\n`.slice(1);
            }
        }

        var deepUserLevel = prompt("Введите уровень вложенности файлов (* - все уровни)");

        var searchOutput = "";

        deepUserLevel = (deepUserLevel === "*") ? Infinity : parseInt(deepUserLevel);

        const response = await fetch("./data/task1.json");
    
        if (response.ok) {
            const json = await response.json();
    
            console.log(goObject(json));

            document.getElementById("searchFileBtn").addEventListener("click", () => {
                searchOutput = "";

                const fileName = document.getElementById("searchFile").value;
                searchFile(json, fileName);

                console.log(searchOutput.slice(0, -11));
            });
        }
    })();    
}
function task2() {
    const data = [
        {
            name: "Vasya",
            class: 6,
            mark: 3
        },
        {
            name: "Ivan",
            class: 6,
            mark: 4
        },
        {
            name: "Igor",
            class: 7,
            mark: 5
        },
        {
            name: "Semen",
            class: 8,
            mark: 4
        },
        {
            name: "Alisa",
            class: 7,
            mark: 4
        },
        {
            name: "Danil",
            class: 8,
            mark: 3
        },
    ];

    const middleMark = data.reduce((prevValue, currentValue) => {
        return (prevValue + currentValue.mark);
    }, 0) / data.length;

    console.log("Средняя оценка учащихся: " + middleMark);

    const classGroups = data.reduce((prevValue, currentValue) => {
        const result = prevValue;
        result[currentValue.class] = prevValue[currentValue.class] || [];
        result[currentValue.class].push(currentValue);
        return result;
    }, {});

    for (let key in classGroups) {
        let middleMark = classGroups[key].reduce((prevValue, currentValue) => {
            return (prevValue + currentValue.mark);
        }, 0) / classGroups[key].length;
        console.log(`Класс ${key}, средняя оценка: ${middleMark}`);
    }

    data.sort((a, b) => {
        if (a.mark !== b.mark) return b.mark - a.mark;

        const aName = a.name.toUpperCase();
        const bName = b.name.toUpperCase();

        if (aName > bName) return 1;
        if (aName < bName) return -1;

        return 0;
    });

    const bestStudents = data.slice(0, 5);

    console.log("Лучшие ученики:");
    bestStudents.forEach(item => {
        console.log(`${item.name}, ${item.class} класс, оценка - ${item.mark}`);
    })
}
function task3() {
    const obj1 = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        father: {
            firstName: 'Ivan',
            lastName: 'Pupkin'
        }
    };
    
    const obj2 = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        father: {
            firstName: 'Ivan',
            lastName: 'Pupkin'
        }
    };

    function isObjectsEqual(obj1, obj2) {
        for (let keyObj1 in obj1) {
            if (typeof obj1[keyObj1] === "object" && typeof obj2[keyObj1] === "object") {
                if (!isObjectsEqual(obj1[keyObj1], obj2[keyObj1])) return false;
            }
            else if (obj1[keyObj1] !== obj2[keyObj1]) return false;
        }
        return true;
    };

    console.log(isObjectsEqual(obj1, obj2));
}
function task4() {
    //меняем var i на let i
    for (let i = 0; i < 10; i++) { 
        setTimeout(function () { 
            console.log(i); 
        }, 0); 
    }
}
console.log("task 1");
task1();
console.log("task 2");
task2();
console.log("task 3");
task3();
console.log("task 4");
task4();