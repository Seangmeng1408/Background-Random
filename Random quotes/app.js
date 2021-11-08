const random={
    randomQuotes:['"Love is a pill if you swallow by Doctor\'s common it will treat your sickness ,but if you swallow too much it will cause differences"'
    ,'When you tired you can relax ,but you can\'t give up'
    ,"Don't worry for losting something you love ,but be happy to had that something you love"
    ,"Love made you blind when you fall in love everything is wonderful in you eye "],
    RDauthor:[ "Meng","Meng","Unknown","Meng"]
    
};
const quotesText=document.getElementById("quoteText");
const AuthorName=document.getElementById("authorName");


function RQ(){
    const quotesNum=Math.floor(Math.random()*random.randomQuotes.length);
    const MYquote=random.randomQuotes[quotesNum];
    quotesText.innerText=MYquote;
    const MYAuthor=random.RDauthor[quotesNum];
    AuthorName.innerText=MYAuthor;
    
    
    
}


