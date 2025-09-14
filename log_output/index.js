
const randomString = Math.random().toString(36).substring(2);

const printString = () => {
    console.log(new Date().toISOString(),randomString);

    setTimeout(printString, 5000);
};

printString();