
import LogoSvelte from '$lib/logo/svelte.svg';
import LogoCSS from '$lib/logo/css-3-logo.svg';
import LogoAngular from '$lib/logo/angular.svg';
import LogoFirebase from '$lib/logo/firebase-logo.svg';
import LogoJest from '$lib/logo/jest.svg';
import LogoJQuery from '$lib/logo/jquery.svg';
import LogoMysql from '$lib/logo/mysql.svg';
import LogoNodejs from '$lib/logo/node js.svg';
import LogoPHP from '$lib/logo/php.svg';
import LogoReact from '$lib/logo/react.svg';
import LogoSpringBoot from '$lib/logo/spring-boot.svg';
import LogoVue from '$lib/logo/vue.svg';
import LogoVuetify from '$lib/logo/vuetify.svg';
import LogoTensorflow from '$lib/logo/tensorflow.svg';

type Tool = {
    name: string,
    logo: string | null,
    description: string | null
}

type Tools = {
    androidStudioEmulator: Tool
    angular: Tool,
    bootstrap: Tool,
    chartJs: Tool,
    css: Tool,
    firebase: Tool,
    html: Tool,
    jest: Tool,
    jQuery: Tool,
    JavaScript: Tool,
    mySQL: Tool,
    nodeJs: Tool,
    php: Tool,
    react: Tool,
    reactMaterialUi: Tool,
    reactNative: Tool,
    reactNativePaper: Tool,
    svelte: Tool,
    springBoot: Tool,
    vue2: Tool,
    vuetify: Tool,
    tensorflow: Tool,
}

type ExperienceTools = {
    description: string,
    tools: Tool[],
}

type Biodata = {
    name: string,
    age: number,
    phone: string,
    email: string,
    github: string,
    from: string,
    education: string
}

export const biodata: Biodata = {
    name: "Muhammad Izzat bin Abd Razab",
    age: 23,
    phone: "+60\u00A011-1304\u00A08308",
    email: "izzatrazab@gmail.com",
    github: "izzatrazab",
    from: "Kuala Terengganu - Malaysia",
    education:
        "Bachelor of Computer Science (Software Engineering)  University of Malaya (cgpa: 3.65). I already finished all semesters and expected to officially graduate early next year.",
}

