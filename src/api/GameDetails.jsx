import 

function ShowDetails (){

    const id = game.id.useParams()
    if(!Game.id){ 
        return "game not found!"   
}
const detailGame = Game.find(game=>game.id === Number(id))

return(
    <div>
        <h1>game.name</h1>
        <h1>game.description</h1>
        <h1>game.rating</h1>
        <h1>game.platform</h1>
        <h1>game.genre</h1>
        <h1>game.year</h1>
    </div>
)
}