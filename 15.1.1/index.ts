import { State, ValidationOptions } from "@hapi/joi";

export interface IGeneric {
  [key: string]: any;
}

export function cpfValidator(joi: IGeneric) {
  return {
    base: joi.string(),
    coerce(value: string, state: State, options: ValidationOptions) {
      if (value) {
        return `${value}`.replace(/\D+/g, "");
      }
      return value;
    },
    language: {
      cpf: "must be a cpf",
    },
    name: "string",
    rules: [
      {
        name: "cpf",
        validate(params: IGeneric, value: string, state: State, options: ValidationOptions) {
          if (value !== "00000000001") {
            return this.createError("string.cpf", { value }, state, options);
          }
          return value;
        },
      },
    ],
  };
}

