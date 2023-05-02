export const containerWidth =  { xl: 1238, lg: 948, md: 800, sms: 650, sm: 450, xs: 300}

export const gridCardSize = {
  xl: (containerWidth.xl - 64) / 4,
  lg: (containerWidth.lg - 64) / 4,
  md: (containerWidth.md - 48) / 3,
  sms: (containerWidth.sms - 32) / 2,
  sm: (containerWidth.sm - 32) / 2,
  xs: containerWidth.xs - 16,
}

export const categoryCardSize = {
  xl: (containerWidth.xl - 7*16) / 8,
  lg: (containerWidth.lg - 5*16) / 6,
  md: (containerWidth.md - 3*16) / 4,
  sms: (containerWidth.sms - 2*16) / 3,
  sm: (containerWidth.sm - 2*16) / 3,
  xs: (containerWidth.xs - 16) / 2,
}



