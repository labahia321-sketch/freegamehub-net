# FreeGameHub Mobile App

React Native mobile app for FreeGameHub with AdMob integration.

## Setup

1. Install dependencies:
```bash
cd mobile-app
npm install
```

2. Configure AdMob:
   - Create an AdMob account at https://admob.google.com
   - Create app entries for iOS and Android
   - Replace placeholder IDs in `app.json` and `src/ads/AdMobBanner.tsx`

3. Run the app:
```bash
npm start
# or
npm run android
npm run ios
```

## AdMob Configuration

Replace these placeholder IDs with your actual AdMob IDs:

### In `app.json`:
- `ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY` - Your AdMob App ID

### In `src/ads/AdMobBanner.tsx`:
- `BANNER_UNIT_ID` - Banner ad unit ID
- `INTERSTITIAL_UNIT_ID` - Interstitial ad unit ID
- `REWARDED_UNIT_ID` - Rewarded ad unit ID

## Ad Placements

- **Home Screen**: Top banner, inline medium rectangle between games, bottom banner
- **Game Screen**: Top banner, sidebar medium rectangle, bottom banner in recommendations

## Testing

Use test IDs during development:
- Banner: `ca-app-pub-3940256099942544/6300978111`
- Interstitial: `ca-app-pub-3940256099942544/1033173712`
- Rewarded: `ca-app-pub-3940256099942544/5224354917`

## Build for Production

```bash
# Android
npx expo build:android

# iOS
npx expo build:ios
```

## Firebase Hosting (Web Build)

The web version is built with Vite and deployed to Firebase Hosting:

```bash
# From project root
npm run build
firebase deploy
```
