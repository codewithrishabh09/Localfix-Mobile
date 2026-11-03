export const colors = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  primaryLight: "#DBEAFE",

  background: "#F8FAFC",
  surface: "#FFFFFF",
  surfaceMuted: "#F1F5F9",

  text: "#0F172A",
  textSecondary: "#475569",
  textMuted: "#94A3B8",

  border: "#E2E8F0",

  success: "#16A34A",
  successLight: "#DCFCE7",

  warning: "#D97706",
  warningLight: "#FEF3C7",

  danger: "#DC2626",
  dangerLight: "#FEE2E2",

  white: "#FFFFFF",
  black: "#000000",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};

export const typography = {
  display: {
    fontSize: 32,
    fontWeight: "700" as const,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700" as const,
  },

  title: {
    fontSize: 20,
    fontWeight: "600" as const,
  },

  body: {
    fontSize: 16,
    fontWeight: "400" as const,
  },

  bodyMedium: {
    fontSize: 16,
    fontWeight: "500" as const,
  },

  caption: {
    fontSize: 14,
    fontWeight: "400" as const,
  },

  small: {
    fontSize: 12,
    fontWeight: "500" as const,
  },
};

export const shadows = {
  card: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  floating: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
};