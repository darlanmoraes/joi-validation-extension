import { Extension, CustomHelpers } from "@hapi/joi";

export interface IGeneric {
  [key: string]: any;
}

export function cpfValidator(joi: IGeneric): Extension {
  return {
    base: joi.string(),
    coerce(value: any, helpers: CustomHelpers) {
      if (value) {
        return {
          value: `${value}`.replace(/\D+/g, ""),
        };
      }
      return { value };
    },
    messages: {
      'string.cpf': '"{{#label}}" must be a cpf',
    },
    type: "cpf",
    validate(value: any, helpers: CustomHelpers) {
      if (value !== "00000000001") {
        return {
          value,
          errors: helpers.error('string.cpf'),
        };
      }
    }
  };
}

