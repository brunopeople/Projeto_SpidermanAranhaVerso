interface IProps{
    params: {
        id: string;
    };
}

export default function Hero({params: {id}}: IProps){
    return <h1> Spider Selecionado: {id}</h1>
}