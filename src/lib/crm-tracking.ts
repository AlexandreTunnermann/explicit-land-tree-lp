// PLACEHOLDER for the CRM tracking helper.
// In AI Studio, "Connect forms to my CRM" generates this file with its own trackingId, locationId and projectId.
// That connection has NOT been run for this project, so this helper sends nothing.
// Replace this file with the generated helper (keep the function name, or update the one call in submit-lead.ts).

export type CrmSubmission = {
  formId: string;
  formName: string;
  formData: Record<string, string>;
  customFields: Record<string, string>;
};

export const CRM_CONNECTED = false;

export async function trackCrmFormSubmission(_submission: CrmSubmission): Promise<void> {
  // No CRM connection yet: intentionally a no-op.
  void _submission;
}
