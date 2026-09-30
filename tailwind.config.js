/** Colores y fuentes de la marca (antes vivían en el <head>). */
module.exports = Object.assign({ content: ['./index.html'] }, {
    theme: {
      extend: {
        colors: {
          brandBg:        '#FBF6F1',   /* crema base */
          brandBlush:     '#F6EFE6',   /* blanco roto cálido */
          brandPink:      '#F3D7D2',   /* rosado muy pálido */
          brandSky:       '#C8DCE7',   /* azul pálido de acento */
          brandInk:       '#3D2B1F',
          brandGold:      '#B08840',
          brandDeepGold:  '#8B6B30',
          brandLightMuted:'#FAF3EC',
        },
        fontFamily: {
          // Los nombres de clase (font-fabfelt / font-rounded) se conservan
          // sin cambios a propósito: así este cambio de tipografía no obliga
          // a tocar ninguna de las clases ya usadas en el HTML o en el JS.
          fabfelt:  ['"Cormorant Garamond"', 'serif'],
          rounded:  ['Manrope', 'sans-serif'],
        },
      }
    }
  });
