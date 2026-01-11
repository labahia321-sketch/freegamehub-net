import { View, Text, StyleSheet } from 'react-native';

type AdPosition = 'top' | 'bottom' | 'inline' | 'sidebar';
type AdSize = 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard';

interface AdMobBannerProps {
  position: AdPosition;
  size?: AdSize;
  testMode?: boolean;
}

const AD_SIZES = {
  banner: { width: 320, height: 50, label: '320x50 Banner' },
  largeBanner: { width: 320, height: 100, label: '320x100 Large Banner' },
  mediumRectangle: { width: 300, height: 250, label: '300x250 Medium Rectangle' },
  fullBanner: { width: 468, height: 60, label: '468x60 Full Banner' },
  leaderboard: { width: 728, height: 90, label: '728x90 Leaderboard' },
};

export function AdMobBanner({ position, size = 'banner', testMode = true }: AdMobBannerProps) {
  const adSize = AD_SIZES[size];
  
  return (
    <View style={[styles.container, styles[position]]}>
      <Text style={styles.label}>Advertisement</Text>
      <View style={[styles.placeholder, { width: adSize.width, height: adSize.height }]}>
        <Text style={styles.providerText}>AdMob Placeholder</Text>
        <Text style={styles.sizeText}>{adSize.label}</Text>
        {testMode && <Text style={styles.testText}>Test Mode</Text>}
      </View>
    </View>
  );
}

export function AdMobInterstitial() {
  return null;
}

export function AdMobRewarded() {
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  top: {
    marginTop: 8,
  },
  bottom: {
    marginBottom: 8,
  },
  inline: {
    marginVertical: 12,
  },
  sidebar: {
    position: 'absolute',
    right: 8,
  },
  label: {
    fontSize: 10,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  placeholder: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 193, 7, 0.4)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  providerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  sizeText: {
    fontSize: 10,
    color: '#888',
    marginTop: 4,
  },
  testText: {
    fontSize: 9,
    color: '#f59e0b',
    marginTop: 2,
  },
});

export const AdMobConfig = {
  BANNER_UNIT_ID: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
  INTERSTITIAL_UNIT_ID: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
  REWARDED_UNIT_ID: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
  TEST_BANNER_ID: 'ca-app-pub-3940256099942544/6300978111',
  TEST_INTERSTITIAL_ID: 'ca-app-pub-3940256099942544/1033173712',
  TEST_REWARDED_ID: 'ca-app-pub-3940256099942544/5224354917',
};
