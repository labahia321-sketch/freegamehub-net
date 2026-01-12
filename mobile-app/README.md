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
│   ├── icon.png                # Icono 512x512 (naranja + joystick)
│   ├── adaptive-icon.png       # Icono adaptativo Android
│   └── splash.png              # Splash screen
├── play-store-assets/          # Assets para Play Store
│   ├── app_icon_512.png        # Icono 512x512
│   ├── feature_graphic.png     # Feature graphic 1024x500
│   ├── screenshot_1_home.png   # Screenshot Home
│   ├── screenshot_2_action.png # Screenshot Action
│   ├── screenshot_3_puzzle.png # Screenshot Puzzle
│   ├── screenshot_4_game_detail.png # Screenshot Game Detail
│   ├── screenshot_5_themes.png # Screenshot Themes
│   └── screenshot_6_light_theme.png # Screenshot Light Theme
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

## Play Store Assets (Listos para usar)

Todos los assets para Google Play Store están en `play-store-assets/`:

| Asset | Dimensiones | Archivo |
|-------|-------------|---------|
| App Icon | 512x512 px | `app_icon_512.png` |
| Feature Graphic | 1024x500 px | `feature_graphic.png` |
| Screenshot 1 | 1024x576 px | `screenshot_1_home.png` |
| Screenshot 2 | 1024x576 px | `screenshot_2_action.png` |
| Screenshot 3 | 1024x576 px | `screenshot_3_puzzle.png` |
| Screenshot 4 | 1024x576 px | `screenshot_4_game_detail.png` |
| Screenshot 5 | 1024x576 px | `screenshot_5_themes.png` |
| Screenshot 6 | 1024x576 px | `screenshot_6_light_theme.png` |

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

---

## 🤖 Generar APK/AAB para Android (EAS Build)

### Paso 1: Instalar EAS CLI
```bash
npm install -g eas-cli
```

### Paso 2: Iniciar sesión en Expo
```bash
eas login
# Ingresa tu email y contraseña de Expo
# Si no tienes cuenta, créala en: https://expo.dev/signup
```

### Paso 3: Navegar al proyecto
```bash
cd mobile-app
npm install
```

### Paso 4: Configurar EAS (solo primera vez)
```bash
eas build:configure
# Selecciona "All" cuando pregunte por las plataformas
```

### Paso 5: Generar APK (para testing/distribución directa)
```bash
eas build --platform android --profile apk
```

**⏱️ Tiempo estimado:** 15-20 minutos

Al finalizar, recibirás un **link de descarga** del APK. Ejemplo:
```
Build complete!
✔ Build finished
🍀 APK: https://expo.dev/artifacts/eas/XXXXX.apk
```

### Paso 6: Generar AAB (para Google Play Store)
```bash
eas build --platform android --profile production
```

El AAB es el formato requerido por Google Play Store para publicar apps.

### Comandos resumidos:
```bash
# APK para testing:
eas build --platform android --profile apk

# AAB para Play Store:
eas build --platform android --profile production

# Ver builds anteriores:
eas build:list
```

---

## 🍎 Guía Completa para iOS

### Requisitos Obligatorios

