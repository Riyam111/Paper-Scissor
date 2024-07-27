let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencomchoice=()=>{
const options=["rock","paper","scissor"];
const ranidx=Math.floor(Math.random()*3);
return options[ranidx];

};
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game draw";


};
const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
userscore++;
userscorepara.innerText=userscore;
        msg.innerText='you win'+' '+userchoice+ ' '+'beats'+' ' +comchoice;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText='you lose'+' ' +comchoice+' ' +'beats'+' '+userchoice;
        msg.style.backgroundColor="red";
    };
    
};
const playgame=(userchoice)=>{

    const comchoice=gencomchoice();
    
    if(userchoice==comchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=comchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=comchoice=="scissor"?false:true;
        }
        else{
            userwin=comchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
