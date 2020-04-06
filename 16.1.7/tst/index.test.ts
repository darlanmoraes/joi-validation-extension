import * as hapi from "@hapi/joi";
import { cpfValidator } from "../index";

describe("cpf validator", () => {
  const custom = hapi.extend(cpfValidator);
  const schema = custom.object()
    .keys({
      value0: custom.cpf(),
      value1: custom.cpf(),
      value2: custom.cpf(),
      value3: custom.cpf(),
      value4: custom.cpf(),
      value5: custom.cpf(),
      value6: custom.cpf(),
      value7: custom.cpf(),
    });
  
  test("must execute with success", () => {
    const result = schema.validate({
      value0: "000000....00001",
      value1: "0000000jok0001",
      value2: "00000gk000001",
      value3: "000000#$%00001",
      value4: "00000000002",
      value5: "000eee00000003",
      value6: "000000...00002",
      value7: 123,
    }, {
      abortEarly: false
    });

    const errors = result.error.details.map((error) => {
      return {
        message: error.message,
        value: error.context.value
      };
    });
    
    expect(errors).toEqual([
      { message: '"value4" must be a cpf', value: '00000000002' },
      { message: '"value5" must be a cpf', value: '00000000003' },
      { message: '"value6" must be a cpf', value: '00000000002' },
      { message: '"value7" must be a cpf', value: '123' }
    ]);
  });
});