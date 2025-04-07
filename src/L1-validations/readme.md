

- **issue** : All the following sub conditions must pass as per the api requirement

	- **ISSUE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_Attributes_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition CONTEXT_REQUIRED_COUNTRY**: $.context.location.country.code must be present in the payload
			
			- **condition CONTEXT_REQUIRED_CITY**: $.context.location.city.code must be present in the payload
			
			- **condition CONTEXT_REG_CITY**: all elements of $.context.location.city.code must follow every regex in ["(\*)|(^std\:[0-9]{2,4}$)"]
			
			- **condition CONTEXT_REQUIRED_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition CONTEXT_REQUIRED_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition CONTEXT_REQUIRED_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_VERSION**: $.context.version must be present in the payload
			
			- **condition CONTEXT_ENUM_VERSION**: $.context.version must be equal to ["2.0.0"]
			
			- **condition CONTEXT_REQUIRED_ACTION**: $.context.action must be present in the payload
			
			- **condition CONTEXT_REQUIRED_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition CONTEXT_REG_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["(^https\://)"]
			
			- **condition CONTEXT_REQUIRED_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition CONTEXT_REQUIRED_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["issue"] must **not** be equal to ["issue"]
			
			- **condition CONTEXT_REQUIRED_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition CONTEXT_REQUIRED_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["issue"] must **not** be equal to ["issue"]
			
			- **condition CONTEXT_REG_BPP_URI**: all elements of $.context.bpp_uri must follow every regex in ["(^https\://)"]
			
				> Note: **Condition CONTEXT_REG_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["issue"] must **not** be equal to ["issue"]
			
			- **condition CONTEXT_REQUIRED_TTL**: $.context.ttl must be present in the payload
			
			- **condition CONTEXT_REG_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?!$)((\d+Y)|(\d+\.\d+Y$))?((\d+M)|(\d+\.\d+M$))?((\d+W)|(\d+\.\d+W$))?((\d+D)|(\d+\.\d+D$))?(T(?=\d)((\d+H)|(\d+\.\d+H$))?((\d+M)|(\d+\.\d+M$))?(\d+(\.\d+)?S)?)??$"]
		
		- **Context_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_context_location_country_code**: every element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_ENUM_context_action**: every element of $.context.action must be in ["issue"]
	
	- **ISSUE_ISSUE** : All the following sub conditions must pass as per the api requirement
	
		- **ISSUE_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ISSUE_ID**: $.message.issue.id must be present in the payload
			
			- **condition REQUIRED_ISSUE_STATUS**: $.message.issue.status must be present in the payload
			
			- **condition REQUIRED_MESSAGE_LEVEL**: $.message.issue.level must be present in the payload
			
			- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload
			
			- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload
			
			- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_COMPLAINANT_ID**: $.message.issue.complainant_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload
		
		- **ISSUE_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition Required_message_enum**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
			
			- **condition REQUIRED_MESSAGE_LEVEL**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	- **ISSUE_ACTORS** : All the following sub conditions must pass as per the api requirement
	
		- **Actors_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.issue.actors[*].type must be present in the payload
			  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.issue.actors[*].type must be in ["INERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO"]
		
		- **Actors_Attribute_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_NAME**: $.message.issue.actors[*].info.person.name must be present in the payload
			
			- **condition REQUIRED_MESSAGE_NAME_13**: $.message.issue.actors[*].info.person.name must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PHONE**: $.message.issue.actors[*].info.contact.phone must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ID_10**: $.message.issue.actors[*].id must be present in the payload
	
	- **ISSUE_DESCRIPTION** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload
		
		- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload
		
		- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload
		
		- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload
		
		- **condition REQUIRED_MESSAGE_NAME_23**: $.message.issue.descriptor.name must be present in the payload
	
	- **ISSUE_ACTIONS** : All the following sub conditions must pass as per the api requirement
	
		- **Actions_Attributes_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload
			
			- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload
		
		- **Actions_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
			  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
	- **ISSUE_REFS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload
		
		- **Refs_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload
			  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]

