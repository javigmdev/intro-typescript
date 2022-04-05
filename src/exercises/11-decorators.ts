/*
    Documentation: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

    A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property
    or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called 
    at runtime with information about the decorated declaration.

    To enable support for decorators, we must enable the experimentalDecorators compiler option either on the command line or
    in your tsconfig.js
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }
   
  const bug = new BugReport("Needs dark mode");
  console.log(bug);

/*
    Note that the decorator _does not_ change the TypeScript type and so the new property `reportingURL` is not known
    to the type system:
*/
//bug.reportingURL;
//Property 'reportingURL' does not exist on type 'BugReport'.