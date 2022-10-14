
export const projectHover = (props)=>{
    return{
        type:"PROJECT_HOVER",
        payload:props
    }
}


export const projectImg = (props)=>{
    return{
        type:"PROJECT_HOVER_IMG",
        payload:props
    }
}

export const isGameStart = (props)=>{
    return{
        type:"IS_GAME_START",
        payload:props
    }
}

export const onPage = (props)=>{
    return{
        type:"ON_PAGE",
        payload:props
    }
}