
// Type definitions for Capacitor integration
interface Window {
  Capacitor?: {
    isNativePlatform: () => boolean;
    getPlatform: () => string;
  };
}
