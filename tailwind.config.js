module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio:{
        'svgTransitions': '960/150',
      },
      backgroundImage:{
        'topSVG': 'url(../public/topSVG.svg)',
        'bottomSVG': 'url(../public/bottomSVG.svg)'
      },
      animation:{
        bgAnim: "bgKf 8s infinite",
        squareBgAnim: "sqBgKf 8s infinite",
      },
      keyframes:{
        bgKf:{
          "0%":{
            transform: "translate(0px,0px) scale(0.8)"
          },
          "25%":{
            transform: "translate(-100%,90px) scale(1)"
          },
          "50%":{
            transform: "translate(0px,0px) scale(1.5)"
          },
          "75%":{
            transform: "translate(100%,-60px) scale(1)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(0.8)"
          }
        },
        sqBgKf:{
          "0%":{
            transform: "translate(0px,0px) scale(0.8) rotate(0deg)"
          },
          "25%":{
            transform: "translate(-180px,90px) scale(1) rotate(90deg)"
          },
          "50%":{
            transform: "translate(0px,0px) scale(1.5) rotate(180deg)"
          },
          "75%":{
            transform: "translate(210,-60px) scale(1) rotate(270deg)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(0.8) rotate(360deg)"
          }
        },
      },
      fontFamily:{
        workSansFont: "'Work Sans', sans-serif"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
