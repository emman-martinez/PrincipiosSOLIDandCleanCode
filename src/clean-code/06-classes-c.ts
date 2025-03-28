(() => {
  // Applying the Single Responsibility Principle
  // Prioritize the composition over inheritance

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps extends UserProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
      this.user = new User({ email, role });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("2000-01-01"),
    email: "emmanuel@email.com",
    gender: "M",
    lastOpenFolder: "/home/user/projects",
    name: "User Name",
    role: "admin",
    workingDirectory: "/home/user",
  });

  console.log({
    userSettings,
  });
})();
