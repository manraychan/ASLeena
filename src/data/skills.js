

export const expertise = {
    expert: 'Expert',
    proficient: 'Proficient',
    novice: 'Novice'
};

export const mainLang = {
    js: {
        id:'JavaScript/Node.js',
        level: expertise.proficient
    },
    py: {
        id:'Python',
        level: expertise.proficient
    },
    // swift: {
    //     id:'Swift',
    //     level: expertise.novice
    // },
    // go: {
    //     id:'Go (Golang)',
    //     level: expertise.novice
    // },
    // java: {
    //     id:'Java',
    //     level: expertise.novice
    // }
    // rb: {
    //     id:'Ruby',
    //     level: expertise.novice
    // },
    // c_sharp: {
    //     id:'C#',
    //     level: expertise.novice
    // }
}

export const platform = {
    des: 'Desktop', 
    mob: 'Mobile',
    cloud: 'Cloud'
};

export const focus = {
    sofEngr: 'Software Engr',
    dev: {
        area: {
            fs: '(Full-Stack)',
            f: '(Front-End)',
            b: '(Back-End)'
        },
        type: { 
            wma: 'Web/Mobile/App Dev',
            wm: 'Web/Mobile Dev',
            wa: 'Web/App Dev',
            ma: 'Mobile/App Dev',
            w: 'Web Dev',
            m: 'Mobile Dev',
            a: 'App Dev'
        }
    },
    design: {
        xi: 'UX/UI Design',
        x: 'UX Design',
        i: 'UI Design',
        gd: 'Graphic Design'
    },
    game: {
        desDev: 'Game Design/Dev',
        dev: 'Game Dev',
        des: 'Game Design'
    },
    data: 'Data Sci',
    // AI: {
    //     AIMachineLearn: 'AI/Machine Learning',
    //     AI: 'AI',
    //     machineLearn: 'Machine Learing'
    // }
};

export const otherFocus = {
    art: {
        artDraw: 'Art Drawing',
        artDM: 'ArtDM',
    },
    webDes: 'Web Design',
    math: 'Math',
    science: 'Science',
    history: 'History',
    english: 'English',
    photography: 'Photography',
    electives: {
        photo: 'Photography',
        video: 'Video Production',
        typing: 'Typing'
    },
    language: 'Language',
    eth: 'Ethics',
    quant: 'Quant Math',
    afctCom:'Affective Communications',
    womHist: "Women's History",

};

