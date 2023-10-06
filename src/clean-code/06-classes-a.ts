(() => {

    // No aplica el pricipio de responsabilidad unica.

    type Gender = 'M'|'F';
    
    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthday: Date) {
        }
    }

    const newPerson = new Person('Sara', 'F', new Date(2016, 5, 21))
    console.log({ newPerson });

    class User extends Person {
        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super(name, gender, birthday);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenedFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super(email, role, name, gender, birthday);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'pipe12@google.com',
        'admin',
        'Andres',
        'M',
        new Date(1981, 5, 12)
    )

    console.log({ userSettings })

})();