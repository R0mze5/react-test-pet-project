/**
 * namespaces - сущности, присутствующие только в ts, не в js, которые позволяют декомпозировать делать модульный код
 */

// импортирование namespaces
/// <fererence path="./namespacesForm.ts" />

// namespaces поуване работают из-за настроек babel
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace NForm {
  class MyForm {
    private type: TFormType = 'inline';
    private state: TFormState = 'active';

    constructor(public email: string) {}

    get getInfo(): IFormInfo {
      return {
        type: this.type,
        state: this.state,
      };
    }
  }

  const myForm = new MyForm('roman@mail.com');

  console.log(myForm);
}
