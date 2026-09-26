import { appConfig } from "@/constants/config";
import { portfolioStrings } from "@/constants/strings";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactServiceResult {
  success: boolean;
  code: string;
  message: string;
}

export async function submitContactMessage(payload: ContactPayload): Promise<ContactServiceResult> {
  const trimmedName = payload.name.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedMessage = payload.message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return {
      success: false,
      code: "VALIDATION_ERROR",
      message: portfolioStrings.validationRequired,
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return {
      success: false,
      code: "INVALID_EMAIL",
      message: portfolioStrings.validationEmail,
    };
  }

  const endpoint = appConfig.contactFormUrl || "https://formspree.io/f/placeholder";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        code: "OK",
        message: portfolioStrings.successMessage,
      };
    }

    return {
      success: false,
      code: "SUBMIT_FAILED",
      message: portfolioStrings.errorMessage,
    };
  } catch {
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: portfolioStrings.networkError,
    };
  }
}
