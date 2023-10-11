(()=>{
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        name     : string;
        gender   : Gender;
        birthday: Date;
    }

    class Person {
        public name     : string;
        public gender   : Gender;
        public birthday: Date;

        constructor({ name, gender, birthday }: PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }
    class User {

        public email       : string;
        public role        : string;
        private lastAccess : Date;

        constructor({ email, role }: UserProps ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastFolderOpen  : string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string; 
        public lastFolderOpen  : string; 

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }
    
    
    // Nuevo User Settings
    interface UserSettingsProps {
        birthday       : Date;
        email           : string;
        gender          : Gender;
        lastFolderOpen  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings {
        // constructor(
        //     public person: Person,
        //     public user  : User,
        //     public settings: Settings,
        // ){}
        public person  : Person;
        public user    : User; 
        public settings: Settings;

        constructor({ 
            name, gender, birthday,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthday });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }
    


    const userSettings = new UserSettings({
        birthday: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastFolderOpen: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
    
})()