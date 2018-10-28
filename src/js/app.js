// XMLHttpRequest wrapper using callbacks
class Hey {
    constructor(data) {
        this.data = data;
    }

    say_data() {
        console.log("My data is", this.data);
    }
}

var hey = new Hey("wow");
hey.say_data();
