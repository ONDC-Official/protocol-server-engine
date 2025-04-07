import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_issue(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function ON_ISSUE_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_issue"];
                const version = ["2.0.0"];

                function CONTEXT_Attributes_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function CONTEXT_REQUIRED_COUNTRY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.country.code",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_COUNTRY**: $.context.location.country.code must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_CITY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.city.code",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_CITY**: $.context.location.city.code must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REG_CITY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.city.code",
                                );
                                const reg = ["(\*)|(^std\:[0-9]{2,4}$)"];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REG_CITY**: all elements of $.context.location.city.code must follow every regex in ["(\*)|(^std\:[0-9]{2,4}$)"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_DOMAIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.domain",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_DOMAIN**: $.context.domain must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_TIMESTAMP(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.timestamp",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_TIMESTAMP**: $.context.timestamp must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_BAP_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_id",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_BAP_ID**: $.context.bap_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_TRANSACTION_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.transaction_id",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_TRANSACTION_ID**: $.context.transaction_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_MESSAGE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.message_id",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_MESSAGE_ID**: $.context.message_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_VERSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.version",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_VERSION**: $.context.version must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_ENUM_VERSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.version",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.equalTo(
                                    attr,
                                    version,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_ENUM_VERSION**: $.context.version must be equal to ["2.0.0"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_ACTION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.action",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_ACTION**: $.context.action must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_BAP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_uri",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_BAP_URI**: $.context.bap_uri must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REG_BAP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_uri",
                                );
                                const reg = ["(^https\://)"];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REG_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["(^https\://)"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_BPP_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bpp_id",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const skipCheck = !validations.equalTo(
                                    action,
                                    action,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_BPP_ID**: $.context.bpp_id must be present in the payload

	> Note: **Condition CONTEXT_REQUIRED_BPP_ID** can be skipped if the following conditions are met:
	>
	> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_BPP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bpp_uri",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const skipCheck = !validations.equalTo(
                                    action,
                                    action,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_BPP_URI**: $.context.bpp_uri must be present in the payload

	> Note: **Condition CONTEXT_REQUIRED_BPP_URI** can be skipped if the following conditions are met:
	>
	> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REG_BPP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bpp_uri",
                                );
                                const reg = ["(^https\://)"];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const skipCheck = !validations.equalTo(
                                    action,
                                    action,
                                );
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REG_BPP_URI**: all elements of $.context.bpp_uri must follow every regex in ["(^https\://)"]

	> Note: **Condition CONTEXT_REG_BPP_URI** can be skipped if the following conditions are met:
	>
	> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REQUIRED_TTL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.ttl",
                                );
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REQUIRED_TTL**: $.context.ttl must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function CONTEXT_REG_TTL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.ttl",
                                );
                                const reg = [
                                    "^P(?!$)((\d+Y)|(\d+\.\d+Y$))?((\d+M)|(\d+\.\d+M$))?((\d+W)|(\d+\.\d+W$))?((\d+D)|(\d+\.\d+D$))?(T(?=\d)((\d+H)|(\d+\.\d+H$))?((\d+M)|(\d+\.\d+M$))?(\d+(\.\d+)?S)?)??$",
                                ];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition CONTEXT_REG_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?!$)((\d+Y)|(\d+\.\d+Y$))?((\d+M)|(\d+\.\d+M$))?((\d+W)|(\d+\.\d+W$))?((\d+D)|(\d+\.\d+D$))?(T(?=\d)((\d+H)|(\d+\.\d+H$))?((\d+M)|(\d+\.\d+M$))?(\d+(\.\d+)?S)?)??$"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            CONTEXT_REQUIRED_COUNTRY,
                            CONTEXT_REQUIRED_CITY,
                            CONTEXT_REG_CITY,
                            CONTEXT_REQUIRED_DOMAIN,
                            CONTEXT_REQUIRED_TIMESTAMP,
                            CONTEXT_REQUIRED_BAP_ID,
                            CONTEXT_REQUIRED_TRANSACTION_ID,
                            CONTEXT_REQUIRED_MESSAGE_ID,
                            CONTEXT_REQUIRED_VERSION,
                            CONTEXT_ENUM_VERSION,
                            CONTEXT_REQUIRED_ACTION,
                            CONTEXT_REQUIRED_BAP_URI,
                            CONTEXT_REG_BAP_URI,
                            CONTEXT_REQUIRED_BPP_ID,
                            CONTEXT_REQUIRED_BPP_URI,
                            CONTEXT_REG_BPP_URI,
                            CONTEXT_REQUIRED_TTL,
                            CONTEXT_REG_TTL,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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
                function Context_Enums_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_ENUM_context_location_country_code(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.country.code",
                                );
                                const enumList = ["IND"];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_ENUM_context_location_country_code**: every element of $.context.location.country.code must be in ["IND"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function VALID_ENUM_context_action(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.action",
                                );
                                const enumList = ["issue"];
                                const action = ["on_issue"];
                                const version = ["2.0.0"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_ENUM_context_action**: every element of $.context.action must be in ["issue"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_ENUM_context_location_country_code,
                            VALID_ENUM_context_action,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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

                const testFunctions: testFunctionArray = [
                    CONTEXT_Attributes_Tests,
                    Context_Enums_Tests,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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
        function ON_ISSUE_ISSUE(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function ISSUE_REQUIRED(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ISSUE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ISSUE_ID**: $.message.issue.id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_ISSUE_STATUS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.status",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ISSUE_STATUS**: $.message.issue.status must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_LEVEL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.level",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_LEVEL**: $.message.issue.level must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_CREATED_AT(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.created_at",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_UPDATED_AT(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.updated_at",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_DURATION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.expected_response_time.duration",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_DURATION_7(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.expected_resolution_time.duration",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_SOURCE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.source_id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_COMPLAINANT_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.complainant_id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_COMPLAINANT_ID**: $.message.issue.complainant_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_LAST_ACTION_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.last_action_id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ISSUE_ID,
                            REQUIRED_ISSUE_STATUS,
                            REQUIRED_MESSAGE_LEVEL,
                            REQUIRED_MESSAGE_CREATED_AT,
                            REQUIRED_MESSAGE_UPDATED_AT,
                            REQUIRED_MESSAGE_DURATION,
                            REQUIRED_MESSAGE_DURATION_7,
                            REQUIRED_MESSAGE_SOURCE_ID,
                            REQUIRED_MESSAGE_COMPLAINANT_ID,
                            REQUIRED_MESSAGE_LAST_ACTION_ID,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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
                function ISSUE_ENUM(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function Actions_Enums_Tests_1(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.status",
                                );
                                const enumList = [
                                    "OPEN",
                                    "CLOSED",
                                    "PROCESSING",
                                    "RESOLVED",
                                ];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition Actions_Enums_Tests_1**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_LEVEL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.level",
                                );
                                const enumList = [
                                    "ISSUE",
                                    "GREVIENCE",
                                    "DISPUTE",
                                ];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_LEVEL**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            Actions_Enums_Tests_1,
                            REQUIRED_MESSAGE_LEVEL,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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

                const testFunctions: testFunctionArray = [
                    ISSUE_REQUIRED,
                    ISSUE_ENUM,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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
        function ISSUE_ACTIONS_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function Actions_Attributes_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_ID_25(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_CODE_26(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.code",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_SHORT_DESC_27(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.short_desc",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_UPDATED_AT_28(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].updated_at",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_ACTION_BY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].action_by",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_ID_25,
                            REQUIRED_MESSAGE_CODE_26,
                            REQUIRED_MESSAGE_SHORT_DESC_27,
                            REQUIRED_MESSAGE_UPDATED_AT_28,
                            REQUIRED_MESSAGE_ACTION_BY,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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
                function Actions_Enums_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_NAME_30(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.name",
                                );
                                const enumList = [
                                    "OPEN",
                                    "CLOSED",
                                    "PROCESSING",
                                    "RESOLVED",
                                    "INFO_REQUESTED",
                                    "INFO_PROVIDED",
                                    "INFO_NOT_AVAILABLE",
                                    "RESOLUTION_PROPOSED",
                                    "RESOLUTION_CASCADED",
                                    "RESOLUTION_ACCEPTED",
                                    "RESOLUTION_REJECTED",
                                ];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, enumList);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_NAME_30,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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

                const testFunctions: testFunctionArray = [
                    Actions_Attributes_Tests,
                    Actions_Enums_Tests,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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
        function ISSUE_DESCRIPTION(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function REQUIRED_MESSAGE_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.code",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function REQUIRED_MESSAGE_SHORT_DESC(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.short_desc",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function REQUIRED_MESSAGE_LONG_DESC(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.long_desc",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function REQUIRED_MESSAGE_URL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.additional_desc.url",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function REQUIRED_MESSAGE_CONTENT_TYPE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.additional_desc.content_type",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function REQUIRED_MESSAGE_NAME_23(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.descriptor.name",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_NAME_23**: $.message.issue.descriptor.name must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_MESSAGE_CODE,
                    REQUIRED_MESSAGE_SHORT_DESC,
                    REQUIRED_MESSAGE_LONG_DESC,
                    REQUIRED_MESSAGE_URL,
                    REQUIRED_MESSAGE_CONTENT_TYPE,
                    REQUIRED_MESSAGE_NAME_23,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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
        function ISSUE_ACTIONS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function Actions_Attributes_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_ID_25(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].id",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_CODE_26(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.code",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_SHORT_DESC_27(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.short_desc",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_UPDATED_AT_28(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].updated_at",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }
                        function REQUIRED_MESSAGE_ACTION_BY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].action_by",
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_ID_25,
                            REQUIRED_MESSAGE_CODE_26,
                            REQUIRED_MESSAGE_SHORT_DESC_27,
                            REQUIRED_MESSAGE_UPDATED_AT_28,
                            REQUIRED_MESSAGE_ACTION_BY,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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
                function Actions_Enums_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_NAME_30(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.actions[*].descriptor.name",
                                );
                                const enumList = [
                                    "OPEN",
                                    "CLOSED",
                                    "PROCESSING",
                                    "RESOLVED",
                                    "INFO_REQUESTED",
                                    "INFO_PROVIDED",
                                    "INFO_NOT_AVAILABLE",
                                    "RESOLUTION_PROPOSED",
                                    "RESOLUTION_CASCADED",
                                    "RESOLUTION_ACCEPTED",
                                    "RESOLUTION_REJECTED",
                                ];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, enumList);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_NAME_30,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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

                const testFunctions: testFunctionArray = [
                    Actions_Attributes_Tests,
                    Actions_Enums_Tests,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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
        function ISSUE_REFS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function REQUIRED_MESSAGE_REF_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.issue.refs[*].ref_id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function Refs_Enums_Tests(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_REF_TYPE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.issue.refs[*].ref_type",
                                );
                                const enumList = [
                                    "ORDER",
                                    "ITEM",
                                    "FULFILLMENT",
                                    "TRANSACTION_ID",
                                    "MESSAGE_ID",
                                    "PROVIDER",
                                    "COMPLAINT",
                                    "ACTION",
                                    "PAYMENT",
                                    "CUSTOMER",
                                    "AGENT",
                                ];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, enumList);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload
  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]`,
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [{ valid: valid, code: 200 }, ...subResults];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_REF_TYPE,
                        ];

                        let invalidResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            // .filter(r => !r.valid);
                            invalidResults = [...invalidResults, ...subResult];
                            if (
                                !input.config.runAllValidations &&
                                invalidResults.length > 0
                            ) {
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

                const testFunctions: testFunctionArray = [
                    REQUIRED_MESSAGE_REF_ID,
                    Refs_Enums_Tests,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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

        const testFunctions: testFunctionArray = [
            ON_ISSUE_CONTEXT,
            ON_ISSUE_ISSUE,
            ISSUE_ACTIONS_1,
            ISSUE_DESCRIPTION,
            ISSUE_ACTIONS,
            ISSUE_REFS,
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
