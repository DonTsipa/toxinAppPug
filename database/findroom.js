const mongoose = require('mongoose');
var express = require('express');
var app = require('../app')
const models = require('../models');
/*function findRoom(filters){
    var correct = [];
    models.Room.find({}).then(rooms =>{
        rooms.forEach(room =>{
            if((room.price<=filters.range.priceMax)&&(room.price>=filters.range.priceMin)){
                    if(!filters.smoking || (filters.smoking && room.smoking)){
                        if(!filters.pets || (filters.pets && room.pets)){
                            if(!filters.friends || (filters.friends && room.friends)){
                                if(!filters.wide_coridor || (filters.wide_coridor && room.wide_coridor)){
                                    if(!filters.disabled_assistant || (filters.disabled_assistant && room.disabled_assistant)){
                                      if(filters.guests.children<= room.children){
                                        if(filters.guests.babies<= room.babies){
                                            if(filters.facilities.bedrooms<= room.bedrooms){
                                                if(filters.facilities.beds<= room.beds){
                                                    if(filters.facilities.bathrooms<= room.bathrooms){
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
        return correct;
    })
};*/
module.exports = (filtersObj)=>{
    return new Promise((resolve, reject) => {
                findRoom(filtersObj)

        function findRoom (filters){
            var correct = [];
            models.Room.find({}).then(rooms =>{
                rooms.forEach(room =>{
                    if((room.price<=filters.range.priceMax)&&(room.price>=filters.range.priceMin)){
                            if(!filters.smoking || (filters.smoking && room.smoking)){
                                if(!filters.pets || (filters.pets && room.pets)){
                                    if(!filters.friends || (filters.friends && room.friends)){
                                        if(!filters.wide_coridor || (filters.wide_coridor && room.wide_coridor)){
                                            if(!filters.disabled_assistant || (filters.disabled_assistant && room.disabled_assistant)){
                                              if(filters.guests.children<= room.children){
                                                if(filters.guests.babies<= room.babies){
                                                    if(filters.facilities.bedrooms<= room.bedrooms){
                                                        if(filters.facilities.beds<= room.beds){
                                                            if(filters.facilities.bathrooms<= room.bathrooms){
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
                console.log(correct.length);
                resolve(correct);
            })
        };

    });
    
}
