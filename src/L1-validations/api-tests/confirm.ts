import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
testFunctionArray,
validationInput,
validationOutput,
} from "../types/test-config";

export default function confirm(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;

function PAYMENT_STATUS_TRANSACTION_ID(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.payments[*]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const statusCode = ["PAID"];
const statusPath = payloadUtils.getJsonPath(testObj, "$.status");
const transactionId = payloadUtils.getJsonPath(
testObj,
"$.params.transaction_id",
);

const skipCheck = !validations.allIn(statusPath, statusCode);
if (skipCheck) continue;

const validate = validations.arePresent(transactionId);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition PAYMENT_STATUS_TRANSACTION_ID**: $.message.order.payments[*].params.transaction_id must be present in the payload

	> Note: **Condition PAYMENT_STATUS_TRANSACTION_ID** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.payments[*].status must **not** be in ["PAID"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
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
const enumList = ["confirm"];

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
  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["confirm"]`,
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
function REQUIRED_MESSAGE_ID_14(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.message.order.items[*].id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_ID_15(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.message.order.provider.id");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_NAME_16(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(testObj, "$.message.order.billing.name");

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_NAME_16**: $.message.order.billing.name must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_ID_17(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.payments[*].id",
);

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.payments[*].id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_COLLECTED_BY_18(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.payments[*].collected_by",
);
const enumList = ["BPP", "BAP"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY_18**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_COLLECTED_BY_18.1**: $.message.order.payments[*].collected_by must be present in the payload
  - **condition REQUIRED_MESSAGE_COLLECTED_BY_18.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_STATUS_19(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.payments[*].status",
);
const enumList = ["NOT-PAID", "PAID"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_STATUS_19**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_STATUS_19.1**: $.message.order.payments[*].status must be present in the payload
  - **condition REQUIRED_MESSAGE_STATUS_19.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_TYPE_20(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.payments[*].type",
);
const enumList = ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_TYPE_20**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_20.1**: $.message.order.payments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_20.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_ID_24(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].id",
);

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_ID_24**: $.message.order.fulfillments[*].id must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_NAME_25(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].customer.person.name",
);

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_NAME_25**: $.message.order.fulfillments[*].customer.person.name must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_PHONE_26(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].customer.contact.phone",
);

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_PHONE_26**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_TYPE_27(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].type",
);
const enumList = ["DELIVERY", "SELF_PICKUP"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_TYPE_27**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_27.1**: $.message.order.fulfillments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_27.2**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_GPS_28(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].stops[*].location.gps",
);

const validate = validations.arePresent(attr);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_GPS_28**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function REQUIRED_MESSAGE_CATEGORY_29(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const attr = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].vehicle.category",
);
const enumList = ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"];

const validate =
validations.arePresent(attr) && validations.allIn(attr, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition REQUIRED_MESSAGE_CATEGORY_29**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CATEGORY_29.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
  - **condition REQUIRED_MESSAGE_CATEGORY_29.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_CODE_1(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = ["RIDE", "RENTAL"];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.items[*].descriptor.code",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE", "RENTAL"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_VARIANT_2(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].vehicle.variant",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_VARIANT_2**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]

	> Note: **Condition VALID_ENUM_MESSAGE_VARIANT_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_ENERGY_TYPE_3(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = [
"ELECTRIC",
"PETRO",
"DIESEL",
"HYDROGEN",
"BIOFUELS",
"CNG",
"LPG",
];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].vehicle.energy_type",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_ENERGY_TYPE_3**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]

	> Note: **Condition VALID_ENUM_MESSAGE_ENERGY_TYPE_3** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_TYPE_4(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = ["OTP", "QR"];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].stops[*].authorization.type",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_STATUS_5(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = ["UNCLAIMED", "CLAIMED"];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].stops[*].authorization.status",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_STATUS_5**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATUS_5** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function VALID_ENUM_MESSAGE_CODE_6(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const enumList = [
"RIDE_CANCELLED",
"RIDE_ENDED",
"RIDE_STARTED",
"RIDE_ASSIGNED",
"RIDE_ENROUTE_PICKUP",
"RIDE_ARRIVED_PICKUP",
"RIDE_CONFIRMED",
];
const enumPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].state.descriptor.code",
);

const skipCheck = !validations.arePresent(enumPath);
if (skipCheck) continue;

const validate = validations.allIn(enumPath, enumList);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition VALID_ENUM_MESSAGE_CODE_6**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_6** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_0(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const validTags = ["BAP_TERMS", "BPP_TERMS"];
const tagPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.tags[*].descriptor.code",
);

const skipCheck = !validations.arePresent(tagPath);
if (skipCheck) continue;

const validate = validations.allIn(tagPath, validTags);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_0**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]

	> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.tags[*].descriptor.code must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_0_BAP_TERMS(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"BUYER_FINDER_FEES_TYPE",
"BUYER_FINDER_FEES_PERCENTAGE",
"BUYER_FINDER_FEES_AMOUNT",
"SETTLEMENT_WINDOW",
"SETTLEMENT_BASIS",
"SETTLEMENT_TYPE",
"MANDATORY_ARBITRATION",
"COURT_JURISDICTION",
"DELAY_INTEREST",
"STATIC_TERMS",
"SETTLEMENT_AMOUNT",
"SETTLEMENT_BANK_CODE",
"SETTLEMENT_BANK_ACCOUNT_NUMBER",
"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_0_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT", "SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER", "SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_0_BPP_TERMS(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"BUYER_FINDER_FEES_TYPE",
"BUYER_FINDER_FEES_PERCENTAGE",
"BUYER_FINDER_FEES_AMOUNT",
"SETTLEMENT_WINDOW",
"SETTLEMENT_BASIS",
"SETTLEMENT_TYPE",
"MANDATORY_ARBITRATION",
"COURT_JURISDICTION",
"DELAY_INTEREST",
"STATIC_TERMS",
"SETTLEMENT_AMOUNT",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_0_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT", "SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const validTags = [
"DISABILITY_VIS",
"DISABILITY_HEA",
"DISABILITY_MOB",
"DISABILITY_LEP",
"DISABILITY_SPE",
"DISABILITY_INTEL",
"MENTAL",
"DISABILITY_BLOOD",
"DISABILITY_DWARFISM",
"DISABILITY_ACID_ATTACK_SURVIVOR",
"DISABILITY_MULTIPLE_DIS",
"FARE_POLICY",
"INFO",
];
const tagPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.items[*].tags[*].descriptor.code",
);

const skipCheck = !validations.arePresent(tagPath);
if (skipCheck) continue;

const validate = validations.allIn(tagPath, validTags);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["DISABILITY_VIS", "DISABILITY_HEA", "DISABILITY_MOB", "DISABILITY_LEP", "DISABILITY_SPE", "DISABILITY_INTEL", "MENTAL", "DISABILITY_BLOOD", "DISABILITY_DWARFISM", "DISABILITY_ACID_ATTACK_SURVIVOR", "DISABILITY_MULTIPLE_DIS", "FARE_POLICY", "INFO"]

	> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_VIS(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"VIS_LEVEL",
"VIS_SCREEN_READER_USAGE",
"VIS_CANE_USAGE",
"VIS_SPECIAL_REQUIREMENT",
"FEATURE_LIST",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_VIS**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')].list[*].descriptor.code must be in ["VIS_LEVEL", "VIS_SCREEN_READER_USAGE", "VIS_CANE_USAGE", "VIS_SPECIAL_REQUIREMENT", "FEATURE_LIST"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_HEA(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"HEA_READING_ABILITY",
"HEA_SIGN_LANGUAGE_PREFERENCE",
"HEA_SPECIAL_REQUIREMENT",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_HEA**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')].list[*].descriptor.code must be in ["HEA_READING_ABILITY", "HEA_SIGN_LANGUAGE_PREFERENCE", "HEA_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_MOB(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"MOB_DISABILITY",
"MOB_WHEELCHAIR_USAGE",
"MOB_CRUTCHES_USAGE",
"MOB_SPECIAL_REQUIREMENT",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_MOB**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')].list[*].descriptor.code must be in ["MOB_DISABILITY", "MOB_WHEELCHAIR_USAGE", "MOB_CRUTCHES_USAGE", "MOB_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_LEP(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["LEP_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_LEP**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')].list[*].descriptor.code must be in ["LEP_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_SPE(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["SPE_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_SPE**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')].list[*].descriptor.code must be in ["SPE_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_INTEL(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_INTEL**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')].list[*].descriptor.code must be in ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_MENTAL(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_MENTAL**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')].list[*].descriptor.code must be in ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_BLOOD(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_BLOOD**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')].list[*].descriptor.code must be in ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_DWARFISM(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["DWARFISM_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_DWARFISM**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')].list[*].descriptor.code must be in ["DWARFISM_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')].list[*].descriptor.code must be in ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_DISABILITY_MULTIPLE_DIS(
input: validationInput,
): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_DISABILITY_MULTIPLE_DIS**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')].list[*].descriptor.code must be in ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_FARE_POLICY(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"MIN_FARE",
"MIN_FARE_DISTANCE_KM",
"PER_KM_CHARGE",
"PICKUP_CHARGE",
"WAITING_CHARGE_PER_MIN",
"NIGHT_CHARGE_MULTIPLIER",
"NIGHT_SHIFT_START_TIME",
"NIGHT_SHIFT_END_TIME",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_1_INFO(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = [
"DISTANCE_TO_NEAREST_DRIVER_METER",
"ETA_TO_NEAREST_DRIVER_MIN",
"TOTAL_HOURS",
"TOTAL_DISTANCE",
];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_1_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN", "TOTAL_HOURS", "TOTAL_DISTANCE"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_2(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(input.payload, "$");
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const validTags = ["ROUTE_INFO"];
const tagPath = payloadUtils.getJsonPath(
testObj,
"$.message.order.fulfillments[*].tags[*].descriptor.code",
);

const skipCheck = !validations.arePresent(tagPath);
if (skipCheck) continue;

const validate = validations.allIn(tagPath, validTags);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]

	> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}
function validate_tag_2_ROUTE_INFO(input: validationInput): validationOutput {
const scope = payloadUtils.getJsonPath(
input.payload,
"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
);
let subResults: validationOutput = [];
let valid = true;
for (const testObj of scope) {
testObj._EXTERNAL = input.externalData;
const subTags = payloadUtils.getJsonPath(testObj, "$.list[*].descriptor.code");
const validValues = ["ENCODED_POLYLINE", "WAYPOINTS"];

const validate = validations.allIn(subTags, validValues);

if (!validate) {
delete testObj._EXTERNAL;
return [
{
valid: false,
code: 30000,
description: `- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]`,
},
];
}

delete testObj._EXTERNAL;
}
return [{ valid: valid, code: 200 }, ...subResults];
}

const testFunctions: testFunctionArray = [
PAYMENT_STATUS_TRANSACTION_ID,
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
REQUIRED_MESSAGE_ID_14,
REQUIRED_MESSAGE_ID_15,
REQUIRED_MESSAGE_NAME_16,
REQUIRED_MESSAGE_ID_17,
REQUIRED_MESSAGE_COLLECTED_BY_18,
REQUIRED_MESSAGE_STATUS_19,
REQUIRED_MESSAGE_TYPE_20,
REQUIRED_MESSAGE_ID_24,
REQUIRED_MESSAGE_NAME_25,
REQUIRED_MESSAGE_PHONE_26,
REQUIRED_MESSAGE_TYPE_27,
REQUIRED_MESSAGE_GPS_28,
REQUIRED_MESSAGE_CATEGORY_29,
VALID_ENUM_MESSAGE_CODE_1,
VALID_ENUM_MESSAGE_VARIANT_2,
VALID_ENUM_MESSAGE_ENERGY_TYPE_3,
VALID_ENUM_MESSAGE_TYPE_4,
VALID_ENUM_MESSAGE_STATUS_5,
VALID_ENUM_MESSAGE_CODE_6,
validate_tag_0,
validate_tag_0_BAP_TERMS,
validate_tag_0_BPP_TERMS,
validate_tag_1,
validate_tag_1_DISABILITY_VIS,
validate_tag_1_DISABILITY_HEA,
validate_tag_1_DISABILITY_MOB,
validate_tag_1_DISABILITY_LEP,
validate_tag_1_DISABILITY_SPE,
validate_tag_1_DISABILITY_INTEL,
validate_tag_1_MENTAL,
validate_tag_1_DISABILITY_BLOOD,
validate_tag_1_DISABILITY_DWARFISM,
validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR,
validate_tag_1_DISABILITY_MULTIPLE_DIS,
validate_tag_1_FARE_POLICY,
validate_tag_1_INFO,
validate_tag_2,
validate_tag_2_ROUTE_INFO,
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
