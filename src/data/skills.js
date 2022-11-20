

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
        level: expertise.proficient
    },
    yarn: {
        id: 'yarn',
        langType: false, 
        level: expertise.proficient
    },
    chromeDev: {
        id: 'Chrome DevTools',
        langType: false, 
        level: expertise.proficient
    },
    google: {
        font: {
            id: 'Google Fonts', 
            langType: false, 
            level: expertise.proficient
        },
        analytic: {
            id: 'Google Analytics', 
            langType: false, 
            level: expertise.proficient
        },
        adsense: {
            id: 'Google AdSense', 
            langType: false, 
            level: expertise.proficient
        },
        // gwt: {
        //     id: 'GWT', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        map: {
            id: 'Google Maps', 
            langType: false, 
            level: expertise.proficient
        },
        // cloud: {
        //     id: 'Google Cloud', 
        //     langType: false, 
        //     level: expertise.novice
        // },
    },
    // wordPr: {
    //     id: 'WordPress', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // phaser: {
    //     id: 'Phaser', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    jquery: {
        id: 'jQuery', 
        langType: mainLang.js.id, 
        level: expertise.novice
    },
    // webVtt: {
    //     id: 'WebVTT', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // mediaEl: {
    //     id: 'MediaElement.js', 
    //     langType: mainLang.js.id, 
    //     level: expertise.novice
    // },
    // mp4: {
    //     id: 'MP4', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    // audio: {
    //     mp3: {
    //         id: "MP3", 
    //         langType: false, 
    //         level: expertise.proficient
    //     },
    //     ogg: {
    //         id: 'OGG', 
    //         langType: false, 
    //         level: expertise.proficient
    //     }
    // },
    // vlcMedia: {
    //     id: 'VLC Media Player', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    json: {
        id: "JSON", 
        langType: false, 
        level: expertise.proficient
    },
    // lock: {
    //     id: 'lock', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // jsx: {
    //     id: 'JSX', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    // p5: {
    //     id: 'P5.js', 
    //     langType: mainLang.js.id, 
    //     level: expertise.novice
    // },
    shell: {
        id: 'Shell Code', 
        langType: false, 
        level: expertise.proficient
    },
    unixShell: {
        id: 'UNIX Shell', 
        langType: false, 
        level: expertise.proficient
    },
    // c_sharp: {
    //     id: 'C#', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // unity: {
    //     id: 'Unity', 
    //     langType: mainLang.c_sharp.id, 
    //     level: expertise.novice
    // },
    // powerSh: {
    //     id: 'PowerShell', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // xml: {
    //     id: 'XML', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // aspNet: {
    //     id: 'ASP.NET', 
    //     langType: false, //mainLang.c_sharp.id, 
    //     level: expertise.novice
    // },
    terminal: {
        id: 'Terminal', 
        langType: false, 
        level: expertise.proficient
    },
    wix: {
        id: 'Wix', 
        langType: false, 
        level: expertise.proficient
    },
    goDaddy: {
        id: 'Go Daddy', 
        langType: false, 
        level: expertise.proficient
    },
    wireFrames: {
        id: 'Wireframes', 
        langType: false, 
        level: expertise.proficient
    },
    figma: {
        id: 'Figma', 
        langType: false, 
        level: expertise.proficient
    },
    asyncAwait: {
        id: 'Async/Await', 
        langType: false, 
        level: expertise.proficient
    },
    // http: {
    //     id: 'http/https', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    // wShark: {
    //     id: 'Wire Shark',
    //     langType: false, 
    //     level: expertise.novice
    // },
    unixCLI: {
        id: 'UNIX CLI',
        langType: false, 
        level: expertise.proficient
    },
    // aws: {
    //     id: 'AWS', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // cloud9: {
    //     id: 'Cloud9', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // nowVercel: {
    //     id: 'Now Vercel', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // netlify: {
    //     id: 'Netlify', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // testDev: {
    //     id: 'Test-Driven Development', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    dataAnaly: {
        id: 'Data Analytics', 
        langType: false, 
        level: expertise.novice
    },
    // devOps: {
    //     id: 'DevOps', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    webAccess: {
        id: 'Web Accessibility', 
        langType: false, 
        level: expertise.proficient
    },
    webOptimiz: {
        id: 'Web Optimization', 
        langType: false, 
        level: expertise.proficient
    },
    preformOptimiz: {
        id: 'Performance Optimization/Tuning', 
        langType: false, 
        level: expertise.proficient
    },
    // flexbox: {
    //     id: 'Flexbox', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    responsive: {
        id: 'Responsive Design/Layout', 
        langType: false, 
        level: expertise.proficient
    },
    // balsamiq: {
    //     id: 'Balsamiq', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    sql: {
        // sql:{
        //     id: 'SQL', 
        //     langType: false, 
        //     level: expertise.novice
        // },
        // alchemy: {
        //     id: 'SQLAlchemy', 
        //     langType: false, 
        //     level: expertise.novice
        // }
    },
    // ajax: {
    //     id: 'AJAX', 
    //     langType: mainLang.js.id, 
    //     level: expertise.proficient
    // },
    vSCode: {
        id: 'VS Code', 
        langType: false, 
        level: expertise.expert
    },
    adam: {
        id: 'Adam', 
        langType: false, 
        level: expertise.proficient
    },
    brackets:{
        id: 'Brackets',
        langType: false,
        level: expertise.novice
    },
    vS: {
        id: 'Visual Studio', 
        langType: false, 
        level: expertise.proficient
    },
    // iHWare: {
    //     id: 'Hardware Install', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    // cfgHWare: {
    //     id: 'Hardware Configuration', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    // rMComp: {
    //     id: 'Repair & Maintain Computer System in a Typical Office Environment', 
    //     langType: false, 
    //     level: expertise.proficient
    // },
    ftp: {
        id: 'FTP (File Transfer Protocol)', 
        langType: false, 
        level: expertise.proficient
    },
    fZilla: {
        id: 'File Zilla', 
        langType: false, 
        level: expertise.proficient
    },
    gitHubCP: {
        id: 'GitHub Copilot', 
        langType: false, 
        level: expertise.proficient
    },
    // docker: {
    //     id: 'Docker', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    windows: {
        id: 'Windows', 
        langType: false, 
        level: expertise.proficient
    },
    mac: {
        id: 'Mac', 
        langType: false, 
        level: expertise.expert
    },
    Linux: {
        id: 'Linux', 
        langType: false, 
        level: expertise.novice
    },
    // ios: {
    //     id: 'iOS', 
    //     langType: mainLang.swift.id, 
    //     level: expertise.novice
    // },
    // browserify: {
    //     id: 'Browserify', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // SEO: {
    //     id: 'SEO', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    // sass: {
    //     id: 'Sass', 
    //     langType: false, 
    //     level: expertise.novice
    // },
    api: {
        api: {
            id: 'API', 
            langType: false, 
            level: expertise.proficient
        },
        fetch: {
            id: 'FETCH API', 
            langType: false, 
            level: expertise.proficient
        },
        rest: {
            id: 'REST API', 
            langType: false, 
            level: expertise.proficient
        }
    },
    garageband: {
        id: 'Garageband',
        level: expertise.proficient
    },
    // milkyTrack: {
    //     id: 'Milky Tracker',
    //     level: expertise.novice
    // },
    imove: {
        id: 'iMove',
        level: expertise.novice
    },
    markdown: {
        id:'Markdown',
        level: expertise.proficient
    },
};

// name: {
//     id: '', 
//     langType: false, 
//     level: expertise.
// }

export const skill = {
    drawing: {
        id: 'Drawing', 
        level: expertise.novice
    },
    math: {
        id: 'Math', 
        level: expertise.proficient
    },
    githubEd: {
        comUsingMarkdown: {
            id:'Communicating using Markdown',
            level: expertise.proficient
        },
        upload: {
            id: 'Uploading your project to GitHub', 
            level: expertise.expert
        },
        intro: {
            id: 'Introduction to GitHub', 
            level: expertise.expert
        },
        // circleCI: {
        //     id: 'Continuous integration with CircleCI', 
        //     level: expertise.proficient
        // },
    },
    // darkRoomPhoto: {
    //     id: 'Dark Room Photography',
    //     level: expertise.novice
    // },
    // ASL: {
    //     id: 'American Sign Language',
    //     level: expertise.novice
    // },
    highSpeedKey: {
        id: 'High-Speed Keyboarding ',
        level: expertise.expert
    }
}