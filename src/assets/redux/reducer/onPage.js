const onPage = (state= "Home",action)=>{
  switch(action.type){
      case 'ON_PAGE':
          state=action.payload
          return state
      default:
          return state
  }
}

export default onPage;