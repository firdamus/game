import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const triggerHaptic = async (style: ImpactStyle = ImpactStyle.Light) => {
  try {
    await Haptics.impact({ style });
  } catch {
    // Graceful fallback on web or unsupported platforms
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(20);
      } catch {
        // silent
      }
    }
  }
};
