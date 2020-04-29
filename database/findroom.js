const models = require('../models');
module.exports = (filtersObj)=>{
    return new Promise((resolve, reject) => {
        findRoom(filtersObj);
        function findRoom (filters){
            var correct = [];
            models.Room.find({}).then(rooms =>{
                rooms.forEach(room =>{
                    if((room.price<=filters.priceMax)&&(room.price>=filters.priceMin)){
                            if(!filters.smoking || (filters.smoking && room.smoking)){
                                if(!filters.pets || (filters.pets && room.pets)){
                                    if(!filters.friends || (filters.friends && room.friends)){
                                        if(!filters.wide_coridor || (filters.wide_coridor && room.wide_coridor)){
                                            if(!filters.disabled_assistant || (filters.disabled_assistant && room.disabled_assistant)){
                                              if(filters.children<= room.children){
                                                if(filters.babies<= room.babies){
                                                    if(filters.bedrooms<= room.bedrooms){
                                                        if(filters.beds<= room.beds){
                                                            if(filters.bathrooms<= room.bathrooms){
                                                                correct.push(room);
                                                            }  
                                                        }  
                                                    }  
                                                }  
                                              }  
                                            }
                                        }
                                    }
                                }
                        }
                }   
                })
                resolve(correct);
            })
        };

    });
    
}
