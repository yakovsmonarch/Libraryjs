class HelloWorld {
    #colors = [
        '#FF6B6B', // Красный
        '#4ECDC4', // Бирюзовый
        '#45B7D1', // Голубой
        '#96CEB4', // Зеленый
        '#FFEAA7', // Желтый
        '#DDA0DD', // Фиолетовый
        '#FFA07A'  // Лососевый
    ];

    async sayHello() {
        console.log("Привет из внешней библиотеки.");
        const date = new Date();
        console.log(date);

        await this.#changeColor();
    }

    async #changeColor() {
        for (let i = 0; i < this.#colors.length; i++) {
            document.body.style.backgroundColor = this.#colors[i];
            await new Promise(resolve => setTimeout(resolve, 300));

            if(i == this.#colors.length - 1){
                i = 0;
            }
        }
    }
}

// https://cdn.jsdelivr.net/gh/yakovsmonarch/Libraryjs@dev/hello.js должно обновляться каждые 10 минут.