- **on_issue** : All the following sub conditions must pass as per the api requirement

	- **ON_ISSUE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_Attributes_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition CONTEXT_REQUIRED_COUNTRY**: $.context.location.country.code must be present in the payload
			
			- **condition CONTEXT_REQUIRED_CITY**: $.context.location.city.code must be present in the payload
			
			- **condition CONTEXT_REG_CITY**: all elements of $.context.location.city.code must follow every regex in ["(\*)|(^std\:[0-9]{2,4}$)"]
			
			- **condition CONTEXT_REQUIRED_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition CONTEXT_REQUIRED_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition CONTEXT_REQUIRED_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition CONTEXT_REQUIRED_VERSION**: $.context.version must be present in the payload
			
			- **condition CONTEXT_ENUM_VERSION**: $.context.version must be equal to ["2.0.0"]
			
			- **condition CONTEXT_REQUIRED_ACTION**: $.context.action must be present in the payload
			
			- **condition CONTEXT_REQUIRED_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition CONTEXT_REG_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["(^https\://)"]
			
			- **condition CONTEXT_REQUIRED_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition CONTEXT_REQUIRED_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]
			
			- **condition CONTEXT_REQUIRED_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition CONTEXT_REQUIRED_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]
			
			- **condition CONTEXT_REG_BPP_URI**: all elements of $.context.bpp_uri must follow every regex in ["(^https\://)"]
			
				> Note: **Condition CONTEXT_REG_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_issue"] must **not** be equal to ["on_issue"]
			
			- **condition CONTEXT_REQUIRED_TTL**: $.context.ttl must be present in the payload
			
			- **condition CONTEXT_REG_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?!$)((\d+Y)|(\d+\.\d+Y$))?((\d+M)|(\d+\.\d+M$))?((\d+W)|(\d+\.\d+W$))?((\d+D)|(\d+\.\d+D$))?(T(?=\d)((\d+H)|(\d+\.\d+H$))?((\d+M)|(\d+\.\d+M$))?(\d+(\.\d+)?S)?)??$"]
		
		- **Context_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_context_location_country_code**: every element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_ENUM_context_action**: every element of $.context.action must be in ["issue"]
	
	- **ON_ISSUE_ISSUE** : All the following sub conditions must pass as per the api requirement
	
		- **ISSUE_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ISSUE_ID**: $.message.issue.id must be present in the payload
			
			- **condition REQUIRED_ISSUE_STATUS**: $.message.issue.status must be present in the payload
			
			- **condition REQUIRED_MESSAGE_LEVEL**: $.message.issue.level must be present in the payload
			
			- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload
			
			- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload
			
			- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_COMPLAINANT_ID**: $.message.issue.complainant_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload
		
		- **ISSUE_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition Actions_Enums_Tests_1**: every element of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED"]
			
			- **condition REQUIRED_MESSAGE_LEVEL**: every element of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	- **ISSUE_ACTIONS_1** : All the following sub conditions must pass as per the api requirement
	
		- **Actions_Attributes_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload
			
			- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload
		
		- **Actions_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
			  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
	- **ISSUE_DESCRIPTION** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload
		
		- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload
		
		- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload
		
		- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload
		
		- **condition REQUIRED_MESSAGE_NAME_23**: $.message.issue.descriptor.name must be present in the payload
	
	- **ISSUE_ACTIONS** : All the following sub conditions must pass as per the api requirement
	
		- **Actions_Attributes_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload
			
			- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload
		
		- **Actions_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_NAME_30**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_NAME_30.1**: $.message.issue.actions[*].descriptor.name must be present in the payload
			  - **condition REQUIRED_MESSAGE_NAME_30.2**: every element of $.message.issue.actions[*].descriptor.name must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_REQUESTED", "INFO_PROVIDED", "INFO_NOT_AVAILABLE", "RESOLUTION_PROPOSED", "RESOLUTION_CASCADED", "RESOLUTION_ACCEPTED", "RESOLUTION_REJECTED"]
	
	- **ISSUE_REFS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload
		
		- **Refs_Enums_Tests** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:
			
			  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload
			  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]