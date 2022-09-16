

let q="";
let search= async () => {
    let query=document.querySelector("#query").value; 
   let data= await getData(query);
   q=query;
   console.log(data);
   append(data);
};

let getData = async (query) =>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyBZwr9XRN5liw5ah30t-6WHVB7nCPi4xjg`
    let res= await fetch(url);
    let data= await res.json();
   
    // console.log(data.items);
   return data.items;
};

let append = (data) => {
    let container=document.querySelector("#container");
    container.innerHTML=null;
    data.forEach((el)=>{

        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;
        let h3=document.createElement("h3");
        h3.innerText=el.snippet.title;
        let div= document.createElement("div");
        div.onclick= ()=> {
            saveVideo(el);
        }
        div.setAttribute("class","video");
        div.append(img,h3);
        container.append(div);
    });
};

let saveVideo=(data)=>{
 localStorage.setItem("video",JSON.stringify(data));
 window.location.href="video.html";
}

let filter=async ()=>{
    let data=await getData(q);
   data=data.filter((el)=>{
  return el.snippet.channelId=="UCvC4D8onUfXzvjTOM-dBfEA";
   });
   append(data);
};

let popular = async () =>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=latest&key=AIzaSyBZwr9XRN5liw5ah30t-6WHVB7nCPi4xjg`
    let res= await fetch(url);
    let data= await res.json();
   
    append(data.items);
//    return data.items;
};




