import issue from "./api-tests/issue";
import on_issue from "./api-tests/on_issue";

export function performL1Validations(
    action: string,
    payload: any,
    allErrors = false,
    externalData = {},
) {
    switch (action) {
        case "issue":
            return issue({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_issue":
            return on_issue({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        default:
            throw new Error("Action not found");
    }
}