export const tools: Tools = {
    androidStudioEmulator: {
        name: "Android Studio Emulator",
        logo: null,
        description: null
    },
    angular: {
        name: "Angular",
        logo: LogoAngular,
        description: "sdfsdf"
    },
    bootstrap: { name: "Bootstrap", logo: null, description: null },
    chartJs: { name: "Chart.js", logo: null, description: null },
    css: {
        name: "CSS",
        logo: LogoCSS,
        description: "As of now, I only use CSS to customize styles. It suits my use cases up until now. I might transition to others like Sass if css does not fulfil my needs."
    },
    firebase: {
        name: "Firebase",
        logo: LogoFirebase,
        description: "During Hackathon MAMPU - CHIPTA, my friend suggested to use firebase. From there I started to know more about firebase and NoSQL database."
    },
    html: { name: "HTML", logo: null, description: null },
    jest: {
        name: "Jest",
        logo: LogoJest,
        description: "I used Jest for testing the backend (Node Js) of my final year project but I'm still not fully master it. I'm definitely going to explore more of Jest as it can test many other frameworks."
    },
    jQuery: { name: "jQuery", logo: LogoJQuery, description: "" },
    JavaScript: { name: "JavaScript", logo: null, description: "" },
    mySQL: {
        name: "MySQL",
        logo: LogoMysql,
        description: "I mainly use MySQL for database. I started to learn MySQL during my 3rd semester in Web Programming course. I really like relational database, it is a really clean way to save data. But unfortunately, it is not easy to do real-time with MySQL. Currently I am looking a new real time database to learn such as Firebase or PocketBase."
    },
    nodeJs: {
        name: "Node Js",
        logo: LogoNodejs,
        description: "Node js is the backend that I used for my final year project my final year project. I used it with express and sequelize."
    },
    php: {
        name: "PHP",
        logo: LogoPHP,
        description: "PHP is the first language that I used for backend, I used this during internship as well. From time to time, I would help my internship supervisor with his hospital project that uses PHP. Unfortunately, I did not use any structure or good practice using PHP. Now that I am more concern about structure and best practice. I will go back to learn proper PHP good practices or even learn php framework such as Laravel."
    },
    react: {
        name: "React",
        logo: LogoReact,
        description: "I started to use react during internship for Hearse Booking project. I watched several youtube tutorials on react to improve my understanding on react. After internship, I created a typing test mini app. Now that I finished studying, I might start using it again with Next.js"
    },
    reactMaterialUi: { name: "React Material UI", logo: null, description: "" },
    reactNative: {
        name: "React Native",
        logo: LogoReact,
        description: "I was introduced to react native from a friend when we were competing in a Hackathon (organized by MAMPU JPM called 'Hackathon MAMPU - CHIPTA). We were required to build an app. I also used react native for Hearse Booking app during internship at HSNZ."
    },
    reactNativePaper: { name: "React Native Paper", logo: null, description: "" },
    svelte: {
        name: "Svelte",
        logo: LogoSvelte,
        description: "Svelte would be at the top of my learning list at the moment. For some reason I like its structure compared to other frameworks. For start, I build this portfolio page using svelte and I'm loving it."
    },
    springBoot: {
        name: "Spring Boot",
        logo: LogoSpringBoot,
        description: "I know Spring Boot from Component Based Software Engineering course in my last semester of University. In a team, we are required to improve a project (any public project in the Internet) using Spring Boot. I am amazed how Spring Boot makes development faster and easier."
    },
    vue2: {
        name: "Vue 2",
        logo: LogoVue,
        description: "I used Vue 2 for my final year project (Teledentistry system). This is the front end framework that I used the longest and I'm confident with it. Though I might switch to Vue 3."
    },
    vuetify: {
        name: "Vuetify",
        logo: LogoVuetify,
        description: "Vuetify is one of the component framework for Vue, I used this along with Vue 2 for my final year project."
    },
    tensorflow: {
        name: "Tensorflow",
        logo: LogoTensorflow,
        description: "I used tensorflow to build AI models. With it I managed to build AI flappy bird game using Javascript (soft computing subject) that trains on its own to achieve better score. I also manage to build models that can identify either grass or not grass using python for the controller of a grass cutter robot simulation in Webots (real-time system subject)."
    }
}

export const moreExperienceTools: ExperienceTools = {
    description: "These are the framework/database that I'm confident with. As far as I remember, I used them the longest if compared to others. Click the icon to see the details.",
    tools: [tools.vue2, tools.vuetify, tools.css, tools.nodeJs, tools.mySQL, tools.php]
}

export const lessExperienceTools: ExperienceTools = {
    description: "These are the technologies that I have used (I'm still less experience with them) . Nevertheless, I am still going to check them out again in the future to explore their potential. Click the icon to see the details.",
    tools: [
        tools.react,
        tools.reactNative,
        tools.svelte,
        tools.jest,
        tools.springBoot,
        tools.firebase,
        tools.angular,
        tools.tensorflow
    ]
}

// Projects
type Project = {
    name: string,
    description: string[],
    img: string[] | null,
    tools: Tool[]
}

const kakitangan: Project = {
    name: "Kakitangan",
    description: ["The idea is to unified all staff managements of different department to one central platform. The Admin can CRUD staff data and can view some charts."],
    img: null,
    tools: [
        tools.html,
        tools.php,
        tools.JavaScript,
        tools.jQuery,
        tools.bootstrap,
        tools.chartJs
    ]
}

const hearseBooking: Project = {
    name: "Hearse Booking",
    description: ["This system aims to digitalize the physical process of hearse booking at HSNZ. It consist of a website and a mobile app.", "The website is for admin (manage bookings and drivers) and client (booking hearse) while the mobile app is for the hearse drivers."],
    img: null,
    tools: [tools.react, tools.reactMaterialUi, tools.reactNative, tools.androidStudioEmulator, tools.reactNativePaper, tools.php],
}

const jomTaip: Project = {
    name: "JomTaip",
    description: ["JomTaip is a simple typing test I created using react right after my internship ends. I followed the design of typing test in 10fastfingers.com"],
    img: null,
    tools: [tools.react]

}

export const internshipHSNZ = {
    projects: [kakitangan, hearseBooking]
}

export const personalProjects = [jomTaip]