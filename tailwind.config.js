/** @type {import('tailwindcss').Config} */
export default {
  content : ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
      extend:{
          fontFamily:{
              sans : ["Inter", "sans-serif"]
          },
          fontWeight:{
              thin : 100,
              light : 300,
              regular: 400,
              semiBold : 500,
              bold : 600,
              black  : 900
          },
          colors: {
              licorice : "#220C10",
              white : "#FFFFF0"
          },
          fontSize:{
            "10xl" : "16.5rem"
          }
      },
  }
}