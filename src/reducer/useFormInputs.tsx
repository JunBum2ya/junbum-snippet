import {ChangeEvent, useReducer} from "react";

const reducer = (state: FormState, action: FormAction): FormState => {
  return {
    ...state, [action.name]: action.value
  };
};

export const useFormInputs = (initialForm: any) => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    dispatch({name, value});
  }
  return [state, onChange] as const;
};

type FormState = {
  [key: string]: string
}

type FormAction = {
  name: string,
  value: string
};