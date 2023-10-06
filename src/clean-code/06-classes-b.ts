(() => {

    // No aplica el pricipio de responsabilidad unica.

    type Gender = 'M'|'F';

    interface PersonProps {
         name       : string;
         gender     : Gender;
         birthday   : Date;
    }
    
    class Person {
        public name : string;
        public gender: Gender;
        public birthday: Date;

        constructor({ name, gender, birthday}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }

    const newPerson = new Person({name: 'Sara', gender: 'F', birthday: new Date(2016, 5, 21) })
    console.log({ newPerson });

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class User extends Person {
        private lastAccess: Date;
        public role: string;
        public email: string;

        constructor({ email, role, name, gender, birthday }: UserProps) {
            super({ name, gender, birthday });
            this.lastAccess = new Date();
            this.role = role;
            this.email = email;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenedFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
        
    }
    
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor({
            workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name,
            gender,
            birthday,
        }: UserSettingsProps) {
            super({ email, role, name, gender, birthday });
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenedFolder: '/home',
        email: 'pipe12@google.com',
        role: 'admin',
        name: 'Andres',
        gender: 'M',
        birthday: new Date(1981, 5, 12)
    })

    console.log({ userSettings })

})();