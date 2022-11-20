
import {tech, mainLang} from './skills';

let expert = '';
let proficient = '';
let novice = '';
const js = [];
const java = [];
const py = [];
const rb = [];
const swift = [];
const go = [];
const c_Sharp = [];

for(const key1 in tech){
    for(const key2 in tech[key1]){
        if(key2 == 'id'){
            if(tech[key1].level == 'Expert'){
                expert += `, ${tech[key1].id}`;
            }else if(tech[key1].level == 'Proficient'){
                proficient += `, ${tech[key1].id}`;
            }else if(tech[key1].level == 'Novice'){
                novice += `, ${tech[key1].id}`
            }
        } else if(key2 == 'langType') {
            if(tech[key1].langType == 'JavaScript'){
                js.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'Python'){
                py.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'Ruby'){
                rb.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'C#'){
                c_Sharp.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'Swift'){
                swift.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'Go (Golang)'){
                go.push({id: tech[key1].id, level: tech[key1].level});
            } else if(tech[key1].langType == 'Java'){
                java.push({id: tech[key1].id, level: tech[key1].level});
            }
        } else if(key2 != 'langType' && key2 != 'level'){
            for(const key3 in tech[key1][key2]){
                if(key3 == 'id'){
                    if(tech[key1][key2].level == 'Expert'){
                        expert += `, ${tech[key1][key2].id}`;
                    }else if(tech[key1][key2].level == 'Proficient'){
                        proficient += `, ${tech[key1][key2].id}`;
                    }else if(tech[key1][key2].level == 'Novice'){
                        novice += `, ${tech[key1][key2].id}`;
                    }
                }  else if(key3 == 'langType') {
                    if(tech[key1][key2].langType == 'JavaScript'){
                        js.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    } else if(tech[key1][key2].langType == 'Python'){
                        py.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    } else if(tech[key1][key2].langType == 'Ruby'){
                        rb.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    } else if(tech[key1][key2].langType == 'C#'){
                        c_Sharp.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    } else if(tech[key1][key2].langType == 'Swift'){
                        swift.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    } else if(tech[key1][key2].langType == 'Go (Golang)'){
                        go.push({id: tech[key1][key2].id, level: tech[key1][key2].level});
                    }
                }
            }
        }
    }
}

expert = expert.substring(2);
proficient = proficient.substring(2);
novice = novice.substring(2);

export const experience = {
    expert: expert,
    proficient: proficient,
    novice: novice
}

export const mainLanguages = [
    {
        level: mainLang.js.level,
        id: mainLang.js.id,
        associatedLang: js,
        src: "images/experience/js-logo.svg",
        alt: "programming language logo for JavaScript"
    },
    {
        level: mainLang.py.level,
        id: mainLang.py.id,
        associatedLang: py,
        src: "images/experience/python-logo.svg",
        alt: "programming language logo for Python"
    },
    // {
    //     level: mainLang.swift.level,
    //     id: mainLang.swift.id,
    //     associatedLang: swift,
    //     src: "images/experience/swift-logo.png",
    //     alt: "programming language logo for Swift"
    // },
    // {
    //     level: mainLang.go.level,
    //     id: mainLang.go.id,
    //     associatedLang: go,
    //     src: "images/experience/go-logo.png",
    //     alt: "programming language logo for Golang"
    // },
    // {
    //     level: mainLang.java.level,
    //     id: mainLang.java.id,
    //     associatedLang: java,
    //     src: "images/experience/java-logo.png",
    //     alt: "programming language logo for Java"
    // },
    // {
    //     level: mainLang.rb.level,
    //     id: mainLang.rb.id,
    //     associatedLang: rb,
    //     src: "images/experience/ruby-logo.svg",
    //     alt: "The Ruby Logo for the computer Science programming language"
    // },
    // {
    //     level: mainLang.c_sharp.level,
    //     id: mainLang.c_sharp.id,
    //     associatedLang: c_Sharp,
    //     src: "images/experience/c-sharp.svg",
    //     alt: "The C# Logo for the computer Science programming language"
    // }
];