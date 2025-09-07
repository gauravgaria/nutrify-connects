
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e071b8530c17477f9e288353121aa4ac',
  appName: 'nutrify-connect',
  webDir: 'dist',
  server: {
    url: 'https://e071b853-0c17-477f-9e28-8353121aa4ac.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
    }
  }
};

export default config;
