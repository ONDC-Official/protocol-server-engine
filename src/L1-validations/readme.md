

- **issue** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_MESSAGE_ID**: $.message.issue.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.issue.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
	
	- **condition REQUIRED_MESSAGE_LEVEL**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_LEVEL.1**: $.message.issue.level must be present in the payload
	  - **condition REQUIRED_MESSAGE_LEVEL.2**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
	- **condition REQUIRED_MESSAGE_ID_10**: $.message.issue.actors[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.issue.actors[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.issue.actors[*].type must be in ["INERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.issue.actors[*].info.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_13**: $.message.issue.actors[*].info.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.issue.actors[*].info.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.issue.actors[*].info.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COMPLAINANT_ID**: $.message.issue.complainant_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_23**: $.message.issue.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
	  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_LEVEL**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_LEVEL** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.level must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_REF_TYPE**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_REF_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.refs[*].ref_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.issue.actors[*].type must be in ["INERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.actors[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_NAME**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_NAME** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.actions[*].descriptor.name must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_NAME_6**: every element of $.message.issue.resolutions[*].descriptor.name must be in ["REFUND", "RETURN", "REPLACEMENT", "NO-ACTION", "CANCEL", "NOW-VISIBLE", "PARENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_NAME_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.resolutions[*].descriptor.name must **not** be present in the payload

- **on_issue** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_MESSAGE_ID**: $.message.issue.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.issue.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
	
	- **condition REQUIRED_MESSAGE_LEVEL**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_LEVEL.1**: $.message.issue.level must be present in the payload
	  - **condition REQUIRED_MESSAGE_LEVEL.2**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
	- **condition REQUIRED_MESSAGE_ID_10**: $.message.issue.actors[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.issue.actors[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.issue.actors[*].type must be in ["INERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.issue.actors[*].info.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_13**: $.message.issue.actors[*].info.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.issue.actors[*].info.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.issue.actors[*].info.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COMPLAINANT_ID**: $.message.issue.complainant_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_23**: $.message.issue.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
	  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_LEVEL**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_LEVEL** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.level must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_REF_TYPE**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_REF_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.refs[*].ref_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.issue.actors[*].type must be in ["INERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.actors[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_NAME**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_NAME** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.actions[*].descriptor.name must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_NAME_6**: every element of $.message.issue.resolutions[*].descriptor.name must be in ["REFUND", "RETURN", "REPLACEMENT", "NO-ACTION", "CANCEL", "NOW-VISIBLE", "PARENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_NAME_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.resolutions[*].descriptor.name must **not** be present in the payload