(() => {

    // Aplicando el pricipio de responsabilidad unica.
    // Priorizar la composicion frente a la herencia.

    type Gender = 'M'|'F';

    interface PersonProps {

         name       : string;
         gender     : Gender;
         birthday   : Date;

    }
    
    class Person {
        
        public name     : string;
        public gender   : Gender;
        public birthday : Date;

        constructor({ name, gender, birthday}: PersonProps) {

            this.name     = name;
            this.gender   = gender;
            this.birthday = birthday;
        
        }
    }

    const newPerson = new Person({name: 'Sara', gender: 'F', birthday: new Date(2016, 5, 21) })
    console.log({ newPerson });

    interface UserProps {

        email   : string;
        role    : string;

    }

    class User {

        private lastAccess  : Date;
        public email        : string;
        public role         : string;

        constructor({ email, role }: UserProps) {

            this.lastAccess = new Date();
            this.role       = role;
            this.email      = email;

        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {

        workingDirectory    : string;
        lastOpenedFolder    : string;

    }
    
    class Settings {

        public workingDirectory : string;
        public lastOpenedFolder : string;

        constructor({ workingDirectory, lastOpenedFolder }: SettingsProps) {

            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;

        }
    }

    interface UserSettingsProps {

        workingDirectory    : string;
        lastOpenedFolder    : string;
        email               : string;
        role                : string;
        name                : string;
        gender              : Gender;
        birthday            : Date;        

    }

    class UserSettings {

        public person       : Person;
        public user         : User;
        public settings     : Settings;

        constructor({

            name, gender, birthday,
            email, role,
            workingDirectory, lastOpenedFolder,

        }: UserSettingsProps) {

            this.person   = new Person({ name, gender, birthday });
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenedFolder, workingDirectory });

        }
    }

    const userSettings = new UserSettings({

        workingDirectory    : '/usr/home',
        lastOpenedFolder    : '/home',
        email               : 'pipe12@google.com',
        role                : 'admin',
        name                : 'Andres',
        gender              : 'M',
        birthday            : new Date(1981, 5, 12)

    })

    console.log({ userSettings })

})();