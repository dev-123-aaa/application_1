const WEBHOOK_URL =
  "https://apkmap.app.n8n.cloud/webhook-test/961b7f38-73c4-4503-be2e-7333190dafa2";

export interface StartProductionPayload {
  title: string;
  duration: string;
}

export interface StartProductionResponse {
  success: boolean;
  error?: string;
}

export async function startProduction(
  payload: StartProductionPayload
): Promise<StartProductionResponse> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to start production:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to start production",
    };
  }
}

export function formatDuration(hours: number, minutes: number): string {
  return `${hours}h ${minutes}m`;
}

export function generateProjectId(): string {
  return `vid_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`;
}
