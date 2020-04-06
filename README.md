## Joi Validation Extension
Extension for `Joi 15.1.1`, `Joi 16.0.2` and `Joi 17.1.1`. A validator is created and can be used to extend `Joi` functionality. It's just a simple test used to check if `Joi` extensions are working fine in this version.

#### Running
```
git clone https://github.com/darlanmoraes/joi-validation-extension.git
cd joi-validation-extension
cd 15.1.1 # cd 16.1.7 # cd 16.1.7 
npm install
npm run build:test
```

#### How can I use the extension?
- Version: **15.1.1**
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

- Version: **16.0.2**
``` $typescript
import * as hapi from "@hapi/joi";
import { cpfValidator } from "../index";

const custom = hapi.extend(cpfValidator);
const schema = custom.object()
  .keys({
    mycpf0: custom.cpf(),
    mycpf1: custom.cpf(),
  });

const result = schema.validate({
    mycpf0: "000000....00001",
    mycpf1: "0000000jok0001",
  }, {
    abortEarly: false
  });

console.log(result.error);
```

- Version: **17.1.1**
``` $typescript
import * as hapi from "@hapi/joi";
import { cpfValidator } from "../index";

const custom = hapi.extend(cpfValidator);
const schema = custom.object()
  .keys({
    mycpf0: custom.cpf(),
    mycpf1: custom.cpf(),
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
- **Validator**: `./15.1.1/index.ts`, `./16.0.2/index.ts`, `./17.1.1/index.ts`;
- **Test**: `./15.1.1/tst/index.test.ts`, `./16.0.2/tst/index.test.ts`, `./17.1.1/tst/index.test.ts`;