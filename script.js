
onLoad()
    function onLoad()
    {
        document.body.innerHTML=` `
        var sec=document.createElement("section");
        sec.setAttribute("class","sec");
        sec.innerHTML=`
        <h1 class="text">ANIME</h1>
        <h1 class="text">SERIES</h1>
        <h1 class="text">COLLECTION</h1>
        <div class="search">
        <input type="text" class="searchbar" placeholder=" Type Naruto"> 
        <button class="button" onclick="getname()">Search</button>
        </div>`
        document.body.append(sec);
    }
    async function getname()
    {
        const name=document.querySelector(".searchbar").value;
        console.log(name);
        try
        {
            const data= await fetch("https://api.jikan.moe/v3/search/anime?q="+name);
            const users= await data.json();
            console.log(users);
            var arr=users.results;
            console.log(arr);
            document.body.innerHTML=` `
            var sec=document.createElement("section");
            sec.setAttribute("class","container_sec");
            var div=document.createElement("div");
            div.setAttribute("class","collection_container");
            sec.innerHTML=`
            <div class="header">
            <a href="#" onclick="onLoad()">
            <img src="home1.png" class="home_button" />
            </a>
            <h1 class="text">ANIME SERIES COLLECTION</h1>
            </div>`
            sec.append(div);
            document.body.append(sec);
            arr.forEach(array=> createContainer(array))
        }
        catch(err)
        {
            sec.innerHTML=`
            <div class="header">
            <a href="#" onclick="onLoad()">
            <img src="home1.png" class="home_button" />
            </a>
            <h1 class="text">Please Type Valid Series Name</h1>
            </div>`
            document.body.append(sec);
        }
    }
    function createContainer({image_url,title,score,start_date,end_date,type,synopsis})
    {
        var cont=document.createElement("div");
        cont.setAttribute("class","container");
        cont.innerHTML=`
        <img src=${image_url}/>
        <h1 class="txt">${title}</h1>
        <h3 class="details">Start Date: ${new Date(start_date).toDateString()}</h3>
        <h3 class="details">End Date: ${new Date(end_date).toDateString()}</h3>
        <h4 class="details">IMDB Score: ${score}</h4>
        <h4 class="details">Series Type: ${type}</h4>`
        document.querySelector(".collection_container").append(cont);
    }

