## Joi Validation Extension
Extension for `Joi 15.1.1`. A validator is created and can be used to extend `Joi` functionality. It's just a simple test used to check if `Joi` extensions are working fine in this version.

#### Running
```
git clone https://github.com/darlanmoraes/joi-validation-extension.git
cd joi-validation-extension
npm install
npm run build:test
```

#### How can I use the extension?
``` $typescript
import * as hapi from "@hapi/joi";
import { cpfValidator } from "../index";

const custom = hapi.extend(cpfValidator);
const schema = custom.object()
  .keys({
    mycpf0: custom.string().cpf(),
    mycpf1: custom.string().cpf(),
  });

const result = schema.validate({
    mycpf0: "000000....00001",
    mycpf1: "0000000jok0001",
  }, {
    abortEarly: false
  });

console.log(result.error);
```

#### Sources
- **Validator**: `index.ts`;
- **Test**: `tst/index.test.ts`;