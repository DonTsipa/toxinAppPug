let roomcards = document.querySelectorAll('.cards_theme_room');
let datepicker_single = document.querySelectorAll('#datepicker_single');
roomcards.forEach(card=>{
    card.onclick = async function(e){
      let data = 'RoomId=' + encodeURIComponent(card.id[card.id.length - 1]) +
      '&Date=' + encodeURIComponent(datepicker_single.value);
          let response = await fetch('/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
          })
          window.location.href=window.location.origin+"/order"
    }
    
})