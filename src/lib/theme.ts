// Runs before paint so there is no light/dark flash.
export const themeScript = `try{var t=localStorage.getItem("th.theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;
