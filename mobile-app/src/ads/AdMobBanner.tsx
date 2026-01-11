import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';

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

export const AdMobConfig = {
  APP_ID_ANDROID: 'ca-app-pub-9407808674220555~XXXXXXXXXX',
  APP_ID_IOS: 'ca-app-pub-9407808674220555~XXXXXXXXXX',
  BANNER_UNIT_ID_ANDROID: 'ca-app-pub-9407808674220555/XXXXXXXXXX',
  BANNER_UNIT_ID_IOS: 'ca-app-pub-9407808674220555/XXXXXXXXXX',
  INTERSTITIAL_UNIT_ID_ANDROID: 'ca-app-pub-9407808674220555/XXXXXXXXXX',
  INTERSTITIAL_UNIT_ID_IOS: 'ca-app-pub-9407808674220555/XXXXXXXXXX',
  TEST_BANNER_ID: 'ca-app-pub-3940256099942544/6300978111',
  TEST_INTERSTITIAL_ID: 'ca-app-pub-3940256099942544/1033173712',
  TEST_REWARDED_ID: 'ca-app-pub-3940256099942544/5224354917',
};

export function getAdUnitId(type: 'banner' | 'interstitial', testMode = true): string {
  if (testMode) {
    return type === 'banner' ? AdMobConfig.TEST_BANNER_ID : AdMobConfig.TEST_INTERSTITIAL_ID;
  }
  if (Platform.OS === 'android') {
    return type === 'banner' ? AdMobConfig.BANNER_UNIT_ID_ANDROID : AdMobConfig.INTERSTITIAL_UNIT_ID_ANDROID;
  }
  return type === 'banner' ? AdMobConfig.BANNER_UNIT_ID_IOS : AdMobConfig.INTERSTITIAL_UNIT_ID_IOS;
}

export function AdMobBanner({ position, size = 'banner', testMode = true }: AdMobBannerProps) {
  const { colors } = useTheme();
  const adSize = AD_SIZES[size];

  return (
    <View style={[styles.container, styles[position]]}>
      <Text style={[styles.label, { color: colors.textMuted }]}>Advertisement</Text>
      <View
        style={[
          styles.placeholder,
          {
            width: Math.min(adSize.width, 340),
            height: adSize.height,
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.providerText, { color: colors.textSecondary }]}>AdMob</Text>
        <Text style={[styles.sizeText, { color: colors.textMuted }]}>{adSize.label}</Text>
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
    marginVertical: 8,
  },
  label: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  placeholder: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  providerText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sizeText: {
    fontSize: 10,
    marginTop: 4,
  },
  testText: {
    fontSize: 9,
    color: '#f59e0b',
    marginTop: 2,
  },
});
