console.log("The Domain Name Generator");

let pronoun = ['the', 'our', "that", "one"];
let adj = ['great', 'big', "ultimate", "best", "last"];
let noun = ['jogger', 'racoon', "developer", "surfer", "coder"];
let extension = [".com", ".net", ".co.cr", ".edu", ".ac.cr"]

const domain_generator = () => {
    for (let i = 0; i < pronoun.length; i++) {
        let pronoun_msg = pronoun[i];
        for (let j = 0; j < adj.length; j++) {
            let adj_msg = adj[j];
            for (let k = 0; k < noun.length; k++) {
                let noun_msg = noun[k];
                for (let l= 0; l < extension.length; l++) {
                    let extension_msg = extension[l];
                    let domains = pronoun_msg+adj_msg+noun_msg+extension_msg;
                    console.log(domains);
                }
            }
        }
    }
};

domain_generator();
