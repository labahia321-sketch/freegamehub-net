# FreeGameHub Mobile App

Aplicación móvil React Native / Expo para FreeGameHub - Portal de juegos online gratuitos.

## Características

- **Carrusel de juegos destacados** - Diseño idéntico a la web
- **Categorías de juegos** - Action, Puzzle, Racing, Sports, Adventure
- **Tarjetas de juegos** - Con thumbnails, ratings y botón Play
- **WebView para juegos** - Compatible con iframes de SoftGames
- **Sistema de temas** - Light (default), Attenuated, Dark
- **Google AdMob** - Banners e intersticiales
- **React Navigation** - Navegación fluida entre pantallas

## Estructura del Proyecto

```
mobile-app/
├── App.tsx                      # Entrada principal
├── app.json                     # Configuración Expo
├── eas.json                     # Configuración EAS Build
├── package.json                 # Dependencias
├── tsconfig.json               # TypeScript config
├── assets/                      # Iconos y splash
└── src/
    ├── ads/
    │   └── AdMobBanner.tsx     # Componentes de publicidad
    ├── components/
    │   ├── CategorySection.tsx  # Sección de categoría
    │   ├── FeaturedCarousel.tsx # Carrusel principal
    │   ├── GameCard.tsx         # Tarjeta de juego
    │   └── ThemeSwitcher.tsx    # Botón cambio tema
    ├── context/
    │   └── ThemeContext.tsx     # Proveedor de temas
    ├── data/
    │   └── games.ts             # Datos estáticos de juegos
    ├── navigation/
    │   └── AppNavigator.tsx     # Stack Navigator
    └── screens/
        ├── CategoryScreen.tsx   # Pantalla categoría
        ├── GameScreen.tsx       # Pantalla juego + WebView
        └── HomeScreen.tsx       # Pantalla principal
```

## Requisitos Previos

### Para desarrollo local:
- Node.js 18+
- npm o yarn
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`

### Para generar APK (Android):
- Cuenta Expo (gratis): https://expo.dev/signup
- EAS Build (incluido en plan gratuito)

### Para iOS:
- Mac con macOS 12+
- Xcode 14+
- Cuenta Apple Developer ($99/año)
- iOS Simulator o dispositivo físico

## Instalación

```bash
cd mobile-app
npm install
```

## Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm start

# O específicamente para cada plataforma:
npm run android    # Android
npm run ios        # iOS (solo Mac)
```

## Generar APK para Android

### Opción 1: EAS Build (Recomendado - Sin necesidad de Android Studio)

```bash
# 1. Iniciar sesión en Expo
eas login

# 2. Configurar proyecto (solo primera vez)
eas build:configure

# 3. Generar APK
npm run build:apk
# O directamente:
eas build --platform android --profile apk
```

El build tarda ~15-20 minutos. Al terminar, recibirás un link para descargar el APK.

### Opción 2: Build local con Android Studio

```bash
# 1. Exponer el proyecto nativo
npx expo prebuild --platform android

# 2. Abrir en Android Studio
# Abre la carpeta `android/` generada

# 3. Build > Generate Signed Bundle/APK > APK
```

## Compilar para iOS

### Requisitos:
1. **Mac** con macOS Monterey (12) o superior
2. **Xcode 14+** instalado desde App Store
3. **Cuenta Apple Developer** ($99/año): https://developer.apple.com/programs/
4. **Certificados y Provisioning Profiles** configurados

### Pasos para iOS:

#### Opción 1: EAS Build (Recomendado)

```bash
# 1. Iniciar sesión
eas login

# 2. Build para iOS
eas build --platform ios --profile preview
```

Esto genera un archivo `.ipa` que puedes instalar en dispositivos de prueba.

#### Opción 2: Build local con Xcode (Mac requerido)

```bash
# 1. Instalar CocoaPods (solo primera vez)
sudo gem install cocoapods

# 2. Generar proyecto nativo
npx expo prebuild --platform ios

# 3. Instalar pods
cd ios && pod install && cd ..

# 4. Abrir en Xcode
open ios/FreeGameHub.xcworkspace

# 5. En Xcode:
#    - Selecciona tu Team en Signing & Capabilities
#    - Product > Archive para generar IPA
#    - Distribute App para subir a App Store
```

