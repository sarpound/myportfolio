const projectHover = (state= false,action)=>{
  switch(action.type){
      case 'PROJECT_HOVER':
          state=action.payload
          return state
      default:
          return state
  }
}

export default projectHover;