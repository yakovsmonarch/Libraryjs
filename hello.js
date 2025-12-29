class HelloWorld {
    sayHello() {
        console.log("Привет из внешней библиотеки.");
        const date = new Date();
        console.log(date);

        for(let i = 0; i < 1000; i++) {
            console.log(i);
        }
    }
}

// https://cdn.jsdelivr.net/gh/yakovsmonarch/Libraryjs@dev/hello.js должно обновляться каждые 10 минут.