// 10,889,187 operations/sec
export const capitalizeFirstLetter = (str) => {
    if (str?.length > 0) {
        return str[0]?.toUpperCase() + str?.slice(1);
    }
    return ''
}

export const atLeastXCapitalizedInARow = (word, numberOfUppercased) => {
    // Usuwamy znaki specjalne, pozostawiamy tylko litery i cyfry
    let cleanedWord = word.replace(/[^a-zA-ZĄĆĘŁŃÓŚŹŻąćęłńóśźż]/g, '');

    // Zmienna do zliczania wielkich liter
    let uppercaseCount = 0;

    // Iterujemy przez każdy znak w wyrazie
    for (let i = 0; i < cleanedWord.length; i++) {
        // Sprawdzamy, czy dany znak jest wielką literą
        if (cleanedWord[i] === cleanedWord[i].toUpperCase() && /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(cleanedWord[i])) {
            uppercaseCount++;
        }
        else {
            uppercaseCount = 0;
        }

        // Jeżeli mamy co najmniej X wielkich liter
        if (uppercaseCount >= numberOfUppercased) {
            return true;
        }
    }

    // Jeżeli nie znaleziono przynajmniej X wielkich liter, zwracamy false
    return false;
}

export const generalUpdateModel = async ({ _id, values, modelName }) => {

    try {
        let response = await fetch(`/api/generalUpdate`, {
            method: "PATCH",
            // modelName: 'repertprSymptom'
            body: JSON.stringify({ _id, modelName, values }),
        });
        
        const data = await response.json();

        return data[modelName];

    } catch (error) {
        console.log('General UPDATE Error:', error);
    }

};

export const generalGetModel = async ({ _id, modelName, match, lookup }) => {

    try {
        let response = await fetch(`/api/generalUpdate`, {
            method: "POST",
            // modelName: 'repertprSymptom'
            body: JSON.stringify({ _id, modelName, match, lookup }),
        });
        
        const data = await response.json();

        return data[modelName];

    } catch (error) {
        console.log('General POST Error:', error);
    }

};

export const generalCreateModel = async ({ modelName, values }) => {

    try {
        let response = await fetch(`/api/${modelName}`, {
            method: "POST",
            // modelName: 'repertprSymptom'
            body: JSON.stringify({ values, modelName }),
        });
        
        const data = await response.json();

        return data[modelName];

    } catch (error) {
        console.log('General POST Error:', error);
    }

};


export const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const valueExists = (v) => {
    return (v !== null && v !== undefined);
}