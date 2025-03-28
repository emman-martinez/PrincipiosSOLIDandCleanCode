(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    public id: string;
    public type: HtmlType;

    constructor(id: string, type: HtmlType) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public placeholder: string;
    public value: string;

    constructor(placeholder: string, value: string) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public htlmElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.htlmElement = new HtmlElement(id, "input");
      this.inputAttributes = new InputAttributes(placeholder, value);
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
