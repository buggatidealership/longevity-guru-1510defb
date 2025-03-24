
/**
 * Type definitions for Cookiebot
 */

interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface Cookiebot {
  consent: CookiebotConsent;
  consentLevel: string[];
  show(): void;
  hide(): void;
  renew(): void;
  withdraw(): void;
  consented: boolean;
  declined: boolean;
  hasResponse: boolean;
}

declare global {
  interface Window {
    Cookiebot?: Cookiebot;
  }
}

export {};
