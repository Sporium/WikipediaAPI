$(document).ready(function(){




 $('#searchbutton').click(function(){

  var request =$('#search').val();
  var api= 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +request+  '&format=json&callback=?';
//  var api ='https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+request+'&callback=JSON_CALLBACK';
  console.log(api);
  $.getJSON(api, function(data) {
   console.log(data);
   $('#result').html('');
    for ( var i=data[1].length-1;i>=0;i--){
    $('#result').prepend('<li> <div class="entrys"> <a href="'+data[3][i]+'" target="blank">'+"  "+data[1][i]+'</a><p class="text-left">   '+ "   "+ data[2][i]+'</p></div></li>');
    }
    console.log(data[1]);
    console.log(data[2][1]);
    console.log(data[3][1]);
    console.log(data.length);
  })
})
  $('#search').keypress(function(e){
    if (e.which==13){
      $('#searchbutton').click();
    }
  })
})
