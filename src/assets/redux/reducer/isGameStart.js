const isGameStart = (state= false,action)=>{
  switch(action.type){
      case 'IS_GAME_START':
          state=action.payload
          return state
      default:
          return state
  }
}

export default isGameStart;