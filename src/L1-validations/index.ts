import normalizeKeys from "./utils/json-normalizer";
import issue from "./api-tests/issue";
import on_issue from "./api-tests/on_issue";

export function performL1validations(
    action: string,
    payload: any,
    allErrors = false,
    externalData: any = {},
) {
    const normalizedPayload = normalizeKeys(payload);
    externalData._SELF = normalizedPayload;
    switch (action) {
        case "issue":
            return issue({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_issue":
            return on_issue({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        default:
            throw new Error("Action not found");
    }
}
