
const styles = {
    // borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    // borderS: "border-solid border-2 border-slate-100 rounded-lg",
    // anal: " dark ml-28 w-8/12 dark:bg-slate-800 dark:text-white ",
    // navHead: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 text-slate-400",
    // navEnd: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 ",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
    
    flexSS: "flex justify-start items-center",
    flexBB: "flex justify-center items-start",
    
    logo: "w-12 md:w-14 h-auto",
    profile: "w-10 md:w-12 h-10 md:h-12 rounded-full mr-2",

    icon: "text-white text-2xl xl:text-3xl mr-2 ",
    icon2: "text-white text-xl md:text-2xl mr-2 ",
    icon3: "text-rose-2 text-2xl xl:text-3xl mr-2 ",
    icon4: "text-rose-2 text-xl mx-2 md:mx-4 ",
    icon5: "text-rose-1 text-2xl xl:text-3xl mr-2 ",
    icon6: "text-rose-1 text-xl mx-2 md:mx-4 ",
    
    search_text: "bg-dark-3 placeholder-beige font-kulim rounded-lg h-10 outline-none w-full p-1",
    search_text1: "bg-dark-3 placeholder-beige font-kulim rounded-lg h-8 text-sm outline-none w-full px-3 flex sm:hidden mr-4 mt-2",
    doubts_text: "bg-dark-3 placeholder-beige font-kulim rounded-lg text-sm md:text-lg h-10 md:h-12 p-4 outline-none w-full ",

    skills: "w-full my-1 text-center text-xs p-2 bg-dark-3 rounded-lg",
    likes_num: "text-sm md:text-lg text-beige mx-1 md:mx-2",
    
    right_side: "float-right bottom-20 top-20 right-0 fixed bg-dark-1 h-screen w-1/5 hidden md:flex",
    left_side: "float-left bottom-20 top-20 left-0 fixed h-screen w-1/5 py-6 hidden md:flex",

    hero: "flex-col bg-dark-2 h-auto w-full",
    

    divVerL: "border-x-2 border-biege h-screen p-4",
    divVerR: "border-x-2 border-biege h-screen p-4",
    divHor: "border-b-2 border-beige ",
};
  
export const layout = {
    left_bar: ` ${styles.flexSS} bg-dark-1 flex-col ${styles.left_side}`,
    right_bar: `${styles.right_side} ${styles.flexSS} flex-col `,

    footer: `${styles.flexBetween} bg-dark-1 h-20 w-full bottom-0 fixed ${styles.divHor} `,
    navbar: `${styles.flexCenter} flex-col bg-dark-1 h-auto sm:h-20 w-full py-4 sm:py-0 fixed pl-6 pr-2 md:px-8`,
    navtop: `${styles.flexBetween} w-full `,
    mobilenav: `${styles.flexBetween} flex md:hidden bg-dark-3 h-10 fixed bottom-0 w-full px-4`,

    hero: `${styles.flexSS} ${styles.hero} flex-col px-4 md:px-0`,
    ask: `${styles.flexBetween} rounded-xl bg-dark-1 w-full md:w-7/12 h-16 sm:h-20 mt-[94px] mb-2 p-2 sm:p-4 `,
    ans: `${styles.flexBetween} flex-col rounded-xl bg-dark-1 w-full md:w-7/12 h-auto my-2 `,

    route: ` ${styles.flexSS} w-full h-16 px-4 xl:px-8 text-beige text-base xl:text-xl hover:bg-rose-3 hover:w-full hover:text-white hover:border-r-8 hover:border-rose-1 `,
    
    right_sec1: `${styles.flexCenter} rounded-lg bg-dark-2 w-5/6 h-16 my-2 `,
    right_sec2: `${styles.flexCenter} rounded-lg bg-dark-2 w-5/6 h-40 my-2 `,


    deets: `${styles.flexSS} w-full px-4`,
    question: `${styles.flexBetween} text-base md:text-xl text-white px-4 my-4`,
    skillset: `${styles.flexCenter} w-1/12 flex-col hidden md:block`,
    answer: `${styles.flexBetween} px-4 text-xs md:text-base`,
    likes: `${styles.flexBetween} rounded-b-xl bg-dark-3 w-full h-12 p-1 md:p-4 mt-2 md:mt-4`,
    
    bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm `,
    
    //bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm `,
};
  
export default styles;