### Publicar en App Store:

1. **App Store Connect**: https://appstoreconnect.apple.com
2. Crear nueva app con Bundle ID: `com.freegamehub.app`
3. Completar información de la app
4. Subir build desde Xcode o Transporter
5. Enviar para revisión

## Configuración de AdMob

### 1. Crear cuenta AdMob
https://admob.google.com/

### 2. Crear App y Ad Units
- App ID Android: `ca-app-pub-9407808674220555~XXXXXXXXXX`
- App ID iOS: `ca-app-pub-9407808674220555~XXXXXXXXXX`
- Banner Unit ID: `ca-app-pub-9407808674220555/XXXXXXXXXX`
- Interstitial Unit ID: `ca-app-pub-9407808674220555/XXXXXXXXXX`

### 3. Actualizar configuración
Edita estos archivos con tus IDs reales:

**app.json:**
```json
"ios": {
  "config": {
    "googleMobileAdsAppId": "ca-app-pub-9407808674220555~TU_APP_ID"
  }
},
"android": {
  "config": {
    "googleMobileAdsAppId": "ca-app-pub-9407808674220555~TU_APP_ID"
  }
}
```

**src/ads/AdMobBanner.tsx:**
```typescript
export const AdMobConfig = {
  APP_ID_ANDROID: 'ca-app-pub-9407808674220555~TU_APP_ID',
  BANNER_UNIT_ID_ANDROID: 'ca-app-pub-9407808674220555/TU_BANNER_ID',
  // ...
};
```

## Integración con SoftGames

Cuando recibas los iframes white-label de SoftGames:

1. Actualiza `src/data/games.ts` con las URLs reales de los embeds
2. El componente `GameScreen.tsx` ya tiene WebView configurado
3. Los iframes se cargarán automáticamente en el WebView

```typescript
// Ejemplo de actualización en games.ts
{
  id: "game-1",
  title: "Ninja Warrior",
  embedUrl: "https://softgames.com/embed/ninja-warrior?partner=freegamehub",
  // ...
}
```

## Notas sobre Ezoic

Ezoic no tiene SDK nativo para React Native. Alternativas:

1. **Mediation con AdMob**: Configura Ezoic como fuente de mediation en AdMob
2. **WebView Ads**: Muestra anuncios Ezoic en un WebView embebido
3. **Placeholder**: Los componentes actuales tienen comentarios para futura integración

```typescript
// TODO: Integración Ezoic - usar AdMob mediation o WebView
// Contactar support@ezoic.com para SDK móvil
```

## Instalar APK en Android

1. Descarga el APK generado
2. En el dispositivo Android:
   - Configuración > Seguridad > Fuentes desconocidas (activar)
   - O permite la instalación desde tu navegador/gestor de archivos
3. Abre el archivo APK e instala
4. ¡Listo para jugar!

## Ad Placements (Ubicación de Anuncios)

- **Home Screen**: Banner superior, rectangle entre categorías, banner inferior
- **Category Screen**: Banner superior, banners entre juegos, banner inferior
- **Game Screen**: Banner superior, rectangle lateral, banner en recomendaciones

## Testing con IDs de Prueba

Usa estos IDs durante desarrollo:
- Banner: `ca-app-pub-3940256099942544/6300978111`
- Interstitial: `ca-app-pub-3940256099942544/1033173712`
- Rewarded: `ca-app-pub-3940256099942544/5224354917`

## Troubleshooting

### Error: "expo-cli not found"
```bash
npm install -g expo-cli eas-cli
```

### Error: "Build failed" en EAS
- Verifica que `app.json` tenga todos los campos requeridos
- Revisa los logs del build en https://expo.dev

### WebView no carga juegos
- Verifica que las URLs de embed sean HTTPS
- Algunos juegos pueden requerir configuración adicional de CORS

## Soporte

Para problemas técnicos, revisa:
- Expo docs: https://docs.expo.dev
- React Navigation: https://reactnavigation.org
- AdMob React Native: https://docs.page/invertase/react-native-google-mobile-ads
