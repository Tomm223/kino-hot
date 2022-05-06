import { useResponsive } from "./useResponsive"


interface ResponsiveLaptop {
  minLapTop: boolean,
  maxMonitor: boolean
}
interface ResponsiveTablet {
  minTablet: boolean,
  maxLaptop: boolean
}
interface ResponsivePhone {
  minPhone: boolean,
  maxTablet: boolean
}
interface themeStyled {
  responsive: {
    responsiveLaptop: ResponsiveLaptop
    responsiveTablet: ResponsiveTablet
    responsivePhone: ResponsivePhone
  }
}



export const useThemeStyled = () => {
  const { minLabTop,
    maxLabTop,
    minTablet,
    maxTablet,
    minMonitor,
    maxMonitor,
    minFon,
    maxFon, } = useResponsive()


  const theme: themeStyled = {
    responsive: {
      responsiveLaptop: {
        minLapTop: minLabTop,
        maxMonitor: maxMonitor
      },
      responsiveTablet: {
        minTablet: minTablet,
        maxLaptop: maxLabTop
      },
      responsivePhone: {
        minPhone: minFon,
        maxTablet: maxTablet
      },
    }


  }

  return theme
}