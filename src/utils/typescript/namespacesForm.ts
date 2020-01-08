namespace NForm {
  export type TFormType = 'inline' | 'block';
  export type TFormState = 'active' | 'disabled';

  export interface IFormInfo {
    type: TFormType;
    state: TFormState;
  }
}
