(function () {
    'use strict';

    class Task {
        constructor(task) {
            this.task = task;
        }

        run() {
            console.log(this.task);
        }
    }

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    const task1 = new Task('Полить цветы');
    const user1 = new User(task1);

    user1.do();

})();