| Requisito | Detalle |
|-----------|---------|
| **Mac** | macOS Monterey (12) o superior |
| **Xcode** | Versión 14+ (descargar desde App Store) |
| **Apple Developer Account** | $99 USD/año - [Registrarse aquí](https://developer.apple.com/programs/) |
| **Node.js** | Versión 18+ |
| **EAS CLI** | `npm install -g eas-cli` |

### Opción A: EAS Build (Recomendado - Sin necesidad de Mac para el build)

EAS puede compilar tu app iOS en la nube, pero **necesitas una cuenta Apple Developer** para firmar la app.

#### Paso 1: Preparar certificados Apple
1. Accede a [Apple Developer Portal](https://developer.apple.com/account)
2. Ve a **Certificates, Identifiers & Profiles**
3. Crea un **App ID** con Bundle ID: `com.freegamehub.app`
4. Genera un **Distribution Certificate** (o deja que EAS lo haga automáticamente)

#### Paso 2: Configurar EAS para iOS
```bash
cd mobile-app
eas login
eas build:configure
```

#### Paso 3: Build para iOS
```bash
# Para testing (dispositivos registrados):
eas build --platform ios --profile preview

# Para App Store:
eas build --platform ios --profile production
```

EAS te pedirá credenciales de Apple la primera vez. Puedes:
- Dejar que EAS gestione los certificados automáticamente
- O usar certificados existentes

#### Paso 4: Instalar en dispositivo de prueba
```bash
# Registrar dispositivos para testing:
eas device:create

# El archivo .ipa se descarga y puedes instalarlo via:
# - Xcode > Devices & Simulators
# - Apple Configurator 2
# - TestFlight (si subes a App Store Connect)
```

### Opción B: Build Local con Xcode (Mac obligatorio)

#### Paso 1: Instalar dependencias
```bash
# Instalar CocoaPods
sudo gem install cocoapods

# En el directorio mobile-app:
cd mobile-app
npm install
```

#### Paso 2: Generar proyecto nativo iOS
```bash
npx expo prebuild --platform ios
```

Esto crea la carpeta `ios/` con el proyecto Xcode.

#### Paso 3: Instalar pods
```bash
cd ios
pod install
cd ..
```

#### Paso 4: Abrir en Xcode
```bash
open ios/FreeGameHub.xcworkspace
```

**Importante:** Abre el archivo `.xcworkspace`, NO el `.xcodeproj`

#### Paso 5: Configurar Signing en Xcode
1. Selecciona el proyecto **FreeGameHub** en el navegador
2. Ve a la pestaña **Signing & Capabilities**
3. Selecciona tu **Team** (tu cuenta Apple Developer)
4. Xcode generará automáticamente el Provisioning Profile

#### Paso 6: Compilar para dispositivo
1. Conecta un iPhone/iPad vía USB
2. Selecciona tu dispositivo en la barra superior
3. Presiona **Cmd + R** o haz clic en ▶️ (Play)
4. La primera vez, en el iPhone ve a:
   - Configuración > General > VPN y gestión de dispositivos
   - Confía en tu certificado de desarrollador

#### Paso 7: Crear Archive para App Store
1. En Xcode: **Product > Archive**
2. Espera a que compile (~5-10 min)
3. Se abre el **Organizer**
4. Clic en **Distribute App**
5. Selecciona **App Store Connect**
6. Sigue el asistente para subir

### Publicar en App Store

#### 1. App Store Connect
1. Ve a [App Store Connect](https://appstoreconnect.apple.com)
2. Clic en **My Apps** > **+** > **New App**
3. Completa:
   - **Platform:** iOS
   - **Name:** FreeGameHub
   - **Primary Language:** English (o Spanish)
   - **Bundle ID:** com.freegamehub.app
   - **SKU:** freegamehub-ios-001

#### 2. Información de la App
Completa estas secciones:
- **App Information:** Nombre, categoría (Games), subcategoría
- **Pricing:** Gratis
- **Privacy Policy URL:** https://freegamehub.net/privacy
- **App Privacy:** Declarar datos recopilados (Analytics, Advertising)

#### 3. Screenshots para iOS
Necesitas screenshots para cada tamaño de pantalla:
- iPhone 6.7" (1290 x 2796 px) - iPhone 15 Pro Max
- iPhone 6.5" (1284 x 2778 px) - iPhone 14 Plus
- iPhone 5.5" (1242 x 2208 px) - iPhone 8 Plus
- iPad Pro 12.9" (2048 x 2732 px)

#### 4. Subir Build
Después de hacer Archive en Xcode:
1. El build aparece en **TestFlight** automáticamente
2. Espera ~30 min para el procesamiento
3. Selecciona el build en **App Store** > **iOS App** > **Build**

#### 5. Enviar para Revisión
1. Completa toda la información requerida
2. Clic en **Submit for Review**
3. Tiempo de revisión: 1-7 días (típicamente 24-48 horas)

### Checklist Pre-Publicación iOS

- [ ] Bundle ID configurado: `com.freegamehub.app`
- [ ] Versión y Build Number actualizados
- [ ] Icono de app (1024x1024 sin transparencia)
- [ ] Screenshots para todos los tamaños
- [ ] Privacy Policy URL válida
- [ ] Declaración de datos en App Privacy
- [ ] AdMob App ID configurado
- [ ] Tested en dispositivo físico

---

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

### Error en iOS: "Signing for FreeGameHub requires a development team"
- Abre Xcode > Selecciona proyecto > Signing & Capabilities
- Selecciona tu Team de Apple Developer

### Error en iOS: "No provisioning profile"
- Deja que Xcode lo genere automáticamente
- O créalo manualmente en Apple Developer Portal

## Soporte

Para problemas técnicos, revisa:
- Expo docs: https://docs.expo.dev
- React Navigation: https://reactnavigation.org
- AdMob React Native: https://docs.page/invertase/react-native-google-mobile-ads
- EAS Build: https://docs.expo.dev/build/introduction/