export const tech = {
    // swift: {
    //     id: "Swift", 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // java: {
    //     id: "Java", 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // go: {
    //     id: "Go (Golang)", 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // goScrape: {
    //     id: 'Go Web Scraping', 
    //     langType: mainLang.go.id, 
    //     level: expertise.novice
    // },
    // goTempGen: {
    //     id: 'Go Template Generation', 
    //     langType: mainLang.go.id, 
    //     level: expertise.novice
    // },
    // goTest: {
    //     id: 'Go Testing', 
    //     langType: mainLang.go.id, 
    //     level: expertise.novice
    // },
    // goBenchmark: {
    //     id: 'Go Benchmarking', 
    //     langType: mainLang.go.id, 
    //     level: expertise.novice
    // },
    // swiftUI: {
    //     id:'SwiftUI', 
    //     langType: mainLang.swift.id, 
    //     level: expertise.novice
    // },
    // xCode: {
    //     id:'xCode', 
    //     langType: mainLang.swift.id, 
    //     level: expertise.proficient
    // },
    // balsamiq: {
    //     id:'Balsamiq', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // ai: {
    //     id:'AI/Machine Learning', 
    //     langType: mainLang.py.id, 
    //     level: expertise.novice
    // },
    // numPy: {
    //     id: 'NumPy',
    //     langType: mainLang.py.id,
    //     level: expertise.novice
    // },
    // matlab: {
    //     id: 'Matlab',
    //     langType: mainLang.py.id,
    //     level: expertise.novice
    // },
    // pandas: {
    //     id: 'Pandas',
    //     langType: mainLang.py.id,
    //     level: expertise.novice
    // },
    // handlebars: {
    //     id: 'Handlebars',
    //     langType: false,
    //     level: expertise.novice
    // },
    flask: {
        id:'Flask', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    flaskWTF:{
        id:'Flask-WTF', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    jinja2: {
        id:'Jinja2', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    express: {
        id: 'Express.js', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    heroku: {
        id: 'Heroku', 
        langType: false, 
        level: expertise.novice
    },
    // digOcean: {
    //     id: 'Digital Ocean', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    node: {
        id: 'Node.js', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    // jade: {
    //     id: 'Jade', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // pug: {
    //     id: 'Pug', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    bootstrap: {
        id: 'Bootstrap', 
        langType: false, 
        level: expertise.expert
    },
    boostrIcon: {
        id: 'Bootstrap Icons', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    react: {
        id: 'React.js', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    reactBootstrap: {
        id: 'React Bootstrap', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    reactRouter: {
        id: 'React Router', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    dom: {
        id: 'DOM', 
        langType: mainLang.js.id, 
        level: expertise.proficient
    },
    mongo: {
        id: 'MongoDB', 
        langType: false, 
        level: expertise.proficient
    },
    mongoose: {
        id: 'Mongoose', 
        langType: false, 
        level: expertise.novice
    },
    // twilio: {
    //     id: 'Twilio', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    js: {
        id: "JS", 
        langType: false, 
        level: expertise.proficient
    },
    // rb: {
    //     id: 'Ruby', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // rbOnRail: {
    //     id: 'Ruby on Rails', 
    //     langType: mainLang.rb.id, 
    //     level: expertise.novice
    // },
    // sinatra: {
    //     id: 'Sinatra', 
    //     langType: mainLang.rb.id, 
    //     level: expertise.novice
    // },
    // erb: {
    //     id: 'erb', 
    //     langType: mainLang.rb.id, 
    //     level: expertise.novice
    // },
    // activeRec: {
    //     id: 'Avtive Record', 
    //     langType: mainLang.rb.id, 
    //     level: expertise.novice
    // },
    py: {
        id: 'Python', 
        langType: false, 
        level: expertise.proficient
    },
    // pyTest: {
    //     id: 'Pytest', 
    //     langType: mainLang.py.id, 
    //     level: expertise.novice
    // },
    dotenv:{
        id: 'Dotenv', 
        langType: false, 
        level: expertise.proficient
    },
    // unittest: {
    //     id: 'Unit Test', 
    //     langType: mainLang.py.id, 
    //     level: expertise.novice
    // },
    html: {
        id: 'HTML', 
        langType: false, 
        level: expertise.expert
    },
    css: {
        id: 'CSS', 
        langType: false, 
        level: expertise.proficient
    },
    // passport: {
    //     id: 'Passport.js', 
    //     langType: mainLang.js.id, 
    //     level: expertise.novice
    // },
    // vimeo: {
    //     id: 'Vimeo JS Player SDK', 
    //     langType: mainLang.js.id, 
    //     level: expertise.novice
    // },
    bitBucket: {
        id: 'Bitbucket', 
        langType: false, 
        level: expertise.novice
    },
    git: {
        id: 'Git', 
        langType: false, 
        level: expertise.proficient
    },
    gitHub: {
        id: 'GitHub', 
        langType: false, 
        level: expertise.proficient
    },
    gitHubPg: {
        id: 'GitHub Pages', 
        langType: false, 
        level: expertise.proficient
    },
    bs4: {
        id: 'BeautifulSoup 4', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    selenium: {
        id: 'Selenium', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    request: {
        id: 'Requests', 
        langType: mainLang.py.id, 
        level: expertise.proficient
    },
    // browserify: {
    //     id: 'Browserify', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    CI_CD: {
        id: 'CI/CD', 
        langType: false, 
        level: expertise.proficient
    },
    resourceOverride: {
        id: 'Resource Override', 
        langType: false, 
        level: expertise.proficient
    },
    charlesProxy: {
        id: 'Charles Proxy', 
        langType: false, 
        level: expertise.proficient
    },
    postman: {
        id: 'Postman', 
        langType: false, 
        level: expertise.proficient
    },
    adobe: {
        photo: {
            id: 'Photoshop', 
            langType: false, 
            level: expertise.novice
        },
        analytics: {
            id: 'Adobe Analytics', 
            langType: mainLang.js.id, 
            level: expertise.proficient
        },
        // dream: {
        //     id: 'Dreamweaver', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        muse: {
            id: 'Adobe Muse', 
            langType: false, 
            level: expertise.novice
        },
        // XD: {
        //     id: 'Adobe XD', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // suite: {
        //     id: 'Adobe Creative Cloud Suite', 
        //     langType: false, 
        //     level: expertise.novice
        // }
    },
    // sketchApp: {
    //     id: 'Sketch', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // cloudPlat: {
    //     id: 'Cloud Platforms', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // img: {
    //     img: {
    //         id: 'Images', 
    //         langType: false, 
    //         level: expertise.expert
    //     },
        // svg: {
        //     id: 'SVG', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // png: {
        //     id: 'PNG', 
        //     langType: false, 
        //     level: expertise.expert
        // },
        // jpg: {
        //     id: 'JPG', 
        //     langType: false, 
        //     level: expertise.expert
        // },
        // jp2: {
        //     id: 'JP2', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // gif: {
        //     id: 'GIF', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // webp: {
        //     id: 'WebP', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // tiff: {
        //     id: 'TIFF', 
        //     langType: false, 
        //     level: expertise.expert
        // },
        // gif: {
        //     id: 'GIF', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // bmp: {
        //     id: 'BMP', 
        //     langType: false, 
        //     level: expertise.expert
        // },
        // pdf: {
        //     id: 'PDF', 
        //     langType: false, 
        //     level: expertise.expert
        // },
        // psd: {
        //     id: 'PSD', 
        //     langType: false, 
        //     level: expertise.expert
        // }
    // },
    trello: {
        id: 'Trello', 
        langType: false, 
        level: expertise.expert
    },
    localStor: {
        id: 'Local-Storage', 
        langType: false, 
        level: expertise.proficient
    },
    npm: {
        id: 'npm',
        langType: false, 