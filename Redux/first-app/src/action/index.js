export function movieList(){
    return{
        type:"MOVIES_LIST",
        payload:[
            {id:1,name:"Rock"},
            {id:2,name:"Jokin Phoneix"},
            {id:3,name:"Boot Speed"}
        ]
    }
}