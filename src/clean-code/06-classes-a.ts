(() => {
  type Gender = "M" | "F";

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;
    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

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
      public lastOpenFolder: string,
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
    "/home/user",
    "/home/user/projects",
    "email@email.com",
    "admin",
    "User Name",
    "M",
    new Date("2000-01-01")
  );

  console.log({
    userSettings,
  });
})();
