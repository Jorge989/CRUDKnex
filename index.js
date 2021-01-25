const { fullOuterJoin } = require("./database");
var database = require("./database");
/*INSERT*/
// var dados =[
//     {
// nome: "Surf pro 2" ,
// preco: 70
//     },
//     {
// nome:"GTA",
// preco:58
//     }
// ]




//  var query = database.insert(dados).into("games").then(data=>{

//  }).catch(err =>{
//      console.log(err)
//  })

/*SELECT*/
// database.select(["id"]).table("games").then(data=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err)
// })

/*UMA QUERY DENTRO DA OUTRA*/
// database.insert({nome: "GOD OF WAR", preco:25}).into("games").then(data =>{
//     database.select(["id","preco"]).table("games").then(data=>{
//         console.log(data);   
//     }).catch(err=>{
//         console.log(err)
//     })
//     console.log(data);
// }).catch(err =>{
//     console.log(err)
// })


// database.select()
// .whereRaw("nome = 'Surf pro 2' OR preco > 50")
// .table("games").then(data=>{
//     console.log(data);

//     }).catch(err=>{
// console.log(err);
//     })


    // database.where({id:3}).delete().table("games").then(data=>{
    //     console.log(data);

    // }).catch(err=>{
    //     console.log(err);
    // })


    /*DELETE*/
    // database.where({id:5, id:7}).update({preco:90,}).table("games").then(data=>{
    //     console.log(data)
    // }).catch(err=>{
    //     console.log(err);
    // })

//     /*ORDER BY*/
//     database.select().table("games").orderBy("preco","desc").then(data=>{
// console.log(data)
//     }).catch(err=>{
//         console.log(err)
//     }) //desc decresente //asc cresente

    //1 p 1
    //1 p M
    //M p M
    //JOIN


//     database.insert({
//         nomes: "Blizaard",
//         game_id:5
//     }).table("estudios").then(data=>{
// console.log(data)
//     }).catch(err=>{
// console.log(err)
//     })


database.select(["games.*", "estudios.nomes as estudio.nome"]).table("games").innerJoin("estudios", "estudios.game_id","games.id").then(data=>{
console.log(data);
}).catch(err=>{
console.log(err)
})