interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void; // Optional method
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Hummingbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Ostrich implements Bird {
  public fly() {
    throw new Error("Ostriches can't fly");
  }
  public eat() {}
  public run() {}
  public swim() {
    throw new Error("Ostriches can't swim");
  }
}

class Penguin implements Bird {
  public fly() {
    throw new Error("Penguins can't fly");
  }
  public eat() {}
  public run() {}
  public swim() {}
}
