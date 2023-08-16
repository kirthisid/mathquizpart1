function login(){
    p1name=document.getElementById("p1name").value;
    p2name=document.getElementById("p2name").value;
   localStorage.setItem("player_1_name",p1name);
   localStorage.setItem("player_2_name",p2name);
   window.location="game_page.html";
}