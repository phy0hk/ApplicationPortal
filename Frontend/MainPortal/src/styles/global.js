export let currentTheme;
export async function getCurrentThemeState(){
    try {
        currentTheme = await localStorage.getItem('theme');
    } catch (error) {
        console.log(error)
    }
    urrentTheme==="dark" ? "text-zinc-500":"text-zinc-50"
}
export const background = currentTheme==="dark" ? "text-zinc-500":"text-zinc-50"