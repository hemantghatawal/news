function getNews(query){
    const url = "https://newsapi.org/v2/top-headlines?country=in&category="+query+"&apiKey=5202e4aeadc5484aa654c7524f48d290";
        $.ajax({      
          url: url,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loader").show();
          },
          
          complete: function(){
            $("#loader").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
              output +=`
                <div class="col l3 m6 s12">
                <div class="card medium hoverable">
                <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img alt="NA">
                </div>
                <div class="card-content">
                <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                <h6>${latestNews[i].title}</h6>
                </div>
                <div class="card-reveal">
                <span class="card-title"><i class="material-icons right">close</i></span>
                <p>${latestNews[i].description}</p>
                </div>
                <div class="card-action">
                <a href="${latestNews[i].url}" class="btn" target="_blank">Read more</a>
                </div>
                </div>
                </div>
              `;
            }
            
            if(output !== ""){
                console.log("Hemant");
              $("#newsResults").html(output);
            }
          },
            error:function(){
                $("newsResults").html("Some Error Occured");
                
            }
  })
}