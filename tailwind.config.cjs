/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebar:
          // "url('./src/assets/multiStepForm/images/bg-sidebar-desktop.svg')",
          "url('./src/assets/multiStepForm/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        darkBlue: "#132244",
        p_grey: "#b4b4b4",
        bg_circle: "#8dd6e1",
      },
      textColor: {
        skin: {
          numb_show: withOpacity("--color-txt-show"),
          numb: withOpacity("--color-txt-button"),
          del_reset: withOpacity("--color-txt-del-reset"),
          eq: withOpacity("--color-text-eq"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-bg-base"),
          button: withOpacity("--color-bg-button"),
          show: withOpacity("--color-bg-show"),
          calc: withOpacity("--color-bg-calc"),
          eq: withOpacity("--color-bg-eq"),
          numb_button: withOpacity("--color-number-button"),
          del_button: withOpacity("--color-bg-del-reset"),
        },
      },
      boxShadow: {
        l: "0px 3px 0px 0px rgba(0,0,0,0.2)",
      },
      boxShadowColor: {
        skin: {
          numb: withOpacity("--color-shadow-numb"),
          eq: withOpacity("--color-shadow-eq"),
        },
      },
    },
    fontFamily: {
      Ubuntu: "Ubuntu",
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1066px",
    },
  },
  plugins: [],
};
