import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
testFunctionArray,
validationInput,
validationOutput,
} from "../types/test-config";

export default function status(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;

function REQUIRED_CONTEXT_CODE_1(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.context.location.country.code",
);
const enumList = ["IND"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_DOMAIN_3(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.domain");
const enumList = ["ONDC:TRV10"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV10"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_TIMESTAMP_4(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.timestamp");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_BAP_ID_5(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_TRANSACTION_ID_6(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.transaction_id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_MESSAGE_ID_7(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.message_id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_VERSION_8(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.version");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_ACTION_9(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.action");
const enumList = ["status"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["status"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_BAP_URI_10(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_uri");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_TTL_11(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_BPP_ID_12(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.bpp_id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_CONTEXT_BPP_URI_13(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.context.bpp_uri");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}

const testFunctions: testFunctionArray = [
REQUIRED_CONTEXT_CODE_1,
REQUIRED_CONTEXT_DOMAIN_3,
REQUIRED_CONTEXT_TIMESTAMP_4,
REQUIRED_CONTEXT_BAP_ID_5,
REQUIRED_CONTEXT_TRANSACTION_ID_6,
REQUIRED_CONTEXT_MESSAGE_ID_7,
REQUIRED_CONTEXT_VERSION_8,
REQUIRED_CONTEXT_ACTION_9,
REQUIRED_CONTEXT_BAP_URI_10,
REQUIRED_CONTEXT_TTL_11,
REQUIRED_CONTEXT_BPP_ID_12,
REQUIRED_CONTEXT_BPP_URI_13,
];

let invalidResults: validationOutput = [];
for (const fn of testFunctions) {
const subResult = fn(input);
// .filter(r => !r.valid);
invalidResults = [...invalidResults, ...subResult];
if (!input.config.runAllValidations && invalidResults.length > 0) {
return invalidResults;
}
}
if (invalidResults.length > 0) {
// return invalidResults;
subResults = invalidResults;
valid = subResults.every((r) => r.valid);
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
