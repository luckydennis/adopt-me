const Pet = ({name,animal,breed}) => {
    return React.createElement(
        "div",
        {},[
        React.createElement("h1",{},name),
        React.createElement("h2",{},animal),
        React.createElement("h2",{},breed)
        ]
    )
}
const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},[
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet,{name:"Luna", animal:"Dog",breed:"Havanese"}),
        React.createElement(Pet,{name:"Meepo", animal:"Cat",breed:"mixed"}),
        React.createElement(Pet,{name:"max", animla:"Dog",breed:"golden"}),
        ]
    )
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)