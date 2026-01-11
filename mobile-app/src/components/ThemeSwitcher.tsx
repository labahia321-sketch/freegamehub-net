import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme, ThemeMode } from '../context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, cycleTheme, colors } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <View style={[styles.icon, { backgroundColor: '#fbbf24' }]}>
            <View style={styles.sunRay} />
          </View>
        );
      case 'attenuated':
        return (
          <View style={[styles.icon, { backgroundColor: '#9ca3af' }]}>
            <View style={[styles.cloudPart, { left: 4 }]} />
            <View style={[styles.cloudPart, { right: 4 }]} />
          </View>
        );
      case 'dark':
        return (
          <View style={[styles.icon, { backgroundColor: '#6366f1' }]}>
            <View style={styles.moonCrescent} />
          </View>
        );
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.surface }]}
      onPress={cycleTheme}
      activeOpacity={0.7}
    >
      {getIcon()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  sunRay: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    top: 8,
    left: 8,
  },
  cloudPart: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    top: 7,
  },
  moonCrescent: {
    position: 'absolute',
    width: 14,
    height: 14,
    backgroundColor: '#1f2937',
    borderRadius: 7,
    top: 2,
    right: 2,
  },
});
