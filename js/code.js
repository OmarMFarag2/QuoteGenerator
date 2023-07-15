var Quotes = [
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "--Nelson Mandela"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "--Wayne Gretzy"
    },
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "--Epictetus"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "--Oscar Wilde"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "--Mae West"
    },
    {
        quote: "So many books, so little time.",
        author: "--Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul",
        author: "--Marcus Tullius Cicero"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "--Mahatma Gandhi"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "--Mark Twain"
    }
];
var prevRndmNum=-1;
function DisplayQuote() {
    var rndmNum, box = ``;
    for (; ;) {
        rndmNum =  Math.floor(Math.random() * Quotes.length);
        if (rndmNum!=prevRndmNum)
        {
            prevRndmNum=rndmNum;
            break;
        }
    }
    box += `<h3>""${Quotes[rndmNum].quote}"</h3>
        <h4>${Quotes[rndmNum].author}</h4>`
    document.getElementById("Quote").innerHTML=box;
}